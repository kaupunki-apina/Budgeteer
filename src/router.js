
import {
  createRouter,
} from '@exponent/ex-navigation';

import Menu from './containers/Menu';
import AddExendature from './containers/AddExpenditure';
import PastExpenditure from './containers/PastExpenditure';

const Router = createRouter(() => ({
  addExendature: () => AddExendature,
  pastExpenditure: () => PastExpenditure,
  menu: () => Menu,
}));

export default Router;
