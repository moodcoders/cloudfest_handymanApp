import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    MaterialIcons,
    Feather,
    AntDesign,
    FontAwesome5
} from '@expo/vector-icons';
import { View, Text } from '../../components/Themed';
import ProfileImage from "../../assets/images/photography.png";

const UserProfileView = () => {
    return (
        <View>
            <View >
                <Text style={styles.title}> SMART<Text style={styles.service}> SERVICES</Text></Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(0, 0, 0, 0.22)" />
            </View>
            <View style={styles.rectangle}>
                <Ionicons
                    name='chevron-back-outline'
                    size={30}
                />
            </View>
            <View style={styles.header}>
                <View>
                    <Image style={styles.profleImage} source={ProfileImage} />
                </View>
                <View>
                    <Text style={styles.name}>Sucheta Mahata</Text>
                    <Text style={styles.userInfo}>Plumbing</Text>
                    <Text style={styles.userInfo}>Smart Pro</Text>
                </View>
            </View>
            <View>
                <Text style={styles.totalService}>Total Services : 25</Text>
            </View>
            <View style={styles.rectangle2}>
                <TouchableOpacity style={styles.viewStyle}>
                    <Feather name='home' size={34} color='black' />
                    <Text style={styles.textStyle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewStyle}>
                    <FontAwesome5 name="coins" size={24} color="black" />
                    <Text style={styles.textStyle}>Token</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewStyle}>
                    <Feather name='settings' size={34} color='black' />
                    <Text style={styles.textStyle}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewStyle}>
                    <AntDesign name='sharealt' size={34} color='black' />
                    <Text style={styles.textStyle}>Refer Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewStyle}>
                    <MaterialIcons name='logout' size={34} color='black' />
                    <Text style={styles.textStyle}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#234C7D',
        textAlign: 'center',
    },
    service: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#234C7D',
    },
    separator: {
        marginVertical: 3,
        height: 1.5,
        width: '90%',
        alignSelf: 'center',
    },
    profleImage: {
        width: 80,
        height: 80,
        borderRadius: 60,
        marginRight: 10
    },
    totalService: {
        fontSize: 22,
        color: '#21426A',
        fontWeight: 'bold',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#21426A',
        borderRadius: 30,
        padding: 10,
        margin: 25
    },
    rectangle: {
        height: 40,
        width: 40,
        backgroundColor: '#E7F2FF',
        left: '6%',
        borderRadius: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    avatar: {
        width: 70,
        height: 70,
    },
    name: {
        fontSize: 22,
        color: '#21426A',
        fontWeight: 'bold',
    },
    userInfo: {
        fontSize: 20,
        color: '#778899',
        fontWeight: '600',
    },

    rectangle2: {
        width: "75%",
        backgroundColor: '#E7F2FF',
        borderRadius: 12,
        alignSelf: 'center',
        padding: 15
    },
    viewStyle: {
        flexDirection: 'row',
        marginBottom: "20%",
    },
    textStyle: {
        fontSize: 25,
        fontWeight: '500',
        color: 'black',
        alignSelf: 'center',
        marginLeft: 10
    },
});

export default UserProfileView;
