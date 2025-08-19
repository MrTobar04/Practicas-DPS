import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from "react-id-generator";
import colors from '../src/utils/colors';

const Formulario = ({ reservas, setReservas, guardarMostrarForm, guardarReservasStorage }) => {
    const [nombre, guardarNombre] = useState('');
    const [personas, guardarPersonas] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [seccion, guardarSeccion] = useState('No fumadores'); // Valor por defecto
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);
    const confirmarFecha = date => {
        const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    const showTimePicker = () => setTimePickerVisibility(true);
    const hideTimePicker = () => setTimePickerVisibility(false);
    const confirmarHora = hora => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
        guardarHora(hora.toLocaleString('es-ES', opciones));
        hideTimePicker();
    };

    const crearNuevaReserva = () => {
        if (nombre.trim() === '' || fecha.trim() === '' || hora.trim() === '' || personas.trim() === '' || seccion.trim() === '') {
            mostrarAlerta();
            return;
        }

        const reserva = { nombre, personas, fecha, hora, seccion };
        reserva.id = shortid();

        const reservasNuevas = [...reservas, reserva];
        setReservas(reservasNuevas);
        guardarReservasStorage(JSON.stringify(reservasNuevas));
        guardarMostrarForm(false);

        // reset
        guardarNombre('');
        guardarPersonas('');
        guardarFecha('');
        guardarHora('');
        guardarSeccion('No fumadores');
    }

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK' }])
    }

    return (
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Nombre Cliente:</Text>
                <TextInput style={styles.input} onChangeText={texto => guardarNombre(texto)} value={nombre}/>
            </View>

            <View>
                <Text style={styles.label}>Cantidad de Personas:</Text>
                <TextInput style={styles.input} onChangeText={texto => guardarPersonas(texto)} keyboardType='numeric' value={personas}/>
            </View>

            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                />
                <Text>{fecha}</Text>
            </View>

            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                />
                <Text>{hora}</Text>
            </View>

            <View>
                <Text style={styles.label}>Sección:</Text>
                <View style={styles.secciones}>
                    <Button title="No fumadores" color={seccion === 'No fumadores' ? 'green' : 'gray'} onPress={() => guardarSeccion('No fumadores')} />
                    <Button title="Fumadores" color={seccion === 'Fumadores' ? 'green' : 'gray'} onPress={() => guardarSeccion('Fumadores')} />
                </View>
                <Text>Seleccionado: {seccion}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={crearNuevaReserva} style={styles.btnSubmit}>
                    <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 10
    },
    secciones: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: colors.BUTTON_COLOR,
        marginVertical: 10
    },
    textoSubmit: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Formulario;
