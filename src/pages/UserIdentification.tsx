import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Buttons } from '../components/button';

import { useNavigation } from '@react-navigation/core';

export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleSubmit(){
        if(!isFilled){
            setIsFilled(false)
            alert('Digite o seu nome ð');
        }
        else{
            navigation.navigate('Confirmation');
        }
    }


    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    return(
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView 
            style={style.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >     
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>      
                        <View style={style.content}>
                            <View style={style.form}>
                                <View style={style.header}>
                                    <Text style={style.emoji}>
                                        { isFilled ? 'ð' : 'ð' }
                                    </Text>
                                    <Text  style={style.title}>
                                        Como podemos{'\n'} chamar vocÃª?
                                    </Text>
                                </View>

                                    <TextInput 
                                        style={[
                                            style.input,
                                            (isFocused || isFilled) &&
                                            { borderColor: colors.green }
                                        ]}
                                        placeholder="Digite um nome"
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                        onChangeText={handleInputChange}
                                    />
                                <View style={style.footer}>
                                    <Buttons 
                                        title="Confirmar"
                                        onPress={handleSubmit}
                                    />
                                </View>
                            </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    content:{
        flex: 1,
        width: '100%'
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal: 54,
        alignItems:'center',
    },
    header:{
        alignItems:'center'
    },
    emoji:{
        fontSize:44
    },
    input:{

        borderBottomWidth:1,
        borderColor:colors.gray,
        color:colors.heading,
        width:'100%',
        fontSize: 18,
        marginTop:50,
        padding: 10,
        textAlign:'center'
    },
    title:{
        fontSize:24,
        textAlign: 'center',
        color:colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20
    },
    footer:{
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});