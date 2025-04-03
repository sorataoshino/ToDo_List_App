import {React, useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import Checkbox from "expo-checkbox"
import {SIZES, FONTS, COLORS, SHADOW} from "../constants";

const styles = StyleSheet.create({
    view: {
        ...SHADOW,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        marginBottom: 15
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
    //const [isChecked, setChecked] = useState(false);

    return <View style={styles.view}>
        <Checkbox 
            style={styles.checkbox}
            //value={isChecked} onValueChange={setChecked}
            value={props.data.isSelected}
            onValueChange={() => props.setIsSelected()}

        />
        <Text style={styles.text}>{props.data.text}</Text> 
    </View>
}

//Checkboxes need to be changed again, because our Styles-Dude uses an old component.