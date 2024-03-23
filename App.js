import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './navigation/Navigation';
import { Appbar } from 'react-native-paper';
const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </Provider>
);

export default App;