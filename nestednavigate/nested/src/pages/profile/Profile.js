import React from 'react'
import { View, Text, Button } from 'react-native'

function Profile({navigation}){
    return(
        <View>
            <Text>Hello Profile</Text>
            <Button title="Edit" onPress={() =>navigation.navigate("ProfileEditScreen")} />
        </View>
    )
}
export default Profile;