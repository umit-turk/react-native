import React from 'react';
import {View, Text, Button} from 'react-native';

function Second(props) {
    console.log(props)

    const user = props.route.params.username;

   function backToFirst(){
       props.navigation.goBack();
   }
    return (
        <View>
            <Text>Second</Text>
            <Text>{user}</Text>
            <Button title="Go back"  onPress={backToFirst}/>
        </View>
    )
}
export default Second;