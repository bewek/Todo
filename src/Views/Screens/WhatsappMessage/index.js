import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {sendImage, photoImage, backgroundImage} from '../../../Assets/Images';
import WhatsappmsgComponent from './WhatsappmsgComponent';
import {useRoute} from '@react-navigation/native';

const wamsgs = [
  {
    messager: {
      name: 'me',
      image: '',
    },
    wamsg: '',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
];
const WhatsappMessage = () => {
  const [wamsg, setWamsg] = useState('');
  const {params} = useRoute();

  const [wamessages, setWamessages] = useState([]);

  React.useEffect(() => {
    setWamessages(params);

    return () => {
      setWamessages([]);
    };
  }, []);

  const msgFunc = messager => {
    if (wamsg) {
      let wamsgs = {
        messager: {name: messager ?? 'me', image: photoImage},
        wamsg: wamsg,
        sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        id: wamessages.length,
      };
      console.log('send', [...wamessages, wamsgs]);
      setWamessages([...wamessages, wamsgs]);
      setWamsg('');
    }
  };

  const deleteWamessage = id => {
    let filtered = wamessages.filter(wamsg => wamsg.id !== id);
    setWamessages(filtered);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={photoImage}
            style={{height: 40, width: 40, margin: 10}}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#2abc31',
              margin: 15,
            }}>
            Bibek Chaudhary
          </Text>
        </View>
      </View>

      <ImageBackground source={backgroundImage} style={styles.background}>
        <FlatList
          style={{flex: 1}}
          data={[...wamessages].reverse()}
          inverted
          renderItem={React.useCallback(
            ({item}) => {
              return (
                <WhatsappmsgComponent
                  onDelete={() => {
                    deleteWamessage(item.id);
                  }}
                  key={item.id}
                  wamsg={item}
                  image={item?.image}
                />
              );
            },
            [wamessages],
          )}
        />
      </ImageBackground>

      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-around',
          borderColor: '#d9e3f0',
          borderWidth: 1,
        }}>
        <TouchableOpacity onPress={() => msgFunc('bibek')}>
          <Image source={sendImage} style={styles.image} />
        </TouchableOpacity>
        <TextInput
          placeholder="Message"
          value={wamsg}
          style={styles.input}
          onChangeText={setWamsg}
        />
        <TouchableOpacity onPress={() => msgFunc()}>
          <Image source={sendImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhatsappMessage;

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
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
