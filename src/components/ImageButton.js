
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

import global from '../style';


export default class ImageButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>{
          if (this.props.enabled) {
            this.props.onPress();
          }
        }}
      >
        <View
          style={styles.iconContainer}
        >
          <Image
            source={this.props.image}
            resizeMode='contain'
            style={[
              styles.icon,
              this.props.enabled
                ? styles.enabled
                : styles.disabled
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
  iconContainer: {
    width: 48,
    height: 48,
  },
  icon: {
    flex: 1,
    alignSelf: 'stretch',
  }
  enabled: {
    opacity: '$opacity.enabled',
    backgroundColor: 'black',
  },
  disabled: {
    opacity: '$opacity.disabled',
    backgroundColor: 'black',
  }
});
