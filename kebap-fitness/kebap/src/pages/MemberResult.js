import React from 'react';
import { View, Text } from 'react-native';

function MemberResult({route}){
    const {user} = route.params;
    return(
        <View>
            <Text>Üye Adı: {user.userName} </Text>
            <Text>Üye Soyadı: {user.userSurname} </Text>
            <Text>Üye Yaş: {user.userAge} </Text>
            <Text>Üye E-posta: {user.userMail} </Text>
            <Text>Üye Memleketi: {user.userHometown} </Text>
        </View>
    )
}

export default MemberResult;