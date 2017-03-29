import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('listings'); // default view will be listing page
  }
});
