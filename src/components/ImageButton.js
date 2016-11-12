
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
    this.state = {
      enabled: !this.props.enabled
        ? true
        : this.props.enabled,
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View
          style={styles.iconContainer}
        >
          <Image />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = EStyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'white',
  }
});
