/* eslint-disable prettier/prettier */
import React,{useState,useCallback} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';

import Icon  from 'react-native-vector-icons/Entypo';
import * as EmojiJson from 'unicode-emoji-json/data-by-group.json';

const getObjectKeys = ()=>{

    const keys = [];
    for (let key in EmojiJson){
        keys.push(key);
    }
    keys.pop();
    console.log(keys)
    return keys;
};

const createListHeader = () =>{

    return (
        
        <FlatList
        scrollEnabled={false}
        numColumns={9}
        data={[1,2,3,4,5,6,7,8,9]}
        keyExtractor={(item,index)=>toString(item)+index}
        renderItem={({item})=>{
            return (
            <TouchableOpacity style={styles.listHeaderItemStyle}>
                <Text style={styles.listHeaderItemTextStyle}>{EmojiJson.Activities[1].emoji}</Text>
            </TouchableOpacity>
            );
        }}
        />
        
    );
};


const EmojiPicker = () =>{


    const [pressed,setPressed] = useState(false);
    const keys = getObjectKeys();
    const renderEmoji = useCallback(
        ({item})=>{
            return (
                <TouchableOpacity style={styles.emojiHolder}>
                    <Text style={styles.emojiStyle}>{item.emoji}</Text>
                </TouchableOpacity>);

        }
    ,[]);
    const emojiKeyExtractor = useCallback(
        (item,index) => item.name + index
    ,[]);

    const renderEmojiList = useCallback(({item:key})=>{

        return (
            <>

            {//emoji list
            }
            <FlatList
                style={styles.emojiList}
                ListHeaderComponent={

                    <Text style={styles.categoryHeader}>{key}</Text>
                }
                data={EmojiJson[key]}
                keyExtractor = {emojiKeyExtractor}
                renderItem = {renderEmoji}
                numColumns={7}
            />
            </>
        );

    },[emojiKeyExtractor,renderEmoji]);

    return (<View>
        {
        pressed ?

        <View style={styles.picker}>

            {//category list
            }
            <FlatList
                
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={createListHeader}
                ListHeaderComponentStyle={styles.listHeaderStyle}
                stickyHeaderIndices={[0]}
                data={keys}
                keyExtractor={(item)=>item}
                renderItem={renderEmojiList}
            />

        </View>
        : null
        }
        <TouchableOpacity
        onPress={()=>{
            if (!pressed)
                {setPressed(true);}
            else {
                setPressed(false);
            }
        }}
        style={{alignSelf:'flex-end'}}>
            <Icon style={styles.icon} name="emoji-happy"/>
        </TouchableOpacity>
    </View>);
};


const styles = StyleSheet.create({

    icon:{
        marginTop:5,
        fontSize:25,

    },
    picker:{
        width:300,
        height:300,
        position:'absolute',
        left:70,
        top:30,
        borderRadius:10,
        borderWidth:1,
        borderColor:'grey',
        overflow:'hidden',
    },
    emojiList:{
        flexGrow:1,
        justifyContent:'space-evenly',
    },

    emojiHolder:{
        flexGrow:1,
        borderRadius:50,
    }
    ,
    emojiStyle:{
        fontSize:25,
        marginHorizontal:1,
        textAlign:'center',


    },
    categoryHeader:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'#C8FFBB',
        paddingLeft:11,
    },
    listHeaderStyle:{
        flex:1,
        justifyContent:"space-evenly",
        backgroundColor:'grey',
        flexGrow:1,
    },
    listHeaderItemStyle:{
        flexGrow:1,
        
    },
    listHeaderItemTextStyle:{
        fontSize:22,
        textAlign:"center"
    }

});

export default EmojiPicker;
