import React, {
  Component,
} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import global from '../style';


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
      >
        <TouchableOpacity
          style={styles.touchTargetContainer}
          onPress={() => {
              this.props.onPress();
          }}
        >
          <Text
            style={[
              global.textButton,
              styles.textContainer,
            ]}
          >
          {this.props.label.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.defaultProps = {
    enabled: true,
    label: "",
}

const styles = EStyleSheet.create({
  rootContainer: {
    height: '$dimen.touchableMin',
    minWidth: '$dimen.touchableMin',
  },
  touchTargetContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '$dimen.marginSmall',
  },
  textContainer: {
    color: '$color.textPrimaryInverse',
    textAlign: 'center',
  },
});
