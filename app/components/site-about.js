import Ember from 'ember';

export default Ember.Component.extend({
  info: null,

  init() {
    this._super(...arguments);
    this.set('info', [
      {
        label: "D.O.B",
        data: "October 02 1990"
      },
      {
        label: "Phone",
        data: "+1 (781) 609-7907"
      },
      {
        label: "E-Mail",
        data: "nikash.n90@gmail.com"
      },
      {
        label: "Website",
        data: "http://nikash-narendra.com"
      },
      {
        label: "Location",
        data: "Massachusetts, USA"
      }
    ]);
  }
});
