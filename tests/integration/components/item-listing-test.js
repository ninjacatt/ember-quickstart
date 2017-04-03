import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember'

let listingItem = Ember.Object.create({
  image: 'fake.png',
  title: 'fake-title',
  owner: 'fake-owner',
  type: 'fake-type',
  city: 'fake-city'
});

moduleForComponent('item-listing', 'Integration | Component | item listing', {
  integration: true
});

test('it renders', function(assert) {
  this.set('listingObj', listingItem);
  this.render(hbs`{{item-listing listingItem = listingObj}}`);
  assert.equal(this.$('.listing h3').text(), 'fake-title', 'Title: fake-title');
  assert.equal(this.$('.listing .owner').text().trim(), 'Owner: fake-owner');
});

test('toggle image', function(assert) {
  this.set('listingObj', listingItem);
  this.render(hbs`{{item-listing listingItem = listingObj}}`);
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
