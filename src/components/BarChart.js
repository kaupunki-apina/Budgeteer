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
          {this.props.data.map((entry, index) => {
            return (
              <BarChartDataEntry
                key={index}
                value={entry}
                maxValue={1}
              />
            );
          })}
      </View>
    );
  }
}

BarChart.defaultProps = {
  data: [0.3,0.01,1,0,0,0.25, 2,1,0.3,0.21,0.4,0.2,0.2,1,1,1,1,0.97,0.3]
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
  }
});
