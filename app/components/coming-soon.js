import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["fill"],

  currentYear: Ember.computed(function() {
    return new Date().getFullYear();
  }),

  actions: {
    connect(type) {
      if (type === 'email') {
        window.open('mailto:nikash.n90@gmail.com?subject=Regarding your website');
      } else if (type === 'linkedin') {
        window.open('https://www.linkedin.com/in/nikashn');
      } else if (type === 'facebook') {
        window.open('https://www.facebook.com/nikash.n');
      }
    }
  }
});
