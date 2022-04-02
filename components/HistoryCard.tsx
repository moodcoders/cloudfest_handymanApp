import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

import Icon from 'react-native-vector-icons/EvilIcons';

import DataServices from '../DataStore/DataService';
import StarRating from './StarRating';

const HistoryCard = () => {

    return (
        <View style={{ backgroundColor: 'transparent', }} >
            {DataServices.map((handyman, index) => {
                return (
                    <View key={index} style={[styles.card]} >
                        <View>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={handyman.img}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.bookingDate}>Successful Service on</Text>
                            <Text style={styles.bookingDate}> Oct 28, 2020</Text>
                            <StarRating />
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={styles.workServices}>Review:</Text>
                                <Text> Nice Work</Text>
                            </View>
                        </View>
                        <TouchableOpacity >
                            <Icon
                                name='chevron-right'
                                color='#333'
                                style={styles.rightIcon}
                            />
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: "#20232a",
        alignItems: 'center'
    },
    image: {
        width: 110,
        height: 110,
        marginRight: 10,
        borderRadius: 60

    },
    bookingDate: {
        fontSize: 15,
        color: "#333",
        fontWeight: 'bold',
    },
    workServices: {
        fontSize: 15,
        color: "#234c7d",
        fontWeight: 'bold'
    },
    rightIcon: {
        fontSize: 40,
        alignSelf: 'center',
        alignItems: 'center'
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    starImageStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
});

export default HistoryCard;