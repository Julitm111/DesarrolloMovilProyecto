import React from 'react';
import { View, Text, Image, Button, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import BedroomCard from '../../components/BedroomCard';
import GardeningCard from '../../components/GardeningCard';
import PetsCard from '../../components/PetsCard';

const Pets = () => {
  const numColumns = 2;
  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={pets}
        renderItem={({ item }) => <PetsCard pet={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={numColumns}
      />
    </View>
  );
};

const pets = [
  {
    id: 1,
    photo: 'https://down-co.img.susercontent.com/file/45fe1c7645daf165e597efa384460d88',
    description: 'Saco para perros pequeños',
    price: 20000,
  },
  {
    id: 2,
    price: 40000,
    photo: 'https://www.juguetesparamismascotas.com/images/juguetes/perros/foto_primera/sandalias-de-verano-fresher-para-perros_pr.webp',
    description: 'Zapatitos para tu amigo perruno',
  },
  {
    id: 3,
    price: 15000,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_2X_649063-MCO73052321871_112023-T.webp',
    description: 'Juguete masticable para perro',
  },
  {
    id: 4,
    price: 30000,
    photo: 'https://megashoptv.vteximg.com.br/arquivos/ids/167696-900-900/Combo-4-Juguetes-Perros-Mascotas-Grandes-pelotas-dispensador-hueso1.jpg?v=638343830954530000',
    description: 'Set juguetes masticables perros',
  },
  {
    id: 5,
    price: 30000,
    photo: 'https://virtualmuebles.com/cdn/shop/products/71I6hgzNZeL._AC_SL1000.jpg?v=1723037443',
    description: 'Peleuches para tu mascota',
  },
  {
    id: 6,
    price: 40000,
    photo: 'https://virtualmuebles.com/cdn/shop/products/71m9Bgw-ZmL._AC_SL1500.jpg?v=1723034227',
    description: 'Juguete entretenido para gatos',
  },

];

export default Pets;
