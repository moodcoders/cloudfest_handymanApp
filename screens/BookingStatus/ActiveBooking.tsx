import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { View, Text } from '../../components/Themed';

import Icon from 'react-native-vector-icons/EvilIcons';

import DataServices from '../../DataStore/DataService';



const ActiveBooking = ({ navigation }: any) => {
    return (
        <View >
            <View style={styles.backgroundColor} lightColor="#edf1fb" darkColor="rgba(0, 0, 0, 0.22)">
                <ScrollView>
                    <View style={{ backgroundColor: 'transparent', }} >
                        {DataServices.map((handyman, index) => {
                            return (
                                <View key={index} style={[styles.card, styles.shadow]} >
                                    <View>
                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                            <View>
                                                <Text style={styles.bookingId}>Booking Number is </Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 12 }}>bg6789p0</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                            <View>
                                                <Image
                                                    style={styles.image}
                                                    resizeMode="cover"
                                                    source={handyman.img}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.clientName}>
                                                    {handyman.name}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 35 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text>4 pm </Text>
                                                    <Text>Monday,  Sep 7 </Text>
                                                </View>
                                                <View style={styles.verticleLine}></View>
                                                <View style={{ width: '50%', }}>
                                                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.address}>
                                                        DC-220, Newtown, Kolkata - 700156
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <TouchableOpacity
                                            style={[styles.serviceBtn, { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }]}
                                        >
                                            <Text style={styles.btnName}>4 Days left for Service </Text>

                                            <Icon
                                                name='chevron-right'
                                                onPress={() => console.log('back button press')}
                                                color='#fff'
                                                size={40}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({

    backgroundColor: {
        height: '96%',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 30,
        margin: 5,
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 60
    },
    bookingId: {
        fontSize: 14,
        color: "#234c7d",
        fontWeight: 'bold'
    },
    clientName: {
        fontSize: 22,
        color: "#333",
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
    address: {
        fontSize: 16,
        color: '#000000',
        opacity: 80
    },
    serviceBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#234c7d',
        width: '100%',
        padding: 8,
    },
    btnName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },

});

export default ActiveBooking;