import React from "react";
import { View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity} from "react-native";
import { Card } from "../components";
import { COLORS, SIZES, FONTS, SHADOW } from "../constants";

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    },
    textBoxWrapper:{
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textInput:{
        ...SHADOW,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.secondary,
        height: 54,
        width: "80%",
        color: COLORS.primary,
    },
    btn:{
        backgroundColor: "white",
        height: 54,
        width: "18%"
    }
})

export default function Homepage(){
    return <View style ={styles.container}>
        <Card text={"Go to signing class"} />
        <View style={styles.textBoxWrapper}>
            <TextInput style={styles.textInput} />
            <TouchableOpacity style={styles.btn}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    </View>
}


// https://www.youtube.com/watch?v=SsMHZtii0w4
// 53:21