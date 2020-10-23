import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Emoji from './Emoji';

const SectionRow = ({data,_key})=>{
    
    //console.log(typeof data,_key);
    const jsx=[];
    for(let i=0;i<data.length;i++){
        jsx.push(<Emoji key={_key+"_"+i}  emojiCode={data[i].emoji}/>);
        
    }
    return <View style={styles.categoryRow}>{jsx}</View>
}

const styles = StyleSheet.create({
    categoryRow:{
        flexDirection:'row',
        flexGrow:1,
        padding:0,
        margin:0,
    },
});


export default SectionRow;