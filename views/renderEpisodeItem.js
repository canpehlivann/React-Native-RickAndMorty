import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const EpisodeItem = ({item}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EpisodeDetails', { episodeId: item.id });
        }}>
        <Text style={{ margin: 20, color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
        <Image
          source={require('../assets/adaptive-icon.png')}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EpisodeItem;