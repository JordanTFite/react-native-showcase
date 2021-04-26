import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import StyledSafeView from '../StyledSafeView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WhiteText from '../WhiteText';

const {width} = Dimensions.get('window');

const posts = [
  {
    id: 1,
    uri:
      'https://images.unsplash.com/photo-1617287287784-7e6b90c6cfd7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixlib=rb-1.2.1&q=80&w=512',
  },
  {
    id: 2,
    uri:
      'https://images.unsplash.com/photo-1617657515593-22cf90b5ef71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixlib=rb-1.2.1&q=80&w=512',
  },
  {
    id: 3,
    uri:
      'https://images.unsplash.com/photo-1617733167409-9253a229aa2a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixlib=rb-1.2.1&q=80&w=512',
  },
  {
    id: 4,
    uri:
      'https://images.unsplash.com/photo-1617128610098-ea2b2496d875?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixlib=rb-1.2.1&q=80&w=512',
  },
  {
    id: 5,
    uri:
      'https://images.unsplash.com/photo-1617697939870-2c360dc9080a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixlib=rb-1.2.1&q=80&w=512',
  },
];

const Pictures = () => {
  return (
    <StyledSafeView>
      <View style={styles.mainView}>
        <View
          style={{
            padding: 15,
            width: '100%',
            borderBottomWidth: 2,
            borderBottomColor: '#f0f6f0',
            alignItems: 'center',
          }}>
          <WhiteText fontSize={28}>Pictures</WhiteText>
        </View>
        <FlatList data={posts} renderItem={Post} keyExtractor={i => i.id} />
      </View>
    </StyledSafeView>
  );
};

const PostHeader = () => (
  <View
    style={{
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Ionicons name={'person-circle'} size={36} color={'#f0f6f0'} />
      <WhiteText>user.name</WhiteText>
      <Text style={{color: '#24a0ed', marginLeft: 10, fontWeight: 'bold'}}>
        Follow
      </Text>
    </View>
    <Ionicons name={'ellipsis-vertical'} size={24} color={'#f0f6f0'} />
  </View>
);

const pressedColors = {
  heart: '#f92849',
};

const ActionButton = ({name, marginLeft = 0, marginRight = 0}) => {
  const [pressed, setPressed] = useState(false);

  const onPress = () => {
    setPressed(!pressed);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={pressed ? name : `${name}-outline`}
        size={28}
        color={pressed ? pressedColors[name] ?? '#f0f6f0' : '#f0f6f0'}
        style={{marginLeft, marginRight}}
      />
    </TouchableOpacity>
  );
};

const PostActionBar = () => (
  <View
    style={{
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <ActionButton name={'heart'} />
      <ActionButton name={'chatbubble'} marginLeft={10} />
      <ActionButton name={'paper-plane'} marginLeft={10} />
    </View>
    <ActionButton name={'bookmark'} />
  </View>
);

const PostInfo = () => (
  <View
    style={{
      paddingHorizontal: 12,
      paddingBottom: 20,
      borderBottomColor: '#606660',
      borderBottomWidth: 1,
    }}>
    <WhiteText fontWeight={'400'}>
      Liked by <WhiteText>some_other_user</WhiteText>
    </WhiteText>
    <WhiteText>
      user.name <WhiteText fontWeight={'400'}>Cool picture I took!</WhiteText>
    </WhiteText>
  </View>
);

const Post = ({item}) => {
  const {uri} = item;
  return (
    <View>
      <PostHeader />
      <Image style={styles.image} source={{uri}} />
      <PostActionBar />
      <PostInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    backgroundColor: '#101520',
    height: '100%',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pictureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width,
    height: width,
  },
  userIcon: {
    width: 64,
    height: 64,
  },
});

export default Pictures;
