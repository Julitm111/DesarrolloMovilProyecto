import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';

const ArticlesCard = ({ article }) => {

  const navigation = useNavigation();

  const handleSelect = () => {
    navigation.navigate('ArticleDetailsCard', { article });
  };

  const maxPrice = 99999999;
  const price = article.price > maxPrice ? maxPrice : article.price;
  const formattedPrice = price.toLocaleString();


  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Image source={{ uri: article.photo }} style={styles.photosHome} />
          <Text variant="bodySmall" style={styles.priceText}>${formattedPrice}</Text>
          <Text variant="bodySmall" >{article.description}</Text>
          <Button
            style={styles.buttonHome}
            labelStyle={styles.buttonTextHome}
            buttonColor='#96b89c'
            mode="contained"
            onPress={handleSelect}>
            Elegir
          </Button>
        </Card.Content>
      </Card>
    </View>

  );
};


export default ArticlesCard;