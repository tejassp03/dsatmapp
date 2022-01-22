import { View, Text } from 'react-native';
import React from 'react';

const Profile = ({ navigation,route}) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  );
};

export default Profile;
