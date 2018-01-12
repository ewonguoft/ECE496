import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';
import MapView from 'react-native-maps';

// export default class Test extends Component<{}> {
//   constructor(){
//     super();
//     this.state = {
//       name: "robert"
//     }
//   }

//   render() {
//     return (
//       <Text></Text>
//     );
//   }
// }

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 43.6628917;
const LONGITUDE = -79.39565640000001;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
    static navigationOptions={
        title: 'My Map'
    }
    constructor() {
        super();
        this.state = {
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        }
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({
            region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
            });
        },
        (error) => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
        this.watchID = navigator.geolocation.watchPosition(
        position => {
            this.setState({
            region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
            });
        }
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.addressInput}>
            <TextInput
                style={{height: 40}}
                placeholder="Type input"
                onChangeText={(text) => this.setState({text})}
            />
            </View>

            <MapView
            style={ styles.map }
            showsUserLocation={ true }
            region={ this.state.region }
            onRegionChange={ region => this.setState({region}) }
            onRegionChangeComplete={ region => this.setState({region}) }
            >

            <MapView.Marker
                coordinate={ this.state.region }
            />
            </MapView>

            <View style={{padding: 10, backgroundColor: 'white'}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type input"
                onChangeText={(text) => this.setState({text})}
            />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    map: {
        height: '100%',
        width: '100%',
    },
    addressInput: {
        padding: 10,
        backgroundColor: 'white'
    },
    containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    },
});
