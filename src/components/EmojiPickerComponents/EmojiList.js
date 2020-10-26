/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {rmEmoji} from '../../redux/emojiActions';
const EmojiList = ({state,rmEmoji})=>{


    return (
    <View style={styles.emojiListBar}>

        <FlatList
            style={styles.flatList}
            data={state}
            keyExtractor={(item,index)=>'' + item.name + index}
            renderItem={({item})=>{

                return (
                <TouchableOpacity
                    onPress={()=>rmEmoji(item.emoji)}
                >
                    <Text style={styles.emojiStyle}>
                        {item.emoji.emoji} {item.count}
                    </Text>
                </TouchableOpacity>
                );
            }}
            horizontal
        />
    </View>);

};
const styles = StyleSheet.create({


    emojiListBar:{
        flex:1,
        borderRadius:20,
        overflow:'hidden',
        marginTop:1,
    },
    flatList:{
        flex:1,

    },
    emojiStyle:{
        fontSize:RFValue(18),
        textAlignVertical:'center',
        marginLeft:4,
        paddingHorizontal:5,
        borderWidth:1,
        borderRadius:20,
        borderColor:'grey',
        backgroundColor:'#C8FFBB',
    },

});

const mapStateToProps = (state)=>{
    return {
        state,
    };
};

const matchDispatchToProps = (dispatch)=>{
    return bindActionCreators({rmEmoji},dispatch);
};

export default connect(mapStateToProps,matchDispatchToProps)(EmojiList);
