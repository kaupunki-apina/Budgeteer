import React, {
  Component,
} from 'react';

import {
  View,
  Animated,
  Text,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import global from '../style';

export default class DataEntry extends Component {

  constructor (props) {
    super(props);
    this.state = {
      barWidth: new Animated.Value(0),
      spacerWidth: new Animated.Value(1),
    };
  }

  componentDidMount() {
    const percentage = this.props.value / this.props.maxValue;
    Animated.spring(
      this.state.barWidth,
      {
        toValue: percentage,
        friction: 15,
      }
    ).start();

    Animated.spring(
      this.state.spacerWidth,
      {
        toValue: 1 - percentage,
        friction: 15,
      }
    ).start();
  }

  render() {
    return(
      <View
        style={
          styles.rootContainer
        }
      >
        <Animated.View
          style={[
            styles.bar,
            {
              flex: this.state.barWidth
            }
          ]}
        />
        <Animated.View
          style={[
            styles.spacer,
            {
              flex: this.state.spacerWidth,
            }
          ]}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $barHeight: 20,
  rootContainer: {
    marginVertical: '$dimen.marginSmall',
    flex: 1,
    flexDirection: 'row',
  },
  bar: {
    height: '$barHeight',
    backgroundColor: 'white',
    borderRadius: '$dimen.borderRadius',
  },
  spacer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }
});
