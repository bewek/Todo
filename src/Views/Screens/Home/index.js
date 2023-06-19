import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../css';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import HomeCardComponent from './HomeCardComponent';
import {
  gentsImage,
  girlImage,
  ladyImage,
  menImage,
  photoImage,
  womenImage,
} from '../../../Assets/Images';
import {logout} from '../../../Redux/Slice/auth.slice';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from './UserCard';

// const messages = [
//   {
//     id: 0,
//     messager: {
//       name: 'me',
//       image: menImage,
//     },
//     wamsg: 'Hi',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 1,
//     messager: {
//       name: 'bibek',
//       image: photoImage,
//     },
//     wamsg: 'Hey',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 2,
//     messager: {
//       name: 'bibek',
//       image: photoImage,
//     },
//     wamsg: 'How r u',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 3,
//     messager: {
//       name: 'me',
//       image: menImage,
//     },
//     wamsg: 'I am Fine and how r u',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 4,
//     messager: {
//       name: 'bibek',
//       image: photoImage,
//     },
//     wamsg: 'I am also fine thankyou!',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
// ];

// const messgs = [
//   {
//     id: 0,
//     sender: {
//       name: 'me',
//       image: photoImage,
//     },
//     msg: 'Hello',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 1,
//     sender: {
//       name: 'Rupesh',
//       image: menImage,
//     },
//     msg: 'Hi',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 2,
//     sender: {
//       name: 'me',
//       image: photoImage,
//     },
//     msg: 'What are you doing',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 3,
//     sender: {
//       name: 'Rupesh',
//       image: menImage,
//     },
//     msg: 'I am doing some works and you',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 4,
//     sender: {
//       name: 'me',
//       image: photoImage,
//     },
//     msg: 'I am playing games',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
// ];

// const cmts = [
//   {
//     id: 0,
//     commenter: {
//       name: 'Ram',
//       image: photoImage,
//     },
//     cmt: 'Very Nice',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 1,
//     commenter: {
//       name: 'Shyam',
//       image: menImage,
//     },
//     cmt: 'Beautiful',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 2,
//     commenter: {
//       name: 'Shanny',
//       image: ladyImage,
//     },
//     cmt: 'Good',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 3,
//     commenter: {
//       name: 'Jenny',
//       image: girlImage,
//     },
//     cmt: 'Great',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 4,
//     commenter: {
//       name: 'Hari',
//       image: gentsImage,
//     },
//     cmt: 'Nice',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
//   {
//     id: 5,
//     commenter: {
//       name: 'Jerry',
//       image: womenImage,
//     },
//     cmt: 'Nice nature',
//     sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
//   },
// ];

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {userRegistered} = useSelector(state => state.auth);
  const {userSubmit} = useSelector(state => state.user);

  const [userSub, setUserSub] = useState();

  const [title, setTitle] = useState('');
  const [titledata, setTitledata] = useState([]);

  const [date, setDate] = useState('');
  const [task, setTask] = useState('');
  const [showModal, setShowModal] = useState({status: false, type: ''});

  const addTask = () => {
    let tsk = {
      title,
      date,
      task,
      id: titledata.length + 1,
    };
    let updatedList = [...titledata, tsk];
    if (date && task && title) {
      setTitledata(updatedList);
      setDate('');
      setTask('');
      setTitle('');
      setShowModal({status: false, type: ''});
    } else {
      let msg = 'Task not found';
      if (!date) msg = 'date not found';
      if (!title) msg = 'title not found';
      Alert.alert(msg);
    }
  };

  const deleteTask = id => {
    let filtered = titledata.filter(task => task.id !== id);
    setTitledata(filtered);
  };
  const deleteTak = UserCard => {
    let filtered = userSub.filter(task => task.UserCard !== UserCard);
    setUserSub(filtered);
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          margin: 15,
        }}>
        TODO Bibek
      </Text>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        <Button
          name={'Msg'}
          onPress={() => {
            navigation.navigate('Message', messgs);
          }}
        />
        <Button
          name={'Cmt'}
          onPress={() => {
            navigation.navigate('CommentScreen', cmts);
          }}
        />
        <Button
          name={'WAM'}
          onPress={() => {
            navigation.navigate('WhatsappMessage', messages);
          }}
        />
        <Button
          name={'Form'}
          onPress={() => {
            navigation.navigate('Form');
            dispatch(logout());
          }}
        />
        <Button
          name={'NewF'}
          onPress={() => {
            navigation.navigate('NewForm');
          }}
        />
        <Button
          name={'NextF'}
          onPress={() => {
            navigation.navigate('NextForm');
          }}
        />
        <Button
          name={'Login'}
          onPress={() => {
            // navigation.navigate('Login');
            dispatch(logout());
          }}
        />
      </View> */}
      <FlatList
        data={[...userSubmit].reverse()}
        // inverted
        renderItem={({item}) => {
          return (
            <UserCard
              onDelete={() => {
                deleteTask(item?.UserCard);
              }}
              fullname={item?.fullname}
              email={item?.email}
              phone={item?.phone}
              state={item?.state}
              district={item?.district}
              city={item?.city}
              education={item?.education}
              codingLanguage={item?.codingLanguage}
            />
          );
        }}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center', marginTop: 30}}>
            No details yet.
          </Text>
        )}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewForm');
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 60,
            backgroundColor: '#aed581',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 50,
            right: 25,
          }}>
          <Text style={{fontSize: 30, lineHeight: 35, fontWeight: '700'}}>
            +
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        visible={showModal.status}
        presentationStyle={'overFullScreen'}
        // transparent={true}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 15,
            }}>
            <Text
              onPress={() => {
                setShowModal({status: false, type: ''});
              }}>
              go Back
            </Text>

            <Text style={{fontSize: 16, fontWeight: '700'}}>Task Details</Text>
            <View style={{width: 60}} />
          </View>
          <TextInput
            placeholder="Title"
            value={title}
            style={commonStyles.input}
            onChangeText={setTitle}
          />

          <TextInput
            placeholder="Date"
            value={date}
            style={commonStyles.input}
            onChangeText={setDate}
          />
          <TextInput
            placeholder="Task"
            value={task}
            style={commonStyles.input}
            onChangeText={setTask}
          />

          <Button name={'Add'} onPress={addTask} />
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
