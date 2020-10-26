/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import EmojiPicker from '../components/EmojiPicker';
import {RFValue} from 'react-native-responsive-fontsize';
const HomeScreen = () =>{

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Text 1</Text>
            <EmojiPicker/>
        </View>
    );
};

const styles = StyleSheet.create({


    container:{
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',

    },
    text:{
        borderWidth:1,
        borderRadius:50,
        fontSize:RFValue(24),
        padding:'2%',
        width:'95%',
        alignSelf:'center',
    },

});

export default HomeScreen;
