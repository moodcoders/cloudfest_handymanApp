import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/EvilIcons';

import Tracker from '../assets/fonts/locationTracking.png';
import Calling from '../assets/fonts/callingIcon.png';
import Message from '../assets/fonts/message.png';

import Data from "../DataStore/DataService";
import HandymanDetails from '../components/HandymanDetails';

const ServiceDetails = ({ navigation }: any) => {
    return (
        <View>
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
            </View>
            <View style={styles.backgroundColor} lightColor="#edf1fb" darkColor="rgba(0, 0, 0, 0.22)">
                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', padding: 10 }}>
                    <TouchableOpacity >
                        <Icon
                            name='chevron-left'
                            onPress={() => console.log('back button press')}
                            color='#333'
                            style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.subTitle}>Service Details</Text>
                </View>
                <HandymanDetails {...Data[0]} />
                <View style={{ backgroundColor: 'transparent', padding: 20 }}>
                    <View style={styles.smartIcon}>
                        <TouchableOpacity>
                            <Image
                                style={styles.smartProIcon}
                                source={Tracker} />
                        </TouchableOpacity>
                        <Text style={styles.smartPro}>Track  Smart PRO</Text>
                    </View>
                    <View style={styles.smartIcon}>
                        <TouchableOpacity>
                            <Image
                                style={styles.smartProIcon}
                                source={Calling} />
                        </TouchableOpacity>
                        <Text style={styles.smartPro}>Call  Smart PRO</Text>
                    </View>
                    <View style={styles.smartIcon}>
                        <TouchableOpacity>
                            <Image
                                style={styles.smartProIcon}
                                source={Message} />
                        </TouchableOpacity>
                        <Text style={styles.smartPro}>Message  Smart PRO</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#234c7d',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold"
    },
    service: {
        color: '#234c7d',
        fontWeight: 'normal'
    },
    separator: {
        height: 1.5,
        width: '80%',
        alignSelf: 'center',
    },
    backgroundColor: {
        height: '95%',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 30,
        margin: 5,
        padding: 5,
    },
    backIcon: {
        fontSize: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    subTitle: {
        color: '#333',
        fontSize: 25,
        marginLeft: 20,
        alignItems: 'center'
    },
    smartPro: {
        fontSize: 18,
        color: '#35B2E6',
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15,
    },
    smartProIcon: {
        width: 28,
        height: 28,
        marginBottom: -10,
    },
    smartIcon: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
    }
});

export default ServiceDetails;