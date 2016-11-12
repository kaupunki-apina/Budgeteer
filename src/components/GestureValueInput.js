
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
    this.state = {showText: true};
  }

  componentWillMount() {
    this.gestureResponder = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => false,
      onStartShouldSetResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetResponder: (evt, gestureState) => false,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderMove: (evt, gestureState) => {
        console.log("1");
      },
      onResponderRelease: (evt, gestureState) => {
        console.log("2");
      },
      onResponderTerminate: (evt, gestureState) => {
        console.log("3")
      },
      onResponderSingleTapConfirmed: (evt, gestureState) => {
        console.log("4");
      },
      onResponderGrant: (evt, gestureState) => {
        console.log("5");
      },
      debug: false,
    });
  }

  render() {
    console.log(this.state);
    return (
      <View
        {...this.gestureResponder}
        style={[
          styles.rootContainer,
          this.props.style,
        ]}
      >
        <TextInput
          style={[
            global.textDisplay4,
            styles.textInput,
          ]}
          editable={false}
          keyboardType={"numeric"}
          autoCorrect={false}
          placeholder={"0"}
          placeholderTextColor={styles._placeholder.color}
          clearTextOnFocus={false}
        />
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$color.accent'
  },
  textInput: {
    color: '$color.textPrimaryInverse',
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '$color.transparent',
    textAlign: 'center',
  }
});
