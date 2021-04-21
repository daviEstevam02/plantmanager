import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';

export function UserIdentification(){
    return(
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <View style={style.form}>
                    <Text style={style.emoji}>
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});