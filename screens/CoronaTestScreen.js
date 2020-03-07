import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';

export default class CoronaTestScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/icon-text.png')} style={styles.logo}></Image>
        <Text
          style={styles.introText}>
            Hi Rashad, I can help you find how likely you are exposed to COVID-19 Outbreak and recommend you the appropriate preventive actions
          </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CoronaQuestion') } style={[Styles.roundedButton, styles.buttonMargin]}>
          <Text style={Styles.buttonText}>Start Assessment</Text>
        </TouchableOpacity>
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
  introText: {
    color: Colors.darkColor,
    paddingHorizontal: 40,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
    height: 150,
    marginTop: 30,
  },
  buttonMargin: {
    marginBottom: 20
  }
});
