import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../credenciales';

export default function Home({ navigation }) {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.replace('Login'); 
        } catch (error) {
            Alert.alert('Error al cerrar sesión', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Has iniciado sesión correctamente.</Text>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#DAA520',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#50C878',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#DAA520',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
