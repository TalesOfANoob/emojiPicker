import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'

const Emoji = ({emojiCode})=>{

    return (
        <TouchableOpacity style={styles.emojiHolder}>
            <Text style={styles.emojiStyle}>{emojiCode}</Text>
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