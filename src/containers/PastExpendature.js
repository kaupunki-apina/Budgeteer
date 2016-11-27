
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  AsyncStorage,
  StatusBar,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import BarChart from '../components/BarChart';

const KEY_SPENDING = "spending";

export default class PastExpendature extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
      >
        <BarChart/>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '$color.primary',
    padding: '$dimen.contentMargin',
  },
});
