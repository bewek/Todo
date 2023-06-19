import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {crossImage} from '../../../Assets/Images';

const CommentComponent = ({cmt, onDelete}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={cmt?.commenter?.image}
        style={{height: 40, width: 40, alignSelf: 'center'}}
      />
      <View style={styles.card}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
          {cmt?.cmt}
        </Text>
      </View>

      <Text style={{alignSelf: 'center'}}>{cmt?.sentAt}</Text>

      <TouchableOpacity onPress={onDelete} style={{alignSelf: 'center'}}>
        <Image
          source={crossImage}
          style={{height: 10, width: 10, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommentComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#03a9f4',
    padding: 15,
    borderRadius: 20,
    margin: 10,
    maxWidth: '70%',
  },
});
