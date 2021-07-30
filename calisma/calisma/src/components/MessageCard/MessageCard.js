import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({message, onBanane}) => {
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
      <TouchableOpacity onPress={onBanane}>
          {!!message.dislike && (
              <View>
                  <Text>{message.dislike}</Text>
              </View>
          )}
        <Text>Bana ne</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageCard;
