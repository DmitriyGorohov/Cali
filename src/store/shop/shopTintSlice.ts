import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import {Product} from '../../utils/commonLists.ts';

export const shopMyBookSelector = (state: RootState): ShopState => state.shop;

export interface ShopState {
    totalCount: number;
    itemsCart: { product: Product; quantity: number }[];
    items: Product[];
}

const initialState: ShopState = {
    totalCount: 0,
    itemsCart: [],
    items: [],
};

const shopTintSlice = createSlice({
    name: 'shopMyBook',
    initialState,
    reducers: {
        resetProductToCart: (state) => {
            state.itemsCart = [];
            state.totalCount = 0;
        },
        addProductToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.itemsCart.find(
                (item) => item.product.id === action.payload.id
            );

            if (existingProduct) {
                // Если продукт уже в корзине, увеличиваем количество
                existingProduct.quantity += 1;
            } else {
                // Если продукта нет в корзине, добавляем его
                state.itemsCart.push({ product: action.payload, quantity: 1 });
            }

            // Пересчитываем общую сумму
            state.totalCount += action.payload.price;
        },
        decreaseProductQuantityTint: (state, action: PayloadAction<number>) => {
            const product = state.itemsCart.find(
                (item) => item.product.id === action.payload
            );

            if (product) {
                product.quantity -= 1;
                state.totalCount -= product.product.price;

                // Если количество продукта достигает 0, удаляем его
                if (product.quantity <= 0) {
                    state.itemsCart = state.itemsCart.filter(
                        (item) => item.product.id !== action.payload
                    );
                }
            }
        },
        visibleBurgers: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
        },
        removeProductFromCart: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            const productIndex = state.itemsCart.findIndex(
              (item) => item.product.id === productId
            );

            if (productIndex !== -1) {
                // Уменьшаем общую сумму на стоимость удаляемого продукта
                state.totalCount -=
                  state.itemsCart[productIndex].product.price *
                  state.itemsCart[productIndex].quantity;

                // Удаляем продукт из корзины
                state.itemsCart.splice(productIndex, 1);
            }
        },
    },
});

export const shopSliceReducer = shopTintSlice.reducer;
export const {
    addProductToCart,
    resetProductToCart,
    decreaseProductQuantityTint,
    visibleBurgers,
    removeProductFromCart
} = shopTintSlice.actions;
