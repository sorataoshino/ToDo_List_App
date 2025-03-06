import React from "react";
import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import { Card } from "../components";
import { COLORS, SIZES, FONTS } from "../constants";

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    }
})

export default function Homepage(){
    return <View style ={styles.container}>
        <Card text={"Go to signing class"} />
    </View>
}