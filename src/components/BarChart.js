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

  constructor(props) {
    super(props)

    this.maxValueFromData = this.maxValueFromData.bind(this);

    this.state = {
      maxValue: props.maxValue || this.maxValueFromData()
    };
  }

  maxValueFromData() {
    var maxValue;
    this.props.data.map((value)=> {
      if (maxValue === undefined || maxValue < value) {
        maxValue = value
      }
    })

    return maxValue;
  }

  render() {
    return (
      <View
        style={[
          styles.rootContainer,
          this.props.styles,
        ]}
      >
          {this.props.data && this.props.data.map((entry, index) => {
            return (
              <BarChartDataEntry
                key={index}
                value={entry}
                maxValue={this.state.maxValue}
                rightToLeft={this.props.rightToLeft}
              />
            );
          })}
      </View>
    );
  }
}

BarChart.defaultProps = {
  data: [0.3,0.01,1,0,0,0.25, 2,1,0.3,0.21,0.4,0.2,0.2,1,1,1,1,0.97,0.3],
  rightToLeft: false,
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
  }
});
