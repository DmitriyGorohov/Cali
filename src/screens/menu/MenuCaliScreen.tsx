import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header.tsx';
import Colors from '../../styles/Colors.ts';
import {
  addProductToCart,
  decreaseProductQuantityTint,
  shopMyBookSelector,
  visibleBurgers,
} from '../../store/shop/shopTintSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/Counter.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  coldItems,
  desserts,
  soupItems,
  dishItems,
  Product,
} from '../../utils/commonLists.ts';

const MenuCaliScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { items: burgersItems, itemsCart } = useSelector(shopMyBookSelector);
  const [selectedOption, setSelectedOption] = useState('1');

  useEffect(() => {
    const getProducts = (): Product[] => {
      switch (selectedOption) {
        case '1':
          return coldItems;
        case '2':
          return soupItems;
        case '3':
          return dishItems;
        case '4':
          return desserts;
        default:
          return [];
      }
    };

    // Отображаемые данные
    const products = getProducts();

    dispatch(visibleBurgers(products));
  }, [selectedOption, dispatch]);

  return (
    <SafeAreaView
      edges={['top']}
      style={{ flex: 1, backgroundColor: Colors.black }}
    >
      <View style={{ backgroundColor: Colors.white, flex: 1 }}>
        <Header />
        <View style={styles.containerPadding}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => setSelectedOption('1')}
              activeOpacity={0.8}
              style={
                selectedOption === '1'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text style={[styles.buttonText, { color: selectedOption === '1' ? Colors.white : Colors.black }]}>Холодные закуски</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedOption('2')}
              activeOpacity={0.8}
              style={
                selectedOption === '2'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text style={[styles.buttonText, { color: selectedOption === '2' ? Colors.white : Colors.black }]}>Супы</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => setSelectedOption('3')}
              activeOpacity={0.8}
              style={
                selectedOption === '3'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text style={[styles.buttonText, { color: selectedOption === '3' ? Colors.white : Colors.black }]}>Основные блюда</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedOption('4')}
              activeOpacity={0.8}
              style={
                selectedOption === '4'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text style={[styles.buttonText, { color: selectedOption === '4' ? Colors.white : Colors.black }]}>Десерты</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={burgersItems}
          key={2}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.itemImage}
              />
              <View style={styles.itemDetailsContainer}>
                <Text numberOfLines={1} style={styles.itemTitle}>
                  {item.name}
                </Text>
                <Text numberOfLines={1} style={styles.itemDescription}>
                  {item.description}
                </Text>
                <View style={styles.itemFooter}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{item.price} $</Text>
                  </View>
                  {itemsCart.some(
                    (basketItem) => basketItem.product.id === item.id
                  ) ? (
                    <Counter
                      quantity={
                        itemsCart.find(
                          (basketItem) => basketItem.product.id === item.id
                        )?.quantity
                      }
                      onIncrement={() => dispatch(addProductToCart(item))}
                      onDecrement={() =>
                        dispatch(decreaseProductQuantityTint(item.id))
                      }
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => dispatch(addProductToCart(item))}
                      style={styles.addButton}
                    >
                      <Text style={styles.addButtonText}>купить</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 16,
  },
  menuTitle: {
    color: Colors.black,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '800',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  selectedButton: {
    backgroundColor: Colors.black,
    paddingVertical: 10,
    borderRadius: 20,
    width: '48%',
  },
  unselectedButton: {
    borderWidth: 1,
    borderColor: Colors.black,
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderRadius: 20,
    width: '48%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  itemContainer: {
    width: '50%',
    flex: 0.5,
    marginBottom: 16,
    marginRight: 10,
  },
  itemImage: {
    borderRadius: 10,
    width: '100%',
    height: 100,
  },
  itemDetailsContainer: {
    width: '100%',
    flex: 1,
    padding: 6,
  },
  itemTitle: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 6,
  },
  itemDescription: {
    color: 'gray',
    fontSize: 8,
    marginBottom: 4,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  priceContainer: {
    padding: 6,
    paddingHorizontal: 8,
    backgroundColor: Colors.yellowButton,
    borderRadius: 20,
  },
  priceText: {
    fontSize: 12,
    fontWeight: '900',
  },
  addButton: {
    backgroundColor: Colors.yellowButton,
    borderRadius: 20,
    width: '50%',
    padding: 6,
  },
  addButtonText: {
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});
export default MenuCaliScreen;
