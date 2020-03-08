import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/icon-text.png')} style={styles.logo}></Image>
        <Text style={styles.logoSub}>Agaisnt Corona</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CoronaStart') } style={[Styles.roundedButton, styles.buttonMargin]}>
          <Text style={Styles.buttonText}>Corona Assesment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Appointment') } style={[Styles.roundedButton, styles.buttonMargin]}>
          <Text style={Styles.buttonText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MedicalRecord') }  style={[Styles.roundedButton, styles.buttonMargin]}>
          <Text style={Styles.buttonText}>Medical Record</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
    height: 150,
    marginTop: 30,
  },
  logoSub: {
    color: '#999999',
    marginBottom: 40,
  },
  buttonMargin: {
    marginBottom: 20
  }
});
