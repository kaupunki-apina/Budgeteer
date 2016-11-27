
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

import GestureValueInput from '../components/GestureValueInput';
import ImageButton from '../components/ImageButton';
import Button from '../components/Button';

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
        <Text>Uliuli</Text>
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
