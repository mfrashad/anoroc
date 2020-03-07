import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';

const selected = {
  "fever": 0,
  "mask": 0,
  "sanitize": 0,
  "location": 1,
}

export default class CoronaResultScreen extends React.Component {
  state = {
    prediction: Math.random() * 100
  }

  render() {
    const { prediction } = this.state;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo}></Image>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
              You are
          </Text>
          <Text
            style={[styles.predictionText, {color: prediction < 50 ? Colors.green : Colors.red}]}>
              {prediction.toPrecision(3)}%
          </Text>
          <Text style={styles.resultText}>
              likely to be exposed to COVID-19
          </Text>
          
        </View>
        <View style={styles.suggestionContainer}>
          <Text style={styles.suggestionText}>Suggested Preventive Measure</Text>
          {!selected.mask &&
            <TouchableOpacity onPress={() => {} } style={[Styles.roundedButton, Styles.outlineButton, styles.buttonMargin]}>
              <Text style={Styles.outlineButtonText}>Get masks from nearest place</Text>
            </TouchableOpacity>
          }
          {!selected.sanitize &&
            <TouchableOpacity onPress={() => {} } style={[Styles.roundedButton, Styles.outlineButton, styles.buttonMargin]}>
              <Text style={Styles.outlineButtonText}>Get sanitizer from nearest place</Text>
            </TouchableOpacity>
          }
          {prediction >= 50 &&
            <TouchableOpacity onPress={() => {} } style={[Styles.roundedButton, Styles.outlineButton, styles.buttonMargin]}>
              <Text style={Styles.outlineButtonText}>Do Health checkup</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity onPress={() => this.props.navigation.popToTop() } style={[Styles.roundedButton, styles.buttonMargin]}>
            <Text style={Styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultContainer:{
    paddingBottom: 20,
    alignItems: 'center'
  },
  suggestionContainer:{
    alignItems: 'center',
    marginBottom: 30,
  },
  suggestionText:{
    fontSize: 16,
    color: Colors.darkColor,
    paddingBottom: 15,
  },
  resultText: {
    color: Colors.darkColor,
    paddingHorizontal: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  predictionText: {
    fontSize: 26,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
    height: 100,
    marginTop: 30,
  },
  buttonMargin: {
    marginBottom: 10
  }
});
