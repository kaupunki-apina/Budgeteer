
import {
  AsyncStorage,
} from 'react-native';

import config from './config';

export default class DatabaseHandler {
  constructor() {
    this.asyncStorage = AsyncStorage.getItem(config.KEY_SPENDING)
      .then((spendingStr) => {
        this.spending = (spendingStr === null)
          ? {}
          : JSON.parse(spendingStr);
      });

    this.asyncStorageBudget = AsyncStorage.getItem(config.KEY_BUDGET)
      .then((budgetStr) => {
        this.budget = (budgetStr === null)
        ? config.defaultBudget
        : Number(budgetStr);
      });

    this.asyncStorageCurrency = AsyncStorage.getItem(config.KEY_CURRENCY)
      .then((currencyStr) => {
        this.currency = (currencyStr === null)
        ? config.defaultCurrency
        : currencyStr
      });
  }

  async getSpending(year, month) {
    await this.asyncStorage;
    await this.asyncStorageBudget;

    return new Promise((resolve, reject) => {
      // Helper variable
      const today = new Date();
      const isCurrentMonth = (year, month) => {
        return today.getMonth() === month
          && today.getFullYear() === year
      };

      // Past months have full months worth of days. Current one only
      // up until today.
      const currentMonth = isCurrentMonth(year, month)
      var budget = 0;
      const daysInMonth = currentMonth
        ? today.getDate()
        : new Date(year, month + 1, 0).getDate();

      var monthlySpending = Array.apply(null, Array(daysInMonth)).map(() => { return 0 });
      if (this.spending.hasOwnProperty(year)
        && this.spending[year].hasOwnProperty(month)
      ) {
        if (this.spending[year][month].hasOwnProperty("spending")) {
          Object.keys(this.spending[year][month]["spending"]).map((day) => {
            monthlySpending[day] = this.spending[year][month]["spending"][day];
          });
        }

        if (this.spending[year][month].hasOwnProperty("budget") && !isCurrentMonth) {
          budget = this.spending[year][month]["budget"];
        } else if (isCurrentMonth) {
          budget = this.budget;
        }
      }
      resolve({
        spending: monthlySpending,
        budget: budget,
      });
    });
  }

  saveBudget(budget) {
    this.budget = budget;
    AsyncStorage.setItem(
      config.KEY_BUDGET,
      JSON.stringify(Math.floor(budget))
    );
  }

  async getBudget() {
    await this.asyncStorageBudget;
    return this.budget;
  }

  saveCurrency(currency) {
    this.currency = currency
    AsyncStorage.setItem(
      config.KEY_CURRENCY,
      currency
    );
  }

  async getCurrency() {
    await this.asyncStorageCurrency;
    return this.currency;
  }

  async putExpenditure(amount, day, month, year) {
    await this.asyncStorage;
    await this.asyncStorageBudget;
    return new Promise((resolve, reject) => {
      if (!this.spending.hasOwnProperty(year)) this.spending[year] = {};
      if (!this.spending[year].hasOwnProperty(month)) this.spending[year][month] = {spending:{}, budget: {}};
      if (!this.spending[year][month]["spending"].hasOwnProperty(day)) this.spending[year][month]["spending"][day] = 0;
      this.spending[year][month]["spending"][day] += amount;
      this.spending[year][month]["budget"] = this.budget;
      resolve(this);
    })
  }

  flush() {
    AsyncStorage.setItem(
      config.KEY_SPENDING,
      JSON.stringify(this.spending),
    );
  }
}
