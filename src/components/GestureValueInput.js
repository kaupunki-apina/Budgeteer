
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {createResponder} from 'react-native-gesture-responder';
import EStyleSheet from 'react-native-extended-stylesheet';

import global from '../style';


export default class GestureValueInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      hasInput: false,
    };
  }

  componentWillMount() {
    this.gestureResponder = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderMove: (evt, gestureState) => {
        const newVal = this.state.inputValue + gestureState.dx * 0.1;
        const isValid = newVal < 0
        this.setState({
          inputValue: isValid
            ? 0
            : newVal,
          hasInput: isValid,
        })
      },
      onResponderRelease: (evt, gestureState) => {

      },
      onResponderTerminate: (evt, gestureState) => {

      },
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        // Activate text input
        console.log("\nsingle:" + gestureState.singleTapUp);
        console.log("double:" + gestureState.doubleTapUp)
      },
      onResponderGrant: (evt, gestureState) => {
      },
      debug: false,
    });
  }

  render() {
    return (
      <View
        {...this.gestureResponder}
        style={[
          styles.rootContainer,
          this.props.style,
        ]}
      >
      <Text
        style={[
          global.textDisplay3,
          styles.textContainer,
        ]}
      >
        <TextInput
          style={[
            global.textDisplay4,
            styles.textInput,
          ]}
          value={
            this.state.inputValue != 0
            ? Math.floor(this.state.inputValue) + ""
            : ''
          }
          editable={false}
          keyboardType={"numeric"}
          autoCorrect={false}
          placeholder={"0"}
          placeholderTextColor={styles._placeholder.color}
          clearTextOnFocus={false}
        />
          €
        </Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  placeholder: {
    color: '$color.textTertiaryInverse',
  },
  rootContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$color.accent'
  },
  textContainer: {
    color: '$color.textTertiary',
    textAlign: 'center',
  },
  textInput: {
    color: '$color.textPrimaryInverse',
    flexDirection: 'column',
    alignSelf: 'stretch',
    borderColor: '$color.transparent',
    textAlign: 'center',
  }
});
