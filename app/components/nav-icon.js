import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['mouse-pointer'],
  mouseIn: false,
  
  mouseEnter() {
    this.set('mouseIn', true);
  },
  
  mouseLeave() {
    this.set('mouseIn', false);
  },
  
  click() {
    let hash = "#" + this.get('text');
    Ember.$(document.body).animate({
        'scrollTop': Ember.$(hash).offset().top
    }, 2000);
  },
  
  actions: {

  }
});
