import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';
const App = () => {
  const [modalVisible1, setModalVisibleplaya] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal transparent={true} animationType='slide' visible={modalVisible1} onRequestClose={() => {
          alert('Modal has been closed.');
        }} >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Sistema Solar</Text>
              <Text>El sistema solar​ es el sistema planetario que liga gravitacionalmente a un conjunto de objetos astronómicos que giran directa o indirectamente en una órbita alrededor de una única estrella conocida con el nombre de Sol.</Text>
              <Button title="Cerrar" onPress={() => { setModalVisibleplaya(!modalVisible1) }}></Button>
            </View>
          </View>
        </Modal>


        <View style={styles.banner}>
          <TouchableHighlight style={{ flexDirection: 'row' }} onPress={() => { setModalVisibleplaya(!modalVisible1) }}>
            <Image style={styles.banner} source={(require('./src/img/sistemasolar.jpg'))} />
          </TouchableHighlight>
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Sol</Text>
          <View>
            
              <Image
                style={styles.ciudad}
                source={(require('./src/img/sol.jpg'))}
              />
          </View>



          <Text style={styles.titulo}>Planetas</Text>
          <View>

            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/mercurio.jpg'))}
              />
            </View>

            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/venus.jpg'))}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/tierra.jpg'))}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/marte.jpg'))}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/jupiter.jpg'))}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/saturno.jpg'))}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/urano.jpg'))}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={(require('./src/img/neptuno.jpg'))}
              />
            </View>
          </View>


        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    flex: 1,
    backgroundColor: '#000000aa'
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 'center'
  }
});

export default App;
