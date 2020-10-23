import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native'
import {Context as EmojiContext} from '../../context/EmojiContext'
const EmojiList=()=>{

    const {state} = useContext(EmojiContext);
    console.log(state);
    return (
    <View style={styles.emojiListBar}>
        <FlatList
            style={styles.flatList}
            data={state}
            keyExtractor={(item,index)=>""+item.name+index}
            renderItem={({item})=>{
                <Text>{item.emoji} {item.count}</Text>
            }}
            horizontal
        />
    </View>)

}

const styles = StyleSheet.create({

    
    emojiListBar:{
        flexGrow:1,
        justifyContent:"flex-start",
        textAlignVertical:"center",
        
    },
    flatList:{
        flexGrow:1,
    }

})

export default EmojiList;