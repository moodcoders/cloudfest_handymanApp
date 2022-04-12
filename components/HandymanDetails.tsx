import { Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from './Themed';

import Calender from 'react-native-vector-icons/MaterialCommunityIcons';
import Rupee from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface bookingParams {
    img: any,
    name: string,
    totalJobs: number,
    exp: string,
    rating: number,
    rate: number,
    jobName: any,
};

const HandymanDetails = (prop: bookingParams) => {
    const [serviceCompleted, onServiceCompleted] = useState(false);
    const [payment, onPayment] = useState(false);

    function onServiceCompletedPress() {
        onServiceCompleted(!serviceCompleted);
    }
    function PaymentServiceMark() {
        onPayment(!payment);
    }
    return (
        <>
            <View style={styles.card} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View >
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={prop.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.bookingNumber}>Booking Number- bg6789p0 </Text>
                        <Text style={styles.name}>Shams</Text>
                        <Text style={[styles.name, { fontSize: 20, fontWeight: 'normal', }]}>
                            DC-220,Newtown, {"\n"}Kolkata-700156
                        </Text>
                    </View>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.bookingNumber}>Date &#38; time</Text>
                    <Text>
                        <Calender
                            name='calendar-clock'
                            onPress={() => console.log('back button press')}
                            color='#333'
                            style={{ fontSize: 25, margin: 10 }}
                        /> 9:20 PM Sat,12 Sep 2021
                    </Text>
                </View>
                <View>
                    <Text style={[styles.priceDetails]}>Charge Details </Text>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
                    <View style={styles.service}>
                        <Text style={styles.serviceCharge}>Service Charge</Text>
                        <Text style={styles.serviceCharge} >
                            <Rupee
                                name='rupee'
                                onPress={() => console.log('back button press')}
                                color='#333'
                                style={{ fontSize: 20, fontWeight: 'bold' }}
                            />
                            {prop.rate}
                        </Text>
                    </View>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
                    <View style={styles.service}>
                        <Text style={styles.serviceCharge}>Amount Paid</Text>
                        <Text style={styles.serviceCharge} >
                            <Rupee
                                name='rupee'
                                onPress={() => console.log('back button press')}
                                color='#333'
                                style={{ fontSize: 20, fontWeight: 'bold' }}
                            />
                            {prop.rate}
                        </Text>
                    </View>

                </View>
            </View>
            <View style={[styles.card, { marginTop: 20, }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.bookingNumber, { paddingTop: 0, fontSize: 20 }]}>
                        Service Completed
                    </Text>
                    <Pressable
                        style={[styles.checkboxBase, serviceCompleted && styles.checkboxChecked]}
                        onPress={onServiceCompletedPress}>
                        {serviceCompleted && <Ionicons name="checkmark" color="white" size={24} adjustsFontSizeToFit />}
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 25, }}>
                    <Text style={[styles.bookingNumber, { fontSize: 20 }]}>
                        Payment Received
                    </Text>
                    <Pressable
                        style={[styles.checkboxBase, payment && styles.checkboxChecked]}
                        onPress={PaymentServiceMark}>
                        {payment && <Ionicons name="checkmark" color="white" size={24} adjustsFontSizeToFit />}
                    </Pressable>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: '100%',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 60
    },
    name: {
        fontSize: 20,
        marginTop: 5,
        color: "#335580",
        fontWeight: 'bold'
    },
    bookingNumber: {
        color: "#000000",
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceDetails: {
        color: '#000000',
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        opacity: 0.5,
    },
    service: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    separator: {
        marginTop: 5,
        height: 1.5,
        width: '100%',
        alignSelf: 'center',
    },
    serviceCharge: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
        opacity: 0.8,
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'green',
        borderColor: 'coral',
    },

    checkboxChecked: {
        backgroundColor: 'green',
    },
});

export default HandymanDetails;

