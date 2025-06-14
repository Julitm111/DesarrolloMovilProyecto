import React, { useState } from 'react';
import { View, Image, ScrollView, Text, StyleSheet } from 'react-native';
import { Card, TextInput, RadioButton, Button } from 'react-native-paper';
import { Rating } from 'react-native-ratings'; // Ajusta si usas una versión diferente de react-native-ratings

const ArticleDetailsCard = ({ route }) => {
  const { article } = route.params;
  const [checked, setChecked] = useState('first');

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Card style={styles.card} >
        <Card.Content>
          <Text style={styles.headline}>Detalles de Artículo</Text>
          <Text style={styles.title}>Item: {article.name}</Text>
          <Image source={{ uri: article.photo }} style={styles.mediumImage} />
          <Text style={styles.body}>Descripción: {article.description}</Text>
          <Text style={styles.body}>Valor: ${article.price.toLocaleString()}</Text>
          <Text style={styles.body}>Características: {article.characteritics}</Text>

          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>Forma de Pago</Text>
              {['Tarjeta de Crédito', 'PSE', 'Efecty'].map((method, index) => (
                <View style={styles.radioItem} key={index}>
                  <RadioButton
                    value={method}
                    status={checked === method ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(method)}
                  />
                  <Text>{method}</Text>
                </View>
              ))}
            </Card.Content>
          </Card>

          <Text style={styles.title}>Preguntas</Text>
          <TextInput 
            style={styles.textInput} placeholder="Haz una pregunta al vendedor" maxLength={100}  />
          <Button buttonColor='#89c07a' mode="contained">Enviar pregunta</Button>

          <Text style={styles.title}>Comentarios</Text>
          <TextInput style={styles.textInput} placeholder="Escribe un comentario" maxLength={200}  />

          <Text style={styles.title}>Calificación</Text>
          <Rating
            rating={0}
            onFinishRating={(rating) => console.log(rating)}
            showRating
            fractions={1}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    textInput: {
        width: 320,
        marginBottom: 16,
        backgroundColor: '#e1f1dd'
    },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    marginVertical: 8,
    width: '100%',
    backgroundColor:'#78a98c',
  },
  mediumImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 16,
  },
  cardContent: {
    marginVertical: 16,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginVertical: 8,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
});

export default ArticleDetailsCard;

