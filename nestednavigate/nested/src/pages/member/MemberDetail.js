import React from 'react'
import { View, Text, Button } from 'react-native'

function MemberDetail({navigation}){
    return(
        <View>
            <Text>Hello Detail</Text>
            <Button title="editdetail" onPress={() => navigation.navigate("MemberUpdateScreen")} />
        </View>
    )
}
export default MemberDetail