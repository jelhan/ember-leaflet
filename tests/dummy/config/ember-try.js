'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    scenarios: [
      {
        name: 'ember-lts-3.28-leaflet-0.7.7',
        npm: {
          devDependencies: {
            'ember-source': '~3.28',
            'ember-data': '~3.28',
            'ember-leaflet-marker-cluster': '0.2.0',
            'ember-resolver': '^8.1.0',
            leaflet: '~0.7.7'
          }
        }
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-resolver': '^8.1.0',
            'ember-source': '~4.4.0'
          }
        }
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-composability-tools': '^2.0.0',
            'ember-source': await getChannelURL('release')
          }
        }
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-composability-tools': '^2.0.0',
            'ember-source': await getChannelURL('beta')
          }
        }
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-composability-tools': '^2.0.0',
            'ember-source': await getChannelURL('canary')
          }
        }
      },
      embroiderSafe(),
      embroiderOptimized()
    ]
  };
};
