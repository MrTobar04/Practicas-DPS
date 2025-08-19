import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Cita = ({ item, eliminarReserva }) => {
    const dialogoEliminar = id => {
        eliminarReserva(id);
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Cliente: </Text>
                <Text style={styles.texto}>{item.nombre}</Text>
            </View>
            <View>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.texto}>{item.fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora: </Text>
                <Text style={styles.texto}>{item.hora}</Text>
            </View>
            <View>
                <Text style={styles.label}>Personas: </Text>
                <Text style={styles.texto}>{item.personas}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sección: </Text>
                <Text style={styles.texto}>{item.seccion}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    },
    texto: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Cita;
