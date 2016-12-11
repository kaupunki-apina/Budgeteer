
import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Navigator,
  AsyncStorage,
  ToastAndroid,
  Picker,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import config from '../config';
import globalStyle from '../style';
import DatabaseHandler from '../DatabaseHandler';
import GestureValueInput from '../components/GestureValueInput';
import ImageButton from '../components/ImageButton';
import Button from '../components/Button';
import iconLeft from '../../res/icons/left.png';
import iconRight from '../../res/icons/right.png';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state={
      inputValue: 0,
      budget: 0,
      currency: null,
    }
    this.databaseHandler = new DatabaseHandler();
    this.databaseHandler.getBudget()
      .then((budget) => {
          this.setState({
            budget: budget,
          });
        }
      ).catch((error) => {
        console.log(error);
      });
    this.databaseHandler.getCurrency()
      .then((currency) => {
        this.setState({
          currency: currency,
        });
      });
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    return this.state.budget + 1;
  }

  decrement() {
    const newVal = this.state.budget - 1;
    return newVal > 1
      ? newVal
      : 1;
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
      >
        <View style={styles.row}>
          <Text style={[styles.title, globalStyle.textDisplay1]}>
            Menu
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.menuLabel, globalStyle.textHeadline]}>
            Currency
          </Text>
          <Picker
            style={[styles.picker]}
            itemStyle={globalStyle.textHeadline}
            mode="dropdown"
            selectedValue={this.state.currency}
            onValueChange={(currency) => this.setState({currency: currency})}
          >
            {config.currencies.map((currency, index) => {
              return(
                <Picker.Item
                  label={currency}
                  value={currency}
                  key={index}
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={[styles.menuLabel, globalStyle.textHeadline]}>
            Budget
          </Text>
          <View
            style={styles.inputControlsContainer}
          >
            <ImageButton
              style={styles.button}
              image={iconLeft}
              enabled={Math.floor(this.state.budget) > 1}
              onPress={()=>{
                this.setState({
                  budget: this.decrement(),
                });
              }}
            />
            <GestureValueInput
              style={styles.inputArea}
              textStyle={globalStyle.textSubHeading}
              currencyLabel={false}
              onInputChanged={(newInput)=> {
                this.setState({
                  budget: newInput > 1 ? newInput : 1,
                });
              }}
              defaultValue={this.state.budget}
            />
            <ImageButton
              style={styles.button}
              image={iconRight}
              onPress={()=>{
                this.setState({
                  budget: this.increment(),
                });
              }}
            />
          </View>
        </View>

        <View
          style={styles.buttonsContainer}
        >
          <Button
            label={"save"}
            style={[
              styles.button,
              styles.buttonText,
            ]}
            onPress={() => {
              this.databaseHandler.saveBudget(this.state.budget);
              this.databaseHandler.saveCurrency(this.state.currency);
              ToastAndroid.show('Saved', ToastAndroid.SHORT);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '$color.themeModerate',
    padding: '$dimen.contentMargin',
  },
  row: {
    flexDirection: 'row',
    marginVertical: '$dimen.marginSmall',
  },
  buttonsContainer: {
    flex: 1,
    marginVertical: '$dimen.contentMargin',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  picker: {
    color: 'white',
    flex: 0.2,
  },
  title: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: '$color.textTertiary',
  },
  menuLabel: {
    flex: 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    color: '$color.textSecondary',
  },
  inputControlsContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  inputArea: {
    zIndex: 1,
  },
});
