
import {
  AsyncStorage,
} from 'react-native';

const KEY_SPENDING = "spending";

export default class DatabaseHandler {
  constructor() {
    this.asyncStorage = AsyncStorage.getItem(KEY_SPENDING)
      .then((value) => {
        this.spending = (value === null)
          ? {}
          : JSON.parse(value);
      });
  }

  async getSpending(year, month) {
    await this.asyncStorage;
    return new Promise((resolve, reject) => {
      // Helper variable
      const today = new Date();
      const isCurrentMonth = (year, month) => {
        return today.getMonth() === month
          && today.getFullYear() === year
      };

      // Past months have full months worth of days. Current one only
      // up until today.
      const daysInMonth = isCurrentMonth(year,month)
        ? today.getDate()
        : new Date(year, month + 1, 0).getDate();

      var monthlySpending = Array.apply(null, Array(daysInMonth)).map(() => { return 0 });
      if (this.spending.hasOwnProperty(year)
        && this.spending[year].hasOwnProperty(month)
      ) {
        Object.keys(this.spending[year][month]).map((day) => {
          monthlySpending[day] = this.spending[year][month][day]
        });
      }
      resolve(monthlySpending);
    });
  }

  async putExpenditure(amount, day, month, year) {
    await this.asyncStorage;
    return new Promise((resolve, reject) => {
      if (!this.spending.hasOwnProperty(year)) this.spending[year] = {};
      if (!this.spending[year].hasOwnProperty(month)) this.spending[year][month] = {};
      if (!this.spending[year][month].hasOwnProperty(day)) this.spending[year][month][day] = 0;
      this.spending[year][month][day] += amount;
      resolve(this);
    })
  }

  flush() {
    AsyncStorage.setItem(
      KEY_SPENDING,
      JSON.stringify(this.spending)
    );
  }
}
