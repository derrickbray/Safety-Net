import Ember from 'ember';

export function arrReverse([arr]/*, hash*/) {
  return [...arr].reverse();
}

export default Ember.Helper.helper(arrReverse);
