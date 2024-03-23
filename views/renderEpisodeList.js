import React from 'react';

import {View, Text} from 'react-native';

const EpisodeDetailsRenderer = ({episode})=>
{
    return(
       <View>
        <Text>{episode.name}</Text>
        <Text>Air Date: {episode.air_date}</Text>
       </View> 
    );
}

export default EpisodeDetailsRenderer;