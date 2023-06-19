import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {sendImage, photoImage} from '../../../Assets/Images';
import MessageComponent from './MessageComponent';
import {useRoute} from '@react-navigation/native';

const msgs = [
  {
    sender: {
      name: 'me',
      image: '',
    },
    msg: '',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
];

const Message = ({Aa, onPress}) => {
  const [msg, setMsg] = useState('');
  const {params} = useRoute();
  const [messages, setMessages] = useState([]);

  React.useEffect(() => {
    setMessages(params);

    return () => {
      setMessages([]);
    };
  }, []);

  const sendFunc = sender => {
    if (msg) {
      let msgs = {
        sender: {name: sender ?? 'me', image: photoImage},
        msg: msg,
        sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        id: messages.length,
      };
      setMessages([...messages, msgs]);
      setMsg('');
    }
  };

  const deleteMessage = id => {
    let filtered = messages.filter(msg => msg.id !== id);
    setMessages(filtered);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            margin: 15,
          }}>
          Defi Group Chat
        </Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={[...messages].reverse()}
          inverted
          renderItem={React.useCallback(
            ({item}) => {
              return (
                <MessageComponent
                  onDelete={() => {
                    deleteMessage(item.id);
                  }}
                  key={item.id}
                  msg={item}
                  date={item?.date}
                  image={item?.image}
                />
              );
            },
            [messages],
          )}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-around',
          borderColor: '#d9e3f0',
          borderWidth: 1,
        }}>
        <TouchableOpacity onPress={() => sendFunc('Rupesh')}>
          <Image source={sendImage} style={styles.image} />
        </TouchableOpacity>
        <TextInput
          placeholder="message..."
          value={msg}
          style={styles.input}
          onChangeText={setMsg}
        />
        <TouchableOpacity onPress={() => sendFunc()}>
          <Image source={sendImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
  },
  input: {
    margin: 10,
    fontSize: 20,
    padding: 10,
    width: 280,
    height: 40,
  },
  image: {
    height: 25,
    width: 25,
    marginTop: 15,
  },
});
