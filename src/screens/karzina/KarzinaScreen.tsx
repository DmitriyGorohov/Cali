import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header.tsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  decreaseProductQuantityTint, removeProductFromCart,
  shopMyBookSelector,
} from '../../store/shop/shopTintSlice.ts';
import Counter from '../../components/Counter.tsx';
import Colors from '../../styles/Colors.ts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../../navigation/navigation.ts';
import Screens from '../../navigation/consts/screens.ts';
import {IconComponent} from '../../components/icon/IconComponent.tsx';

const KarzinaScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { itemsCart, totalCount } = useSelector(shopMyBookSelector);

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: Colors.black }}>
      <View style={{ backgroundColor: Colors.white, flex: 1 }}>
        <Header />
        <FlatList
          data={itemsCart}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `${item.product.id}`}
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{ color: Colors.black, fontSize: 24, fontWeight: '800' }}
              >
                Корзина пуста...
              </Text>
              <IconComponent icon={'empty'} style={{ width: 200, height: 200, marginTop: 30 }} />
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={item.product.image}
                resizeMode="cover"
                style={styles.itemImage}
              />
              <View style={styles.itemDetailsContainer}>
                <Text numberOfLines={2} style={styles.itemTitle}>
                  {item.product.name}
                </Text>
                <Text numberOfLines={3} style={styles.itemDescription}>
                  {item.product.description}
                </Text>
                <View style={styles.itemFooter}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{item.product.price} $</Text>
                  </View>
                  {itemsCart.some(
                    (basketItem) => basketItem.product.id === item.product.id
                  ) ? (
                    <Counter
                      quantity={
                        itemsCart.find(
                          (basketItem) => basketItem.product.id === item.product.id
                        )?.quantity
                      }
                      onIncrement={() => dispatch(addProductToCart(item.product))}
                      onDecrement={() =>
                        dispatch(decreaseProductQuantityTint(item.product.id))
                      }
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => dispatch(addProductToCart(item.product))}
                      style={styles.addButton}
                    >
                      <Text style={styles.addButtonText}>купить</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={() => dispatch(removeProductFromCart(item.product.id))} activeOpacity={0.8}>
                    <IconComponent icon={'remove'} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        {itemsCart.length !== 0 && (
          <Text
            style={{
              paddingHorizontal: 16,
              color: Colors.black,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            {totalCount} $
          </Text>
        )}
        <View
          style={{
            alignSelf: 'center',
            paddingHorizontal: 50,
            width: '100%',
            marginBottom: 30,
            paddingTop: 12,
            backgroundColor: Colors.white,
            zIndex: 999,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (itemsCart.length === 0) {
                Navigation.navigate(Screens.MAIN_APP);
              } else {
                Navigation.navigate(Screens.BASKET_SUCCESS);
              }
            }}
            activeOpacity={0.8}
            style={{
              borderRadius: 20,
              backgroundColor: Colors.yellowButton,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{ color: Colors.black, fontSize: 20, fontWeight: '600' }}
            >
              {itemsCart.length === 0 ? 'НА ГЛАВНУЮ' : 'ЗАКАЗАТЬ'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingTop: 20,
    flexGrow: 1,
    paddingHorizontal: 36,
  },
  itemContainer: {
    width: '100%',
    borderColor: Colors.yellowButton,
    marginBottom: 16,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  itemDetailsContainer: {
    width: '100%',
    flex: 1,
    padding: 6,
  },
  itemTitle: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  itemDescription: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    flex: 1,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  priceContainer: {
    padding: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: Colors.yellowButton,
  },
  priceText: {
    fontSize: 12,
    fontWeight: '900',
  },
  addButton: {
    backgroundColor: Colors.yellowButton,
    borderRadius: 8,
    width: '70%',
    padding: 6,
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    color: Colors.white,
  },
});
export default KarzinaScreen;
