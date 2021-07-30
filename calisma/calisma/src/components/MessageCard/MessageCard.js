import React from 'react';
import {Text, View} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import { tr } from 'date-fns/locale'

const MessageCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View>
      <View>
        <Text>{message.username}</Text>
        <Text>{formattedDate}</Text>
      </View>
      <Text>{message.text}</Text>
    </View>
  );
};

export default MessageCard;
