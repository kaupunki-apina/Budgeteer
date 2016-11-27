import React, {
  Component,
} from 'react';

import {
  View,
  ScrollView,
  Text,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import BarChartDataEntry from './BarChartDataEntry'
import global from '../style';


export default class BarChart extends Component {
  render() {
    return (
      <View
        style={styles.rootContainer}
      >
        <ScrollView>
          {this.props.data.map((entry, index) => {
            return (
              <BarChartDataEntry
                key={index}
                value={entry}
                maxValue={1}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

BarChart.defaultProps = {
  data: [0.3,0.1,1,0,0,0.25, 2,]
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
  }
});
