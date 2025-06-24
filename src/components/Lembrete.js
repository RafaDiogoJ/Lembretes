import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function Lembrete({ item, onDelete }) {
    const renderRightActions = () => (
        <TouchableOpacity style={styles.botaoExcluir} onPress={() => onDelete(item.id)}>
            <Text style={styles.textoExcluir}>Excluir</Text>
        </TouchableOpacity>
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.card}>
                <Text style={styles.titulo}>{item.nome}</Text>
                <Text style={styles.descricao}>{item.desc}</Text>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        elevation: 3,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    descricao: {
        fontSize: 14,
        color: '#555',
    },
    botaoExcluir: {
        backgroundColor: '#f55',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        borderRadius: 8,
        marginVertical: 4,
    },
    textoExcluir: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
