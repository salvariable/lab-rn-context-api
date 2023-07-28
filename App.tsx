import React, {createContext, useReducer, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

// UI KItten
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

// Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const initialContext = {
  cart: [],
};

export const AppContext = createContext(initialContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = item => {
    dispatch({type: 'ADD_ITEM', payload: item});
  };

  const removeFromCart = item => {
    dispatch({type: 'REMOVE_ITEM', payload: item});
  };

  return (
    <AppContext.Provider value={{cart, addToCart, removeFromCart}}>
      <SafeAreaView style={styles.topArea} />
      <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
      <SafeAreaView style={styles.mainArea}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
          <Layout style={styles.mainArea}>
            <Header />
            <Divider />
            <Content />
            <Divider />
            <Footer />
          </Layout>
        </ApplicationProvider>
      </SafeAreaView>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: 'rgb(21, 26, 48)'},
  mainArea: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)',
  },

  card: {
    flex: 1,
  },
});
