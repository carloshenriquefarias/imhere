import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {Participant} from '../../components/Participant'

export function Home() {

    function handleParticipantAdd(){

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
                placeholder="Digite seu CPF"
                placeholderTextColor='#6B6B6B'
                // keyboardType='numeric'
            />

            {/* //Botão */}
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <Participant name="Carlos Henrique"/>
        <Participant name="Prisco"/>
        <Participant name="James"/>
        <Participant name="Nems"/>
       

        
      
    </View>
  );
}