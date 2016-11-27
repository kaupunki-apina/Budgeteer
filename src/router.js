
import {
  createRouter,
} from '@exponent/ex-navigation';

import AddExendature from './containers/AddExpendature';
import PastExpendature from './containers/PastExpendature';

const Router = createRouter(() => ({
  addExendature: () => AddExendature,
  pastExpendature: () => PastExpendature,
}));

export default Router;
