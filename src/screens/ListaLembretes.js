import React, { useState } from 'react';
import {  Text,  View,  FlatList,  StyleSheet,  TouchableOpacity,  Modal,  TextInput,} from 'react-native';
import Lembrete from '../components/Lembrete';
import moment from 'moment-timezone';


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
  const [modalVisible, setModalVisible] = useState(false);
  const [novoNome, setNovoNome] = useState('');
  const [novaDesc, setNovaDesc] = useState('');

  const excluirLembrete = (id) => {
    setLembretes(lembretes.filter((item) => item.id !== id));
  };

  const adicionarLembrete = () => {
    if (!novoNome.trim()) return;

    const novo = {
        id: Math.random(),
        nome: novoNome,
        desc: novaDesc,
        data: moment().tz('America/Sao_Paulo').format(), // salva no formato ISO com fuso BR
      };

    setLembretes([...lembretes, novo]);
    setNovoNome('');
    setNovaDesc('');
    setModalVisible(false);
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


      <TouchableOpacity
        style={styles.botaoFlutuante}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.iconeBotao}>＋</Text>
      </TouchableOpacity>


      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Título"
              style={styles.input}
              value={novoNome}
              onChangeText={setNovoNome}
            />
            <TextInput
              placeholder="Descrição"
              style={styles.input}
              value={novaDesc}
              onChangeText={setNovaDesc}
            />
            <TouchableOpacity style={styles.botaoSalvar} onPress={adicionarLembrete}>
              <Text style={styles.botaoTexto}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ textAlign: 'center', marginTop: 10 }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
      paddingBottom: 100,
    },
    botaoFlutuante: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      backgroundColor: '#1e90ff',
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    iconeBotao: {
      fontSize: 28,
      color: '#fff',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 20,
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#aaa',
      marginBottom: 12,
      paddingVertical: 6,
    },
    botaoSalvar: {
      backgroundColor: '#1e90ff',
      padding: 10,
      borderRadius: 6,
      alignItems: 'center',
    },
    botaoTexto: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  