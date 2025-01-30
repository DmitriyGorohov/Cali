import { ImageRequireSource } from 'react-native';

export interface Product {
  id: number; // Уникальный идентификатор
  name: string; // Название продукта
  image: ImageRequireSource; // Описание продукта
  price: number; // Цена продукта
  category: string; // Категория
  description: string;
}

export const soupItems: Product[] = [
  {
    id: 1,
    name: 'Крем-суп из белых грибов',
    image: require('../assets/cali/soup-1/soup-1.png'),
    price: 15,
    category: 'Напитки',
    description: 'Эспрессо, американо, капучино, латте.',
  },
  {
    id: 2,
    name: 'Бульон с трюфельными пельменями',
    image: require('../assets/cali/soup-2/soup-2.png'),
    price: 10,
    category: 'Напитки',
    description:
      'Классический горячий шоколад, подаваемый с взбитыми сливками и шоколадной стружкой.',
  },
  {
    id: 3,
    name: 'Том Ям с морепродуктами',
    image: require('../assets/cali/soup-3/soup-3.png'),
    price: 10,
    category: 'Напитки',
    description: 'Свежевыжатые соки: апельсин, яблоко, грейпфрут.',
  },
  {
    id: 4,
    name: 'Консомме с фуа-гра ',
    image: require('../assets/cali/soup-4/soup-4.png'),
    price: 20,
    category: 'Напитки',
    description:
      'Японский зеленый чай матча с молоком и легким сладким сиропом.',
  },
];

export const dishItems: Product[] = [
  {
    id: 5,
    name: 'Стейк Рибай с трюфельным маслом ',
    description: 'Нежный бисквит с ягодами муссом и свежими ягодами.',
    price: 50,
    category: 'Фруктовые торты',
    image: require('../assets/cali/dish-1/dish-1.png'),
  },
  {
    id: 6,
    name: 'Ризотто с белыми трюфелями ',
    description: 'Лёгкий мусс с тропическими фруктами на бисквитной основе.',
    price: 40,
    category: 'Фруктовые торты',
    image: require('../assets/cali/dish-2/dish-2.png'),
  },
  {
    id: 7,
    name: 'Тушеный телячий ванг с картофельным пюре',
    description: 'Воздушный безе с абрикосами и свежими ягодами.',
    price: 35,
    category: 'Фруктовые торты',
    image: require('../assets/cali/dish-3/dish-3.png'),
  },
  {
    id: 8,
    name: 'Морской окунь в соленой корочке ',
    description: 'Лёгкое тесто с лимонным кремом и меренгой.',
    price: 45,
    category: 'Фруктовые торты',
    image: require('../assets/cali/dish-4/dish-4.png'),
  },
];

export const coldItems: Product[] = [
  {
    id: 9,
    name: 'Наполеон',
    description: 'Слоёный торт с нежным кремом и лёгкой кислинкой.',
    price: 20,
    category: 'Карпаччо из мраморной говядины',
    image: require('../assets/cali/cold-1/cold-1.png'),
  },
  {
    id: 10,
    name: 'Тартар из тунца ',
    description: 'Многослойный медовый торт с кремом.',
    price: 20,
    category: 'Классические торты',
    image: require('../assets/cali/cold-2/cold-2.png'),
  },
  {
    id: 11,
    name: 'Цезарь с лангустинами',
    description: 'Глубокий шоколадный вкус с орехами и сливками.',
    price: 55,
    category: 'Классические торты',
    image: require('../assets/cali/cold-3/cold-3.png'),
  },
  {
    id: 12,
    name: 'Фуа-гра на поджаренном бриоше',
    description: 'Итальянский десерт с маскарпоне.',
    price: 45,
    category: 'Классические торты',
    image: require('../assets/cali/cold-4/cold-4.png'),
  },
];

export const desserts: Product[] = [
  {
    id: 13,
    name: 'Шоколадный фондан с мороженым',
    description: 'Разнообразие вкусов от клубники до солёной карамели.',
    price: 10,
    category: 'Десерты и сладости',
    image: require('../assets/cali/desert-1/desert-1.png'),
  },
  {
    id: 14,
    name: 'Крем брюле с мадагаскарской ванилью',
    description: 'Традиционные эклеры с шоколадным кремом.',
    price: 15,
    category: 'Десерты и сладости',
    image: require('../assets/cali/desert-2/desert-2.png'),
  },
  {
    id: 15,
    name: 'Тирамису De Luxe',
    description: 'Мини-тортики с различными вкусами.',
    price: 20,
    category: 'Десерты и сладости',
    image: require('../assets/cali/desert-3/desert-3.png'),
  },
  {
    id: 16,
    name: 'Панна котта с малиновым соусом',
    description: 'Шоколадные трюфели с начинками.',
    price: 45,
    category: 'Десерты и сладости',
    image: require('../assets/cali/desert-4/desert-4.png'),
  },
];
