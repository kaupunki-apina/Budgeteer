
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  AsyncStorage,
  ScrollView
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import DatabaseHandler from '../DatabaseHandler';
import BarChart from '../components/BarChart';
import ImageButton from '../components/ImageButton';
import iconLeft from '../../img/icons/left.png';
import iconRight from '../../img/icons/right.png';

const KEY_SPENDING = "spending";

export default class PastExpenditure extends Component {
  constructor(props) {
    super(props);
    this.databaseHandler = new DatabaseHandler();
    this.state = {
      spending: [],
      budget: [],
      date: new Date(),
    };
    // TODO
    // Use localization
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.updateSpending = this.updateSpending.bind(this)
    this.updateSpending();
  }

  updateSpending() {
    this.databaseHandler.getSpending(
      this.state.date.getFullYear(),
      this.state.date.getMonth()
    ).then((result) => {
      // TODO
      var budget = result.budget;
      var budgetData = Array(result.spending.length);

      result.spending.map((entry, index) => {
        budget -= entry;
        budgetData[index] = budget;
      });

      this.setState({
        spending: result.spending,
        budget: budgetData,
      });
    }).catch((error) => {
      console.log(error)
    });
  }
  render() {
    const today = new Date();

    return (
      <ScrollView
        style={styles.rootContainer}
      >
        <View
          style={[
            styles.contentContainer,
            styles.header,
          ]}
        >
          <ImageButton
            style={styles.button}
            iconName={"chevron-left"}
            onPress={() => {
              var month = this.state.date.getMonth() - 1;
              var year = this.state.date.getFullYear();

              if (month < 0) {
                month = 11;
                year--;
              }
              this.setState({
                date: new Date(year, month),
              }, () => {
                this.updateSpending()
              });
            }}
          />
          <View
            style={styles.headerTextContainer}
          >
            <Text
              style={styles.headerTextPrimary}
            >
              {this.months[this.state.date.getMonth()]}
            </Text>
            <Text
              style={styles.headerTextSeconday}
            >
              {this.state.date.getFullYear()}
            </Text>
          </View>
          <ImageButton
            style={styles.button}
            iconName={"chevron-right"}
            enabled={
              today.getFullYear() === this.state.date.getFullYear() &&
              today.getMonth() > this.state.date.getMonth()
            }
            onPress={() => {
              var month = this.state.date.getMonth() + 1;
              var year = this.state.date.getFullYear();

              if (month > 11) {
                month = 0;
                year++;
              }
              this.setState({
                date: new Date(year, month),
              }, () => {
                this.updateSpending()
              });
            }}
          />
        </View>
        <View
          style={[
            styles.contentContainer,
          ]}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <BarChart
              title={"Spending"}
              rightToLeft={true}
              data={this.state.spending}
              style={styles.chart}
            />
            <BarChart
              title={"Budget"}
              data={this.state.budget}
              style={styles.chart}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '$color.themeLight',
  },
  contentContainer: {
    paddingHorizontal: '$dimen.contentMargin',
  },
  header: {
    backgroundColor: '$color.themeModerate',
    height: 200,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextPrimary: {
    color: '$color.textPrimaryInverse',
    fontSize: 35,
  },
  headerTextSeconday: {
    color: '$color.textSecondaryInverse',
    fontSize: 30,
  },
  button: {
    zIndex: 10,
  },
  chart: {
    flex: 0.5,
  }
});
