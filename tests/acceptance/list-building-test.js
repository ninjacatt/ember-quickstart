import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list building');

test('should show listings as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/listings', 'should redirect automatically');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")'); // jQuery selector
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should go to about page');
  });
});

test('should link to listing information.', function (assert) {
  visit('/');
  click('a:contains("Listings")')
  andThen(function() {
    assert.equal(currentURL(), '/listings', 'should go to about page');
  });
});

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

test('should filter the list of rentals by city.', function () {
});

test('should show details for a selected rental', function () {
});
