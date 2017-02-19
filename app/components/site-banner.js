import Ember from 'ember';

export default Ember.Component.extend({
  navs: null,
  init() {
    this._super(...arguments);
    this.navs = [
      {
        icon: 'user',
        text: 'About'
      },
      {
        icon: 'briefcase',
        text: 'Work'
      },
      {
        icon: 'graduation-cap',
        text: 'Education'
      },
      {
        icon: 'laptop',
        text: 'Skills'
      },
      {
        icon: 'address-card',
        text: 'Contact'
      }
    ];
  }
});
