import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const Scrollview = () => {
    const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
    return (
        <>
            <ScrollView>
                <Modal transparent={true} animationType='slide' visible={modalVisibleplaya} onRequestClose={() => {
                    alert('Modal has been closed.');
                }} >
                    <View style={styles.vistaModal}>
                        <View style={styles.Modal}>
                            <Text style={styles.subtitulo}>Ir a la playa</Text>
                            <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
                            <Button title="Cerrar" onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }}></Button>
                        </View>
                    </View>
                </Modal>


                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.banner} source={(require('./src/img/bg.jpg'))} />
                </View>

                <View style={styles.contenedor}>
                    <Text style={styles.titulo}>Que hacer en El Salvador</Text>
                    <ScrollView horizontal>
                        <View>
                            <TouchableHighlight onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }}>
                                <Image
                                    style={styles.ciudad}
                                    source={(require('./src/img/playa.jpg'))}
                                />
                            <Image
                                style={styles.ciudad}
                                source={(require('./src/img/actividad1.jpg'))}
                            />
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={(require('./src/img/actividad2.jpg'))}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={(require('./src/img/actividad3.jpg'))}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={(require('./src/img/actividad4.jpg'))}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={(require('./src/img/actividad5.jpg'))}
                            />
                        </View>
                    </ScrollView>
                

                <Text style={styles.titulo}>Platillos Salvadoreños</Text>
                <View>
                    <View>
                        <Image
                            style={styles.mejores}
                            source={(require('./src/img/mejores1.jpg'))}
                        />
                    </View>

                    <View>
                        <Image
                            style={styles.mejores}
                            source={(require('./src/img/mejores2.jpg'))}
                        />
                    </View>

                    <View>
                        <Image
                            style={styles.mejores}
                            source={(require('./src/img/mejores3.jpg'))}
                        />
                    </View>
                </View>


                <Text style={styles.titulo}>Rutas Turisticas</Text>
                <View style={styles.listado}>
                    <View style={styles.listItem}>
                        <Image
                            style={styles.mejores}
                            source={require('./src/img/ruta1.jpg')} />
                    </View>

                    <View style={styles.listItem}>
                        <Image
                            style={styles.mejores}
                            source={require('./src/img/ruta2.jpg')} />
                    </View>

                    <View style={styles.listItem}>
                        <Image
                            style={styles.mejores}
                            source={require('./src/img/ruta3.jpg')} />
                    </View>

                    <View style={styles.listItem}>
                        <Image
                            style={styles.mejores}
                            source={require('./src/img/ruta4.jpg')} />
                    </View>
                </View>
                
            </View>
            </ScrollView>

        </>

);
};

export default Scrollview;
