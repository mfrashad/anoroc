import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, Picker} from 'react-native';
import Layout from '../constants/Layout';

const LATITUDE = 3.1209046
const LONGITUDE = 101.6516527;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA;
// 116423, 51613, 17

const INITIAL_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

export default class NearestHospitalScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: INITIAL_REGION,
      markers: [
        {key: 0, latlng: {latitude: LATITUDE, longitude: LONGITUDE}, title: "Hospital 1", description: ""},
        {key: 1, latlng: {latitude: LATITUDE + 0.003, longitude: LONGITUDE + 0.012}, title: "Hospital 2", description: ""},
        {key: 2, latlng: {latitude: LATITUDE + 0.023, longitude: LONGITUDE - 0.032}, title: "Hospital 3", description: ""},
        {key: 3, latlng: {latitude: LATITUDE -0.11, longitude: LONGITUDE - 0.005}, title: "Hospital 3", description: ""}
      ],
      hospital: {latitude: LATITUDE, longitude: LONGITUDE}
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={INITIAL_REGION}
          >
        {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              <Image source={require('../assets/images/hospital.png')} style={{width: 40, height: 40}} />
            </Marker>
          ))}
        </MapView>
        <View style={styles.card}>
          <Image source={require('../assets/images/icon.png')} style={styles.logo}></Image>
          <Text style={styles.logoSub}>Nearest hospitals for checkup.</Text>
          <Picker
            selectedValue={this.state.hospital}
            style={{height: 50, width: 200}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({hospital: itemValue})
            }>
            {this.state.markers.map(marker => (
              <Picker.Item key={marker.key} label={marker.title} value={marker.latlng} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo: {
    width: 60,
    resizeMode: 'contain',
    height: 60,
    marginTop: 30,
  },
  logoSub: {
    color: '#999999',
    marginBottom: 5,
  },
  card: {
    alignItems: 'center',
    position: 'absolute',
    elevation: 4,
    height: 200,
    width: Layout.window.width - 40,
    height: 200,
    bottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: 'white'
  }
});
