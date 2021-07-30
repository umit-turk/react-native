import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import styles from './Messages.style';
import ContentInput from '../../components/modal/ContentInput';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
      handleInputToggle();
      console.log(content)
  }

  return (
    <View style={styles.container}>
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
