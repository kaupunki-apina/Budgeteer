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

export default class BarChartDataEntry extends Component {
  constructor (props) {
    super(props);
    this.state = {
      barWidth: new Animated.Value(0),
      spacerWidth: new Animated.Value(1),
    };
  }

  componentDidMount() {
    var percentage = this.props.value / this.props.maxValue;
    if (!percentage) percentage = 0.01;
    console.log(!percentage)
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

  componentWillReceiveProps(nextProps) {
    var percentage = nextProps.value / nextProps.maxValue;
    if (!percentage) percentage = 0.01;
    console.log(!percentage)
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
        {this.props.rightToLeft &&
          <Animated.View
            style={[
              styles.spacer,
              {
                flex: this.state.spacerWidth,
              }
            ]}
          />
        }
        <Animated.View
          style={[
            styles.bar,
            this.props.rightToLeft
              ? styles.barLeftToRight
              : styles.barRightToLeft,
            {
              flex: this.state.barWidth
            }
          ]}
        >
          <Text
            style={styles.valueLabel}
          >
            {/* this.props.value */}
          </Text>
        </Animated.View>
        {!this.props.rightToLeft &&
          <Animated.View
            style={[
              styles.spacer,
              {
                flex: this.state.spacerWidth,
              }
            ]}
          />
        }
      </View>
    );
  }
}

BarChartDataEntry.defaultProps = {
  rightToLeft: false,
  valueLabels: true,
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
    borderRadius: '$dimen.borderRadius',
  },
  barLeftToRight: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '$dimen.marginSmall',
    backgroundColor: '$color.themeAccent',
  },
  barRightToLeft: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: '$dimen.marginSmall',
    backgroundColor: '$color.themeAccentSeconday',
  },
  spacer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  valueLabel: {
    fontSize: 18,
  },
});
