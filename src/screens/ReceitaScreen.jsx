import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function ItemScreen({ navigation, route }) {
  const receita = route.params.item;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Text style={styles.title}>{receita.nome}</Text>
          <Text>Tempo de preparo: {receita.tempoPreparo}</Text>
          <Text>Porções: {receita.porcoes}</Text>

          <Text style={styles.subtitle}>Ingredientes:</Text>
          {receita.ingredientes.map((item, index) => (
            <Text key={index}>• {item}</Text>
          ))}

          <Text style={styles.subtitle}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </Card.Content>

        <Card.Actions>
          <Button
            mode='contained-tonal'
            icon='arrow-left'
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  subtitle: {
    marginTop: 12,
    fontWeight: 'bold',
  },
});
