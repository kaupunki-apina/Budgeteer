
import {
  AsyncStorage,
} from 'react-native';

import Spending from './models/Spending';

const KEY_SPENDING = "spending";

export default class DatabaseHandler {
  constructor() {
    this.asyncStorage = AsyncStorage.getItem(KEY_SPENDING)
      .then((value) => {
        if (value == null) {
          this.spending = [];
        } else {
          this.spending = JSON.parse(value);
        }
      }).done();
  }

  async getSpending() {
    
  }

  putExpenditure(amount) {
    const spending = new Spending();
    spending.amount = amount;
    this.spending.push(spending);
    return this;
  }

  flush() {
    AsyncStorage.setItem(
      KEY_SPENDING,
      JSON.stringify(this.spending)
    );
  }
}
