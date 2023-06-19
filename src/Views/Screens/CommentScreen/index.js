import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {sendImage, photoImage, houseImage} from '../../../Assets/Images';
import CommentComponent from './CommentComponent';
import {useRoute} from '@react-navigation/native';

const CommentScreen = () => {
  const cmts = [
    {
      commenter: {
        name: '',
        image: '',
      },
      cmt: '',
      sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    },
  ];

  const [cmt, setCmt] = useState('');
  const {params} = useRoute();

  const [comments, SetComments] = useState([]);

  React.useEffect(() => {
    SetComments(params);

    return () => {
      SetComments([]);
    };
  }, []);

  const cmtFunc = commenter => {
    if (cmt) {
      let cmts = {
        commenter: {name: commenter, image: photoImage},
        cmt: cmt,
        sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        id: comments.length,
      };
      SetComments([...comments, cmts]);
      setCmt('');
    }
  };

  const deleteComment = id => {
    let filtered = comments.filter(cmt => cmt.id !== id);
    SetComments(filtered);
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
          Comments
        </Text>
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          margin: 5,
          marginLeft: 20,
        }}>
        Bibek Chaudhary
      </Text>
      <Text style={{marginLeft: 20}}>2023/01/27 09:10</Text>

      <Image
        source={houseImage}
        style={{
          height: '20%',
          width: '90%',
          alignSelf: 'center',
          margin: 10,
        }}
      />

      <View style={{flex: 1}}>
        <FlatList
          data={[...comments].reverse()}
          // inverted
          renderItem={React.useCallback(
            ({item}) => {
              return (
                <CommentComponent
                  onDelete={() => {
                    deleteComment(item.id);
                  }}
                  key={item.id}
                  cmt={item}
                  image={item?.image}
                />
              );
            },
            [comments],
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
        <TextInput
          placeholder="Comments..."
          value={cmt}
          style={styles.input}
          onChangeText={setCmt}
        />
        <TouchableOpacity onPress={() => cmtFunc()}>
          <Image
            source={sendImage}
            style={{height: 25, width: 25, marginTop: 15}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentScreen;

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
});
