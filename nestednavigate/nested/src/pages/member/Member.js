import React from 'react';
import {View, Text, Button} from 'react-native';

function Member({navigation}) {
  return (
    <View>
      <Text>Hello Member</Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('MemberDetailScreen')}
      />
    </View>
  );
}
export default Member;
