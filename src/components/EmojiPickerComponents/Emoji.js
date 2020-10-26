/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addEmoji} from '../../redux/emojiActions';
import {callback,close} from '../EmojiPicker';
const Emoji = ({emoji,addEmoji})=>{

    return (
        <TouchableOpacity
        style={styles.emojiHolder}
        onPress={()=>{
            addEmoji(emoji);
            if (close){
                callback(false);
            }
            }}
        >
            <Text style={styles.emojiStyle}>{emoji.emoji}</Text>
        </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
    emojiHolder:{
        width:'16.66%',
    }
    ,
    emojiStyle:{
        fontSize:RFValue(25),
        textAlign:'center',
    },
});

const matchDispatchToProps = (dispatch)=>{
    return bindActionCreators({addEmoji},dispatch);
};
export default connect(null,matchDispatchToProps)(Emoji);
