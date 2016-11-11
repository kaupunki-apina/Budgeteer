
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
  }

  componentWillMount() {
    this.gestureResponder = createResponder({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
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
    return (
      <View
        {...this.gestureResponder}
        style={[styles.rootContainer]}
      >
        <TextInput
          placeholder={"ayy"}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$color.accent'
  },
});
