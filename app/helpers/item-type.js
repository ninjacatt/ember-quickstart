import Ember from 'ember';

const propertyType = [
  'Condo',
  'Townhouse',
  'Apartment',
  'Estate'
];
export function itemType([type]) {
  if (propertyType.includes(type)) {
    return 'Property';
  } else {
    return 'Others';
  }
}

export default Ember.Helper.helper(itemType);
