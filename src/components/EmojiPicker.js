/* eslint-disable prettier/prettier */
import React,{useState,useCallback,useRef} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';

import CommunityIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import * as EmojiJson from 'unicode-emoji-json/data-by-group.json';

const getObjectKeys = ()=>{

    const keys = [];
    for (let key in EmojiJson){
        keys.push(key);
    }
    keys.pop();
    return keys;
};




const EmojiPicker = () =>{


    const [pressed,setPressed] = useState(false);
    const keys = getObjectKeys();
    /*const pickerListRef=useRef(null);

    const scrollWithRef = useCallback((index)=>{
        
        if(pickerListRef!=null)pickerListRef.current.scrollToIndex(1);
        else{
            return;
        }
    },[])*/

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

    const createListHeader = () =>{

        const icons = [
            {name:'emoticon-excited-outline',icon:'CommunityIcon'},
            {name:'emoji-people',icon:'MaterialIcon'},
            {name:'leaf',icon:'CommunityIcon'},
            {name:'hamburger',icon:'CommunityIcon'},
            {name:'airplane-takeoff',icon:'CommunityIcon'},
            {name:'sports-soccer',icon:'MaterialIcon'},
            {name:'dots-horizontal',icon:'CommunityIcon'},
    ];
        
    
        return (
    
            <FlatList
            scrollEnabled={false}
            numColumns={7}
            data={["1","2","3","4","5","6","7"]}
            keyExtractor={(item)=>item}
            
            renderItem={({item,index})=>{
                return (
                <TouchableOpacity 
                    style={styles.listHeaderItemStyle}
                    
                >
                    {
                    icons[index].icon === 'CommunityIcon'
                    ? <CommunityIcon style={styles.listHeaderItemTextStyle} name={icons[index].name}/>
                    : <MaterialIcon style={styles.listHeaderItemTextStyle} name={icons[index].name}/>
                    }
    
                </TouchableOpacity>
                );
            }}
            />
    
        );
    };


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
            <CommunityIcon style={styles.icon} name="emoticon-outline"/>
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

        justifyContent:'space-evenly',
        backgroundColor:'#71EB71',
        flexGrow:1,
    },
    listHeaderItemStyle:{
        flexGrow:1,

    },
    listHeaderItemTextStyle:{
        fontSize:30,
        textAlign:'center',
    },

});

export default EmojiPicker;
