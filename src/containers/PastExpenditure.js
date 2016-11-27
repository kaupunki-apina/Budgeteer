
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  AsyncStorage,
  ScrollView
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import DatabaseHandler from '../DatabaseHandler';
import BarChart from '../components/BarChart';
import ImageButton from '../components/ImageButton';
import iconLeft from '../../res/icons/left.png';
import iconRight from '../../res/icons/right.png';

const KEY_SPENDING = "spending";

export default class PastExpenditure extends Component {
  constructor(props) {
    super(props);
    this.databaseHandler = new DatabaseHandler();
  }

  render() {
    return (
      <ScrollView
        style={styles.rootContainer}
      >
        <View
          style={[
            styles.contentContainer,
            styles.header,
          ]}
        >
          <ImageButton
            style={styles.button}
            image={iconLeft}
            onPress={()=>{
              this.setState({
              });
            }}
          />
          <View
            style={styles.headerTextContainer}
          >
            <Text
              style={styles.headerTextPrimary}
            >
              marraskuu
            </Text>
            <Text
              style={styles.headerTextSeconday}
            >
              2016
            </Text>
          </View>
          <ImageButton
            style={styles.button}
            image={iconRight}
            onPress={()=>{

            }}
          />
        </View>
        <View
          style={[
            styles.contentContainer,
          ]}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <BarChart
              rightToLeft={true}
              data={[
                0.17,
                0.18,
                0.26,
                0.28,
                0.33,
              ]}
              maxValue={1}
              style={{
                flex: 0.5,
              }}
            />
            <BarChart
              data={[
                0.02,
                0.07,
                0.04,
                0.05,
                0.1,
              ]}
              style={{
                flex: 0.5,
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '$color.themeLight',
  },
  contentContainer: {
    paddingHorizontal: '$dimen.contentMargin',
  },
  header: {
    backgroundColor: '$color.themeModerate',
    height: 200,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextPrimary: {
    color: '$color.textPrimaryInverse',
    fontSize: 35,
  },
  headerTextSeconday: {
    color: '$color.textSecondaryInverse',
    fontSize: 30,
  },
  button: {
    zIndex: 10,
  },
});
