
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import GestureValueInput from './components/GestureValueInput';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
      >
        <GestureValueInput/>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
});
