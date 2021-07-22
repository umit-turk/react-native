import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userHometown || !userMail) {
        Alert.alert('Kebap Fitness Salonu', "Bilgiler boş bırakılamaz");
        return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };

    navigation.navigate("MemberResultScreen", {user})
  }

  return (
    <View>
      <Text>Hello membersign</Text>
      <Input
        label="Üye Adı"
        placeholder="Üyenin ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üyenin soyismini giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaş"
        placeholder="Üyenin yaşını giriniz"
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-posta adresini giriniz"
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin memleketini giriniz"
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
}
export default MemberSign;
