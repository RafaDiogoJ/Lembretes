import {Text, View} from "react-native";

const taskDB = [
    {
        id: Math.random(),
        nome: 'Remedio',
        desc: 'Ir na farmacia comprar remedio',
    },
    {
        id: Math.random(),
        nome: 'Mercado',
        desc: 'Arroz, Feijao, Vinagre, Cebola',
    },
    {
        id: Math.random(),
        nome: 'Notas',
        desc: 'Matematica 10, Portugueis 3, Geografia 8',
    },
]


export default function ListaLembretes(){

    const addLembrete = novoLembrete => {
        if (!novoLembrete.nome || !novoLembrete.nome.trim()) {
            Alert.alert('Dados Inválidos', 'Nome não informado!')
            return
        }

        const tempLembretes = [...lembretes]

        const lembreteAdd = {
            id: getLastTaskId(),
            nome: novoLembrete.nome,
            desc: novoLembrete.desc,
        }

        tempLembretes.push(lembreteAdd)

        setTasks(tempTasks)
        setShowAddTask(false)
    }

    return(
        <View>
            <Text>Lembretes</Text>
        </View>
    )
}