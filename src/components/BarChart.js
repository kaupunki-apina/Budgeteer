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
      maxValue: props.maxValue || this.maxValueFromData(this.props.data)
    };
  }

  maxValueFromData(data) {
    var maxValue;
    data.map((value)=> {
      console.log("value; " + value)
      if (maxValue === undefined || maxValue < value) {
        console.log("setting: " + value);
        maxValue = value
      }
    })

    return maxValue;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      maxValue: nextProps.maxValue || this.maxValueFromData(nextProps.data),
    });
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
                value={entry || 0}
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
  rightToLeft: false,
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
