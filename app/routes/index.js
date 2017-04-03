import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    queryParamsDidChange: function(changedParam) {
      this._super(...arguments);
      if (Ember.isPresent(changedParam.anchor)) {
        let elem = Ember.$(changedParam.anchor);
        if (Ember.isPresent(elem)) {
          Ember.$(document.body).animate({
              'scrollTop': Ember.$(elem).offset().top
            }, 1000);
        }
      }
    }
  }
});
