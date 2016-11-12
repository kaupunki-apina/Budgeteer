
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  StatusBar,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import GestureValueInput from './components/GestureValueInput';
import ImageButton from './components/ImageButton';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
      >
         <StatusBar
          backgroundColor={styles._statusbar.color}
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{
            title: 'My Initial Scene',
            index: 0
          }}
          renderScene={(route, navigator) => {
            return (
              <View
                style={styles.controlsContainer}
              >
                <ImageButton
                  onPress={()=>console.log("press1")}
                />
                <GestureValueInput
                  onInputChanged={(newInput)=> console.log("ayy!")}
                />
                <ImageButton
                  onPress={()=>console.log("press2")}
                />
              </View>
            );
           }}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  controlsContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '$color.accent',
  },
  statusbar: {
    color: '$color.accentDark',
  }
});
