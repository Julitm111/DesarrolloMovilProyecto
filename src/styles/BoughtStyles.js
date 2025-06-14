
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    elevation: 5,
    width: 370,
    height: 220,
    backgroundColor: '#78a98c',
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },


  buttonCard: {
    Width: 50,
    maxHeight: 50,
    marginTop: -15,
    flexDirection: 'row',
    marginLeft: 110
  },
  buttonSave: {
    Width: 50,
    maxHeight: 50,
    marginTop: -15,
    flexDirection: 'row',
  },
  buttonState: {
    flexDirection: 'row',
    Width: 100,
    maxHeight: 50,
    marginTop: -20,
    marginLeft: 150
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    width: 100,
    height: '100%',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 30,
    marginTop: 10
  },
  textContainer: {
    marginBottom: 30,
    marginTop: 10,
    marginRight: 10,
    width: 200,
    height: 100,


  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  originalPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through', // Línea atravesando el precio original
  },
  finalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#FF6347', // Fondo de color para resaltar el descuento
    padding: 5,
    borderRadius: 5,
    marginTop: -8,
  },
});

export default styles;