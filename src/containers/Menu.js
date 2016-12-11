
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  AsyncStorage,
  StatusBar,
  ToastAndroid,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import DatabaseHandler from '../DatabaseHandler';
import GestureValueInput from '../components/GestureValueInput';
import ImageButton from '../components/ImageButton';
import Button from '../components/Button';
import iconLeft from '../../res/icons/left.png';
import iconRight from '../../res/icons/right.png';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state={
      inputValue: 0,
    }
    this.databaseHandler = new DatabaseHandler();
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
  inputControlsContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonsContainer: {
    marginVertical: '$dimen.contentMargin',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    zIndex: 10,
    marginVertical: '$dimen.marginSmall',
  },
  buttonText: {
    backgroundColor: '$color.themeNeutral',
    flex: 0.5,
    marginHorizontal: '$dimen.marginSmall',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMenu: {
    position: 'absolute',
    top: '$dimen.contentMargin * 2',
    right: '$dimen.contentMargin',
    backgroundColor: 'white',
  },
  inputArea: {
    zIndex: 1,
  },
});
