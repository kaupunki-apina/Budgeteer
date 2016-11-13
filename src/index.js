
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  StatusBar,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import GestureValueInput from './components/GestureValueInput';
import ImageButton from './components/ImageButton';
import Button from './components/Button';
import iconLeft from '../res/icons/left.png';
import iconRight from '../res/icons/right.png';


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
                      // TODO
                      // Parent is not being notified of the LASTEST
                      // change in GestureValueInput.
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
                  style={styles.confirmButtonContainer}
                >
                  <Button
                    label={"add"}
                    onPress={() => {
                      console.log("uliuli");
                    }}
                  />
                </View>
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
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '$color.primary',
    padding: '$dimen.contentMargin',

  },
  inputControlsContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  confirmButtonContainer: {
    marginVertical: '$dimen.contentMargin',
  },
  statusbar: {
    color: '$color.primaryDark',
  },
  button: {
    zIndex: 10,
  },
  inputArea: {
    zIndex: 1,
  }
});
