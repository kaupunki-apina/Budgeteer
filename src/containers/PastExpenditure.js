
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
import iconLeft from '../../res/icons/left.png';
import iconRight from '../../res/icons/right.png';

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
    ).then((spending) => {
      // TODO
      // Calculate budget
      this.setState({
        spending: spending,
      });
    }).catch((error) => {
      console.log(error)
    });
  }
  render() {
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
            image={iconLeft}
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
            image={iconRight}
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
              rightToLeft={true}
              data={this.state.spending}
              style={{
                flex: 0.5,
              }}
            />
            <BarChart
              data={this.state.spending}
              style={{
                flex: 0.5,
              }}
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
});
