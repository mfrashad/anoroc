import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Styles from '../constants/Styles';

export default class AppointmentScreen extends React.Component {
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
              corona: 28.9
            },
            {
              key: "1",
              time: "10:00 - 11:00",
              date: "Thursday, 12 March",
              name: "Ali Baba",
              age: 30,
              gender: "Male",
              corona: 48.1
            },
            {
              key: "3",
              time: "8:30 - 12:00",
              date: "Friday, 13 March",
              name: "Sean Peng",
              age: 29,
              gender: "Male",
              corona: 88.3
            },
            {
              key: "4",
              time: "15:00 - 16:00",
              date: "Friday, 13 March",
              name: "Olivia Rose",
              age: 18,
              gender: "Female",
              corona: 32.6
            }
          ]}
          renderItem={({item}) => (
            <TouchableOpacity>
            <View style={styles.outerCard}>
              <Text style={{fontWeight: 'bold'}}>{item.time}, {item.date} </Text>
              <View style={styles.innerCard}>
                <View style={{flexDirection: 'column'}}>
                  <Text>Name</Text>
                  <Text>Age</Text>
                  <Text>Gender</Text>
                  <Text>COVID-19 Assessment</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text>:   {item.name}</Text>
                  <Text>:   {item.age}</Text>
                  <Text>:   {item.gender}</Text>
                  <Text>:   {item.corona}</Text>
                </View>
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
    height: 160,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 20,
  },
  innerCard: {
    borderRadius: 10,
    paddingRight: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
