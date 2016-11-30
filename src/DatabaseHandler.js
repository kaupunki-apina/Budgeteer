
import {
  AsyncStorage,
} from 'react-native';

import Spending from './models/Spending';

const KEY_SPENDING = "spending";

export default class DatabaseHandler {
  constructor() {
    this.asyncStorage = AsyncStorage.getItem(KEY_SPENDING)
      .then((value) => {
        this.spending = value === null
          ? {}
          : JSON.parse(value);
      }).done();
  }

  getSpending(year, month) {
    // const daysInMonth = new Date(year, month, 0).getDate();
    // const monthlySpending = [daysInMonth];
    //
    // if (this.spending[year] !== undefined ||
    //   this.spending[year][month] !== undefined
    // ) {
    //   this.spending[year][month].map((key, value) => {
    //     // TODO
    //     // Populate returned array
    //   });
    // }
  }

  putExpenditure(amount, day, month, year) {
    if (this.spending[year] === undefined) this.spending[year] = [];
    if (this.spending[year][month] === undefined) this.spending[year][month] = [];
    if (this.spending[year][month][day] === undefined) this.spending[year][month][day] = 0;
    this.spending[year][month][day] += amount;
    return this;
  }

  flush() {
    AsyncStorage.setItem(
      KEY_SPENDING,
      JSON.stringify(this.spending)
    );
  }
}
