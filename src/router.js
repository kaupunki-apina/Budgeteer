
import {
  createRouter,
} from '@exponent/ex-navigation';

import AddExendature from './containers/AddExpenditure';
import PastExpenditure from './containers/PastExpenditure';

const Router = createRouter(() => ({
  addExendature: () => AddExendature,
  pastExpenditure: () => PastExpenditure,
}));

export default Router;
