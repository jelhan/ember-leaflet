'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    fingerprint: {
      exclude: ['assets/images']
    },
    'ember-cli-favicon': {
      faviconsConfig: {
        path: '/ADDON_DOCS_ROOT_URL'
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');

  // These rules tell embroider that `c.component` (a block param property from
  // #each this.componentsToYield) is safe to use with the (component) helper.
  // The value is always a component class imported in the corresponding JS file,
  // never a string, so this is safe under staticComponents: true.
  const componentTemplates = [
    'components/base-layer.hbs',
    'components/leaflet-map.hbs',
    'components/geojson-layer.hbs'
  ];
  const packageRules = [
    {
      package: 'ember-leaflet',
      addonTemplates: Object.fromEntries(componentTemplates.map((t) => [t, { invokes: { 'c.component': [] } }]))
    }
  ];

  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit'
      }
    ],
    packageRules
  });
};
