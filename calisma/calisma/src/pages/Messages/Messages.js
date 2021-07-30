import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import styles from './Messages.style';
import ContentInput from '../../components/modal/ContentInput';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);

  //Flatlist'te göstereceğim datalar
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('/messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val()
        console.log(contentData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
    console.log(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref('/messages/').push(contentObj);
  }

  return (
    <View style={styles.container}>
      <FlatList />
      <FloatingButton onPress={handleInputToggle} />
      <ContentInput
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
};

export default Messages;
