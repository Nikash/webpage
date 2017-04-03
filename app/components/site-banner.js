import Ember from 'ember';

export default Ember.Component.extend({
  navs: null,
  init() {
    this._super(...arguments);
    this.set('navs', [
      {
        icon: 'user',
        text: 'About',
        anchor: '#about'
      },
      {
        icon: 'briefcase',
        text: 'Work',
        anchor: '#work'
      },
      {
        icon: 'graduation-cap',
        text: 'Education',
        anchor: '#education'
      }//,
      // {
      //   icon: 'laptop',
      //   text: 'Skills'
      // },
      // {
      //   icon: 'address-card',
      //   text: 'Contact',
      //   anchor: '#contact'
      // }
    ]);
  }
});
