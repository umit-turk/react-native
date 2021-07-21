import React from 'react'
import {  Button, Text, View } from 'react-native'

function First(props){

    console.log(props)

    function navigateToPage(){
        props.navigation.navigate('SecondScreen', {username: 'ümityaşartürk'});
    }
    return(

        <View>
            <Text>Hello First</Text>
            <Button title="go to second" onPress={navigateToPage} />
        </View>
    )
}
export default First;