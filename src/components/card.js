import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {CheckBox} from "@react-native-community/checkbox";
import {SIZES, FONTS, COLORS} from "../constants";

const styles = StyleSheet.create({
    view:{
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        elevation: 12,
        shadowColor: COLORS.secondary,
        shadowOffset: {width: 2, height: 12},
        shadowRadius: 12,
        justifyContent: 'row',
        alignItems: 'center'
    },
    text: {
        ...FONTS.h2_semiBold,
        color: COLORS.primary
    },
    checkbox:{
        height: 26,
        width: 26,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginRight: 15
    }
})

export default function Card(props) {
    return <View style={styles.view}>
        <CheckBox style={styles.checkbox} />
        <Text style={styles.text}>{props.text}</Text>
    </View>
}