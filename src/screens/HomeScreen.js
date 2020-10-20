/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import Icon  from 'react-native-vector-icons/Entypo'
const HomeScreen = () =>{

    const [pressed,setPressed] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Home Screen</Text>
                { 
                pressed ? <Text>Pressed</Text> : <Text>Not pressed</Text>
                }
                <TouchableOpacity 
                onPress={()=>{
                    if(!pressed)
                        setPressed(true);
                    else{
                        setPressed(false);
                    }
                }} 
                style={{alignSelf:"flex-end"}}>
                    <Icon style={styles.icon} name="emoji-happy"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({


    container:{
        alignSelf:"center",
        justifyContent:"center",
        flexGrow:1,
    },
    text:{
        borderWidth:1,
        borderRadius:50,
        fontSize:25,
        padding:10,
        width:400,
    },
    icon:{
        marginTop:5,
        fontSize:25,
        
    }

})

export default HomeScreen;