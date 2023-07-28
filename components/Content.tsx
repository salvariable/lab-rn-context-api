import {Button, List, ListItem} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import data from '../data.json';
import {AppContext} from '../App';

interface IListItem {
  title: string;
  id: number;
  price: number;
  description: string;
}

const Content = () => {
  const {cart, addToCart} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <List
        style={styles.container}
        data={data}
        renderItem={({
          item,
          index,
        }: {
          item: IListItem;
          index: number;
        }): React.ReactElement => (
          <ListItem
            title={`${item.title} | $${item.price}`}
            description={`${item.description} ${index + 1}`}
            accessoryRight={() => (
              <Button size="tiny" onPress={() => addToCart(item)}>
                {cart.includes(item) ? 'Remove from cart' : 'Add to cart'}
              </Button>
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
