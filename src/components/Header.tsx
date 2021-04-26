import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height'

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import Img from '../assets/Davi.png'

export function Header(){
    return(
        <View style={ styles.container }>
            <View>
                <Text style={ styles.greeting } >Olá</Text>
                <Text style={ styles.userName } >Davi</Text>
            </View>
            <Image source={Img} style={ styles.image }/>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection: 'row',//uma do lado da outra e não embaixo
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical:20,
        marginTop: getStatusBarHeight(),
    },
    image:{
        width: 70,
        height:70,
        borderRadius:40
    },
    greeting:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.text
    },
    userName:{
        fontSize:32,
        fontFamily: fonts.heading,
        lineHeight:40
    }

})
