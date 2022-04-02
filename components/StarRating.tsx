
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import StarIconFilled from "../assets/fonts/star_filled.png";
import StarIconUnFilled from "../assets/fonts/star_corner.png";


const StarRating = () => {
    const [defaultRating, setDefaultRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    return (
        <View style={styles.customRatingBarStyle}>
            {maxRating.map((item: any, key) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={() => setDefaultRating(item)}>
                        <Image
                            style={styles.starImageStyle}
                            source={
                                item <= defaultRating ? StarIconFilled : StarIconUnFilled
                            }
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default StarRating;


const styles = StyleSheet.create({
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    starImageStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
});
