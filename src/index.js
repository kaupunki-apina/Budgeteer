
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  StatusBar,
  TouchableNativeFeedback,
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
         <StatusBar
          backgroundColor={styles._statusbar.color}
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{
            title: 'My Initial Scene',
            index: 0
          }}
          renderScene={(route, navigator) => {
            return (
              <View
                style={styles.controlsContainer}
              >
                <GestureValueInput/>
              </View>
            );
           }}
        />
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
  controlsContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '$color.accent',
  },
  statusbar: {
    color: '$color.accentDark',
  }
});
