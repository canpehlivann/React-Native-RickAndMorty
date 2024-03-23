import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from "../MainApp";
import EpisodeDetails from '../hooks/episodeDetails';
import CharacterDetails from '../api/characters/CharacterDetails';
import FavoriteCharactersScreen from '../screens/FavoriteCharactersScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ title: 'Rick And Morty' }}
      />
      <Stack.Screen
        name="EpisodeDetails"
        component={EpisodeDetails}
        options={{ title: 'Bölüm Detayları' }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
        options={{ title: 'Karakter Detayları' }}
      />
      <Stack.Screen
        name="FavoriteCharactersScreen"
        component={FavoriteCharactersScreen}
        options={{ title: 'Beğendiğiniz Karakterler' }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;