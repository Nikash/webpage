import Ember from 'ember';

export default Ember.Component.extend({
  info: null,

  init() {
    this._super(...arguments);
    this.set('info', [
      {
        label: 'Phone',
        data: '<a href="tel:+17816097907">+1 (781) 609-7907</a>'
      },
      {
        label: 'E-Mail',
        data: '<a href="mailto:nikash.n90@gmail.com?subject=Regarding your website" target="_blank">nikash.n90@gmail.com</a>'
      },
      {
        label: 'Website',
        data: '<a href="http://nikash-narendra.com">http://nikash-narendra.com</a>'
      },
      {
        label: 'Location',
        data: '<a href="http://maps.google.com/?q=Boston" target="_blank">Boston</a>'
      }
    ]);
  }
});
