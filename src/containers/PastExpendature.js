
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

import BarChart from '../components/BarChart';

const KEY_SPENDING = "spending";

export default class PastExpendature extends Component {
  constructor(props) {
    super(props);
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
        </View>
        <View
          style={[
            styles.contentContainer,
          ]}
        >
          <BarChart/>
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
  }
});
