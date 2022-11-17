import {Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import {styles} from './styles';
import {Participant} from '../../components/Participant'
import React, {useState} from 'react';

export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    // const participants = ['Rike']    

    function handleParticipantAdd(){

        //Verificando se existe um participante na lista
        if(participants.includes(participantName)){
            return Alert.alert("Participante já existe", "Participante já existe com este nome");
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');

    }

    function handleParticipantRemove(name: string){

        //Estrutura: TÍTULO / ALERTA DA MENSAGEM / BOTOES
        return Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(
                    prevState => prevState.filter (participant => participant !== name) //Removendo um participante
                )
            },
            {
                text: 'Não',
                style: 'cancel'
                // onPress: () => Alert.alert("Deletado")
            },
        ])
    }

  return (

    <View style={styles.container}>

        <Text style={styles.eventName}>
            Nome do Evento
        </Text>

        <Text style={styles.eventDate}>
            Sexta, 19 de novembro de 2022
        </Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Digite o nome do participante"
                placeholderTextColor='#6B6B6B'
                onChangeText={setParticipantName} //Valor que e colocado no input
                value={participantName}
                // keyboardType='numeric'
            />

            {/* //Botão */}
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                    key={item}
                    name={item}  
                    onRemove={ () =>handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            
            //Se a lista estiver vazia, moste isso:
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguem chegou no evento ainda? Add participantes a sua lista!
                </Text>
            )}
        />

        {/* //Barra de rolagem do celular */}
        {/* <ScrollView showsVerticalScrollIndicator={false}>  */}
        
            {/* {participants.map(participant =>(
                    <Participant 
                        key={participant}
                        name={participant}  
                        onRemove={ () =>handleParticipantRemove("Carlos Henrique")}
                    />
                ))
            } */}
        {/* </ScrollView> */}
        

       
             
    </View>
  );
}