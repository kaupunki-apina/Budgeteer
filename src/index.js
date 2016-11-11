
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
} from 'react-native';

import GestureValueInput from './components/GestureValueInput';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <GestureValueInput />
      </View>
    );
  }
}
