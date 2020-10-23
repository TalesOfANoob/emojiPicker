/* eslint-disable prettier/prettier */
import React,{useState,useCallback,useRef} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,SectionList} from 'react-native';

import CommunityIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import * as EmojiJson from '../resources/data-by-group.json';
import SectionRow from './EmojiPickerComponents/SectionRow';

const getJsonKeys = ()=>{
    const keys = [];
    for (let key in EmojiJson){
        keys.push(key);
    }
    keys.pop();
    return keys;
}

const getSectionData = ()=>{

    const keys=getJsonKeys();
    
    const sectionData = keys.map(key =>{
        const rowArray=[];
        let i;
        const len=EmojiJson[key].length;
        for(i =0;i+6<=len;i+=6){
            rowArray.push({data:EmojiJson[key].slice(i,i+6),key:""+key+"_"+rowArray.length});
        }
        
        if(len-i>0){
            
            rowArray.push({data:EmojiJson[key].slice(i,len),key:""+key+"_"+rowArray.length});
        }
        
        
        return {data:rowArray,title:key}
    });
    
    return sectionData;
};
const computeListHeights = () =>{

    let heights=[];
    for(const key in EmojiJson){
        heights.push(EmojiJson[key].length*24);
    }
    heights.pop();
    return heights;

}



const EmojiPicker = () =>{


    const [pressed,setPressed] = useState(false);
    const sectionListRef=useRef(null);
    const sectionData=getSectionData();
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
        let jsx=[];

        for (let i =0;i<icons.length;i++){
            const e = icons[i];
            jsx.push(
                    <TouchableOpacity 
                        key={e.name+e.icon}
                        style={styles.listHeaderItemStyle}
                        
                        >
                        {
                        e.icon === 'CommunityIcon'
                        ? <CommunityIcon style={styles.listHeaderItemTextStyle} name={e.name}/>
                        : <MaterialIcon style={styles.listHeaderItemTextStyle} name={e.name}/>
                        }
    
                </TouchableOpacity>
            );
        }
        return jsx
    };

    
    return (<View>
        {
        pressed ?

        <View  style={styles.picker}>
            
            <View style={styles.listHeaderStyle}>{createListHeader()}</View>
            <SectionList
                ref={sectionListRef}
                sections={sectionData}
                renderSectionHeader={
                    ({section})=>{
                        
                        return <Text style={styles.categoryHeader}>{section.title}</Text>
                    }
                }
                renderItem={({item})=>{
                    
                    
                    
                    return <SectionRow data={item.data} _key={item.key}/>
                }}
                keyExtractor={(item)=>{
                    
                    return item.key;

                }}
                showsVerticalScrollIndicator={false}
                style={{flexGrow:1}}
                
                
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
        flexDirection:'row'
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
