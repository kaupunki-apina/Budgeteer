
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
      }).done();
  }

  getSpending(year, month) {
    return new Promise((resolve, reject) => {
      const daysInMonth = new Date(year, month, 0).getDate();
      const monthlySpending = [daysInMonth];
      if (this.spending[year] !== undefined ||
        this.spending[year][month] !== undefined
      ) {
        this.spending[year][month].map((key, value) => {
          // TODO
          // Populate array
          console.log("key: " + key + "  value: " + value);
        });
      }
      reject("tmp");
    });
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
