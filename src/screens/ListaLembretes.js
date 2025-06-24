import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Lembrete from '../components/Lembrete';


const DBLembretes = [
    {
        id: Math.random(),
        nome: 'Remédio',
        desc: 'Ir na farmácia comprar remédio',
    },
    {
        id: Math.random(),
        nome: 'Mercado',
        desc: 'Arroz, Feijão, Vinagre, Cebola',
    },
    {
        id: Math.random(),
        nome: 'Notas',
        desc: 'Matemática 10, Português 3, Geografia 8',
    },
];

export default function ListaLembretes() {
    const [lembretes, setLembretes] = useState(DBLembretes);

    const excluirLembrete = (id) => {
        setLembretes(lembretes.filter((item) => item.id !== id));
    };

    const renderItem = ({ item }) => (
        <Lembrete item={item} onDelete={excluirLembrete} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Meus Lembretes</Text>
            <FlatList
                data={lembretes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    lista: {
        paddingHorizontal: 16,
    },
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
        marginTop: 10,
        backgroundColor: '#f55',
        padding: 8,
        borderRadius: 6,
        alignItems: 'center',
    },
    textoExcluir: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
