import {React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import {Card} from "../components"
import { COLORS, FONTS, HOMEPAGE } from "../constants"

export default function Homepage(){

    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    function addText(text){
        if (value !== ""){
            setList(prev => {
                return [
                    ...prev,
                    {text: text, isSelected: false} 
                ]
            })
            setValue("")
        } else {
            alert("Please type in something! uwu <3")
        }
    }

    function setIsSelected(index, value){
        let data = []
        
        for (let i = 0; i < list.length; i++) {
            if (index === i){
                data.push({...list[i], isSelected: value})
            } else {
                data.push(list[i])
            }
        }

        setList(data)
    }

    function deleteItem(idx){
        Alert.alert(
            "Dewete Item",
            "Are you suwure that you want to dewete this item qwq?", 
            [
                {
                    text: "Naahh",
                    onPress: () => console.log("Nuh Uh Pwessed QwQ"),
                    style: "cancel"
                },

                {
                    text: "Yaaass",
                    onPress: () => {
                        console.log("OK Pwessed")
                        const data = list.filter((item, index) => index !== idx)
                        setList(data)
                    }
                }
            ])
    }

    return <View style ={HOMEPAGE.container}>
        <Text style={{...FONTS.h1_semiBold, color: COLORS.secondary, marginbottom: 15}}>What need to be done.</Text>
        <FlatList style={{flex: 1}}
            data={list}
            renderItem={({item, index}) => <Card data={item} index={index} setIsSelected={setIsSelected} deleteItem={deleteItem} />}
            keyExtractor={(item, index) => index.toString()}
        />
        <View style={HOMEPAGE.textBoxWrapper}>
            <TextInput
                style={HOMEPAGE.textInput}
                placeholder="New Task"
                placeholderTextColor = {COLORS.primary}
                onChangeText={text => setValue(text)}
            />
            <TouchableOpacity 
                style={HOMEPAGE.btn}
                onPress={() => addText(value)}
            >
                <Text style={{fontSize: 34, color: COLORS.secondary}}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
}
