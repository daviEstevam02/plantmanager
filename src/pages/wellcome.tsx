import React, { useState } from 'react';
import { 
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import wateringImg from '../assets/watering.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Wellcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return(
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.Title}>
                    Gerencie {'\n'}
                    suas platas
                    de{'\n'}
                    forma facil
                </Text>
                
                    <Image 
                    source={ wateringImg } 
                    style={style.image}
                    resizeMode="contain"
                    />

                <Text style={style.subTitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.       
                </Text>

                <TouchableOpacity 
                    style={style.button} 
                    activeOpacity={0.7}
                    onPress={ handleStart }
                >
                    <Feather name="chevron-right" 
                    style={style.buttonIcon}
                    />
            </TouchableOpacity>
        </View>
        </ SafeAreaView> 
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        
    },
    wrapper:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal: 20
    },
    Title:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight:34
    },
    subTitle:{
        textAlign: 'center',
        fontSize:18,
        paddingHorizontal: 20,
        color:colors.heading,
        fontFamily: fonts.text
    },
   
    image:{
        
        height: Dimensions.get('window').width * 0.7            
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        width: 56,
        height:56
    },
     buttonIcon:{
        color:colors.white,
        fontSize: 24
    },
});