'use strict';

// ember-source@3.28 calls this.project.bowerDependencies() in its init(),
// but ember-cli@5.x removed that method. Restore a no-op shim so old
// ember-source versions don't crash.
module.exports = {
  name: 'bower-compat',

  init() {
    this._super.init && this._super.init.apply(this, arguments);
    if (typeof this.project.bowerDependencies !== 'function') {
      this.project.bowerDependencies = () => ({});
    }
  }
};
