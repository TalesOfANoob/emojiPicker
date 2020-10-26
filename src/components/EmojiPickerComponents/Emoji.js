import React from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {addEmoji} from '../../redux/emojiActions'
import {callback,close} from '../EmojiPicker'
const Emoji = ({emoji,addEmoji})=>{
    
    return (
        <TouchableOpacity 
        style={styles.emojiHolder}
        onPress={()=>{
            addEmoji(emoji)
            if(close){
                callback(false);
            }
            }}
        >
            <Text style={styles.emojiStyle}>{emoji.emoji}</Text>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    emojiHolder:{
        width:50,
    }
    ,
    emojiStyle:{
        fontSize:25,
        textAlign:'center',
    },
})

const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({addEmoji},dispatch);
}
export default connect(null,matchDispatchToProps)(Emoji);