import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['anchor'],
  anchor: null,

  init() {
    this._super(...arguments);
    //Check to see if the window is top if not then display button
    Ember.$(window).scroll(function(){
      if (Ember.$(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
  }

});
