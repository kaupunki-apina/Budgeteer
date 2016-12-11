
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

import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import EStyleSheet from 'react-native-extended-stylesheet';

import Router from './router';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputValue: 0,
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    return this.state.inputValue + 1;
  }

  decrement() {
    const newVal = this.state.inputValue - 1;
    return newVal > 0
      ? newVal
      : 0;
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
      >
        <StatusBar
          barStyle="light-content"
        />
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('addExendature')} />
        </NavigationProvider>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '$color.themeModerate',
    padding: '$dimen.contentMargin',
  },
});
