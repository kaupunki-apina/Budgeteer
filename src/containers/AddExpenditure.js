
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

import Router from '../router';
import DatabaseHandler from '../DatabaseHandler';
import GestureValueInput from '../components/GestureValueInput';
import ImageButton from '../components/ImageButton';
import Button from '../components/Button';
import iconLeft from '../../res/icons/left.png';
import iconRight from '../../res/icons/right.png';


export default class AddExpenditure extends Component {

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
        <View
          style={styles.inputControlsContainer}
        >
          <ImageButton
            style={styles.button}
            image={iconLeft}
            enabled={Math.floor(this.state.inputValue) != 0}
            onPress={()=>{
              this.setState({
                inputValue: this.decrement(),
              });
            }}
          />
          <GestureValueInput
            style={styles.inputArea}
            onInputChanged={(newInput)=> {
              this.setState({
                inputValue: newInput,
              });
            }}
            defaultValue={this.state.inputValue}
          />
          <ImageButton
            style={styles.button}
            image={iconRight}
            onPress={()=>{
              this.setState({
                inputValue: this.increment(),
              });
            }}
          />
        </View>
        <View
          style={styles.buttonsContainer}
        >
          <Button
            label={"history"}
            style={[
              styles.button,
              styles.buttonText,
            ]}
            onPress={() => {
              this.props.navigator.push(Router.getRoute('pastExpenditure'))
            }}
          />
          <Button
            label={"add"}
            style={[
              styles.button,
              styles.buttonText,
            ]}
            onPress={() => {
              const date = new Date();
              this.databaseHandler
                .putExpenditure(
                  Math.floor(this.state.inputValue),
                  date.getDate(),
                  date.getMonth(),
                  date.getFullYear(),
                ).then((databaseHandler) => {
                  databaseHandler.flush();
                });
                this.setState({
                  inputValue: 0,
                });
                // TODO
                // Localization
                ToastAndroid.show('Saved', ToastAndroid.SHORT);
            }}
          />
        </View>
        <ImageButton
          style={[
            styles.button,
            styles.buttonMenu,
          ]}
        />
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
