/* eslint-disable prettier/prettier */
import React,{useRef,useCallback, useState} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,SectionList,TextInput} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CommunityIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
import * as EmojiJson from '../../resources/data-by-group-stripped-minified.json';
import SectionRow from './SectionRow';
import {screenHeight,screenWidth} from '../../utils';

const getJsonKeys = ()=>{
    const keys = [];
    for (let key in EmojiJson){
        keys.push(key);
    }
    keys.pop();
    return keys;
};

const getSectionData = (name)=>{

    const keys = getJsonKeys();

    if (name != ''){
        let allData = [...EmojiJson[keys[0]]];
        for (let i = 1; i < keys.length; i++){

            allData = allData.concat(EmojiJson[keys[i]]);
        }

        const filteredData = allData.filter((e)=>
        {

            const args = e.name.split('_');

            for ( let i = 0; i < args.length; i++){

                if (args[i].includes(name)){

                    return true;
                }
            }
            return false;

        });

        const genRows = ()=>{
            const key = 'Results';
            const rowArray = [];
            let i;
            const len = filteredData.length;
            for (i = 0; i + 6 <= len; i += 6){
                rowArray.push({data:filteredData.slice(i,i + 6),key:'' + key + '_' + rowArray.length});
            }

            if (len - i > 0){

                rowArray.push({data:filteredData.slice(i,len),key:'' + key + '_' + rowArray.length});
            }


            return rowArray;
        };

        const sectionData = [{data:genRows(),title:'Results'}];
        return sectionData;

    } else {

    const sectionData = keys.map(key =>{
        const rowArray = [];

        let i;
        const len = EmojiJson[key].length;
        for (i = 0; i + 6 <= len; i += 6){
            rowArray.push({data:EmojiJson[key].slice(i,i + 6),key:'' + key + '_' + rowArray.length});
        }

        if (len - i > 0){

            rowArray.push({data:EmojiJson[key].slice(i,len),key:'' + key + '_' + rowArray.length});
        }


        return {data:rowArray,title:key};

    });
    return sectionData;
    }


};

const Picker = ({coords})=>{


    const sectionListRef = useRef(null);
    const [search,setSearch] = useState(false);
    const [name,setName] = useState('');
    const sectionData = getSectionData(name);
    const scroll = useCallback((index)=>{

        if (sectionListRef.current){
            sectionListRef.current.scrollToLocation({

                itemIndex:0,
                sectionIndex:index,

            });
        } else {
            return;
        }

    },[]);
    const createListHeader = () =>{

        const icons = [
            {},
            {name:'emoticon-excited-outline',icon:'CommunityIcon'},
            {name:'emoji-people',icon:'MaterialIcon'},
            {name:'leaf',icon:'CommunityIcon'},
            {name:'hamburger',icon:'CommunityIcon'},
            {name:'airplane-takeoff',icon:'CommunityIcon'},
            {name:'sports-soccer',icon:'MaterialIcon'},
            {name:'dots-horizontal',icon:'CommunityIcon'},
    ];
        let jsx = [];
        jsx.push(

            <TouchableOpacity
                key={search + '_' + 0}
                style={styles.listHeaderItemStyle}
                onPress={()=>{
                    if (search == true){
                        setSearch(false);
                    } else {

                        setSearch(true);

                    }
                }}

            >
                <MaterialIcon  style={styles.listHeaderItemTextStyle} name="search" />
            </TouchableOpacity>
        );
        for (let i = 1; i < icons.length; i++){
            const e = icons[i];
            jsx.push(
                    <TouchableOpacity
                        key={e.name + '_' + i}
                        style={styles.listHeaderItemStyle}
                        onPress={()=>scroll(i - 1)}
                        >
                        {
                        e.icon === 'CommunityIcon'
                        ? <CommunityIcon style={styles.listHeaderItemTextStyle} name={e.name}/>
                        : <MaterialIcon style={styles.listHeaderItemTextStyle} name={e.name}/>
                        }

                </TouchableOpacity>
            );
        }
        return jsx;
    };


    return (
        <View  style={styles.picker}>

            <View style={styles.listHeaderStyle}>{createListHeader()}</View>
            {search
            ? <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(text)=>setName(text)}
                />
            : null
            }
            <SectionList
                ref={sectionListRef}
                sections={sectionData}
                renderSectionHeader={
                    ({section})=>{

                        return <Text style={styles.categoryHeader}>{section.title}</Text>;
                    }
                }
                renderItem={({item})=>{



                    return <SectionRow data={item.data} _key={item.key}/>;
                }}
                keyExtractor={(item)=>{

                    return item.key;

                }}
                stickySectionHeadersEnabled={true}
                showsVerticalScrollIndicator={false}
                style={styles.pickerList}
                getItemLayout={(data,index)=>{

                    return {length:24,offset:24 * index,index};
                }}
                initialNumToRender={9}
                windowSize={85}

            />
        </View>
    );
};

const styles = StyleSheet.create({

    picker:{
        width:0.72 * screenWidth,
        height:0.375 * screenHeight,
        position:'absolute',
        left:'18%',
        top:'100%',
        zIndex:1,
        borderRadius:10,
        borderWidth:1,
        borderColor:'grey',
        overflow:'hidden',
        backgroundColor:'white',


    },
    pickerList:{
        flexGrow:1,
    },
    categoryHeader:{
        fontSize:RFValue(20),
        fontWeight:'bold',
        backgroundColor:'#C8FFBB',
        paddingLeft:'4%',

    },

    listHeaderStyle:{
        backgroundColor:'#71EB71',
        flexDirection:'row',
    },

    listHeaderItemStyle:{
        width:'12.5%',

    },
    listHeaderItemTextStyle:{
        fontSize:RFValue(30),
        textAlign:'center',
    },
    input:{
        width:'100%',
        height:'12%',
        fontSize:RFValue(20),
        textAlignVertical:'center',
        padding:0,
        paddingLeft:'4%',
        margin:0,
        borderColor:'grey',
    },
});

export default Picker;
