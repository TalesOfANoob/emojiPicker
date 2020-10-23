import React,{useContext} from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Context as EmojiContext} from '../../context/EmojiContext'
const Emoji = ({emoji})=>{
    const {addEmoji} = useContext(EmojiContext)
    
    return (
        <TouchableOpacity 
        style={styles.emojiHolder}
        onPress={()=>addEmoji(emoji)}
        >
            <Text style={styles.emojiStyle}>{emoji.emoji}</Text>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    emojiHolder:{
        flexGrow:1,
        borderRadius:50,
    }
    ,
    emojiStyle:{
        fontSize:25,
        
        textAlign:'center',
    },
})

export default Emoji;