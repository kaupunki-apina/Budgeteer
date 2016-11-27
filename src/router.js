
import {
  createRouter,
} from '@exponent/ex-navigation';

import AddExendature from './containers/AddExpendature';

const Router = createRouter(() => ({
  addExendature: () => AddExendature,
}));

export default Router;
