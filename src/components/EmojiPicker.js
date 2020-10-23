/* eslint-disable prettier/prettier */
import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Context as EmojiContext} from '../context/EmojiContext'
import CommunityIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Picker from './EmojiPickerComponents/Picker'
import EmojiList from './EmojiPickerComponents/EmojiList'

const EmojiPicker = () =>{

    
    const [pressed,setPressed] = useState(false);
    

    
    return (<View style={styles.emojiPicker}>
        {
        pressed 
        ? <Picker/>
        : null
        }

        <EmojiList/>

        <TouchableOpacity
            onPress={()=>{
                if (!pressed)
                    {setPressed(true);}
                else {
                    setPressed(false);
                }
            }}
            style={styles.iconHolder}
        >
            <CommunityIcon style={styles.icon} name="emoticon-outline"/>

        </TouchableOpacity>

    </View>);
};


const styles = StyleSheet.create({
    iconHolder:{
        flexShrink:1,
    },
    icon:{
        marginTop:5,
        fontSize:25,
        
    },
    emojiPicker:{
        flexDirection:'row',
        marginHorizontal:10,
    }


});

export default EmojiPicker;
