/* eslint-disable prettier/prettier */
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import EmojiPicker from '../components/EmojiPicker'

const HomeScreen = () =>{

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Text 1</Text>
            <EmojiPicker/>
            <Text style={styles.text}>Text 2</Text>
            <EmojiPicker/>
        </View>
    );
}

const styles=StyleSheet.create({


    container:{
        alignSelf:"center",
        justifyContent:"center",
        flexGrow:1,
    },
    text:{
        borderWidth:1,
        borderRadius:50,
        fontSize:25,
        padding:10,
        width:400,
    }

})

export default HomeScreen;