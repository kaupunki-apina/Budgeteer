
import React, {
  Component,
} from 'react';

import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {createResponder} from 'react-native-gesture-responder';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialIcons';

import global from '../style';


export default class ImageButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={() =>{
          if (this.props.enabled) {
            this.props.onPress();
          }
        }}
      >
        <View
          style={styles.iconContainer}
        >
          <Icon
            name={this.props.iconName || "chevron-left"}
            size={this.props.iconSize || styles.$iconSize}
            color={this.props.iconColor || styles.$iconColor}
            style={[
              this.props.enabled
                ? styles.enabled
                : styles.disabled,
              styles.icon,
              this.props.iconStyle,
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

ImageButton.defaultProps = {
  enabled: true,
}

const styles = EStyleSheet.create({
  $iconSize: 48,
  $iconColor: '$color.textPrimary',

  iconContainer: {
    width: '$dimen.touchableMin',
    height: '$dimen.touchableMin',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enabled: {
    opacity: '$opacity.enabled',
  },
  disabled: {
    opacity: '$opacity.disabled',
  }
});
