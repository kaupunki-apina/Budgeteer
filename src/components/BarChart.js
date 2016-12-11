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
import globalStyle from '../style';


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
      if (maxValue === undefined || maxValue < value) {
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
        <Text
          style={[
            globalStyle.textTitle,
            styles.title
          ]}
        >
          {this.props.title}
        </Text>
        {this.props.data && this.props.data.reverse().map((entry, index) => {
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
  title: {
    textAlign: 'center',
    color: '$color.textSecondary',
  }
});
