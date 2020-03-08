import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Styles from '../constants/Styles';
import Layout from '../constants/Layout';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={['#5ECEF4', '#4895FF']}
        >
        <View style={{width: 300, marginTop: 20}}>
          <Text style={styles.greetingText}>Hey Rashad, </Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CoronaStart')}>
          <View style={styles.bigCard}>
            <Image source={require('../assets/images/icon.png')} style={styles.logo}></Image>
            <View>
              <Text style={styles.bigCardText}>COVID-19</Text>
              <Text style={styles.bigCardText}>Assessment</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.cardRow}> 
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Appointment')}>
            <View style={styles.card}>
              <Image source={require('../assets/images/date.png')} style={styles.cardImage}></Image>
              <Text style={styles.cardText}>Appointment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MedicalRecord')}>
            <View style={styles.card}>
              <Image source={require('../assets/images/clipboard.png')} style={styles.cardImage}></Image>
              <Text style={styles.cardText}>Medical Record</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}> 
          <View style={styles.card}>
            <Text style={styles.cardInfoTextNumber}>93</Text>
            <Text style={styles.cardInfoText}>Cases</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardInfoTextNumber}>24</Text>
            <Text style={styles.cardInfoText}>Recovered</Text>
          </View>
        </View>
        <View style={styles.cardRow}> 
          <View style={styles.card}>
            <Text style={styles.cardInfoTextNumber}>0</Text>
            <Text style={styles.cardInfoText}>Death</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardInfoTextNumber}>45,500</Text>
            <Text style={styles.cardInfoText}>Wear Mask</Text>
          </View>
        </View>
        <View style={styles.cardRow}> 
          <View style={styles.card}>
            <Text style={styles.cardInfoTextNumber}>512</Text>
            <Text style={styles.cardInfoText}>Cough Symptom</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardInfoTextNumber}>210</Text>
            <Text style={styles.cardInfoText}>Fever Symptom</Text>
          </View>
        </View>

        
        
      </LinearGradient>
      </ScrollView>
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
  greetingText: {
    color: 'white',
    fontSize: 26,
    textAlign: 'left'
  },
  bigCard: {
    width: 300,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  bigCardText: {
    fontSize: 25,
    color:'white',
    textAlign:'center',
    fontWeight: '700'
  },
  cardRow:{
    flexWrap: 'wrap',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 140,
    padding: 20,
    paddingBottom: 20,

  },
  cardText:{
    color: 'white',
    fontWeight: 'bold'
  },
  cardInfoText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  cardInfoTextNumber:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
    height: 100,
  },
  cardImage: {
    width: 60,
    resizeMode: 'contain',
    height: 60,
    marginBottom: 20,
  },
  logoSub: {
    color: '#999999',
    marginBottom: 40,
  },
  buttonMargin: {
    marginBottom: 20
  }
});
