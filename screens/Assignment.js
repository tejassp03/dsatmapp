import { View, Text } from 'react-native';
import React from 'react';

const Assignment = ({ navigation, route }) => {
  return (
    <View>
      <Text>{route.params.name} Assignment</Text>
    </View>
  );
};

export default Assignment;
