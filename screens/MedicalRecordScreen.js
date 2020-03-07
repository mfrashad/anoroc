import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Styles from '../constants/Styles';

export default class MedicalRecord extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {
              key: "0",
              time: "9:00 - 10:00",
              date: "Thursday, 12 March",
              name: "John Doe",
              age: 12,
              gender: "Male",
              corona: 28.9,
              hospital: "Hospital Batu Gajah"
            },
            {
              key: "1",
              time: "10:00 - 11:00",
              date: "Thursday, 12 March",
              name: "Ali Baba",
              age: 30,
              gender: "Male",
              corona: 48.1,
              hospital: 'Klinik Redza Sri Iskandar'
            },
            {
              key: "3",
              time: "8:30 - 12:00",
              date: "Friday, 13 March",
              name: "Sean Peng",
              age: 29,
              gender: "Male",
              corona: 88.3,
              hospital: "Klinik Ipoh Jaya"
            },
            {
              key: "4",
              time: "15:00 - 16:00",
              date: "Friday, 13 March",
              name: "Olivia Rose",
              age: 18,
              gender: "Female",
              corona: 32.6,
              hospital: "Kuala Lumpur Hospital"
            }
          ]}
          renderItem={({item}) => (
            <TouchableOpacity>
            <View style={styles.outerCard}>
              <Text style={{fontWeight: 'bold'}}>{item.time}, {item.date} </Text>
              <View style={styles.innerCard}>
                <Text>Dr. {item.name}</Text>
                <Text>{item.hospital}</Text>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
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
  outerCard: {
    width: 300,
    height: 140,
    backgroundColor: '#EFEFEF',
    margin: 10,
    borderRadius: 20,
    padding: 20,
  },
  innerCard: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'column',
    alignItems:'center'
  }
});
