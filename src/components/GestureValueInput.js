
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
} from 'react-native';
import {createResponder} from 'react-native-gesture-responder';

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
      onResponderGrant: (evt, gestureState) => {},
      onResponderMove: (evt, gestureState) => {console.log("1");},
      onResponderTerminationRequest: (evt, gestureState) => true,
      onResponderRelease: (evt, gestureState) => {console.log("2");},
      onResponderTerminate: (evt, gestureState) => {console.log("3")},

      onResponderSingleTapConfirmed: (evt, gestureState) => {console.log("4")},

      moveThreshold: 2,
      debug: false,
    });
  }

  render() {
    return (
      <View
        {...this.gestureResponder}
        style={{
          backgroundColor: "rgb(90, 108, 19)",
          width: 100,
          height: 100,
        }}
      >
        <Text
          style={{
            backgroundColor: "rgb(161, 57, 67)"
          }}
        >
          Gesture valueinput
        </Text>
      </View>
    );
  }
}
