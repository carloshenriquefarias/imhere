import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';

interface Props {
    name: string;
}

export function Participant({name}: Props) {  
    
    function handleParticipantAdd(){

    }

  return (
    <View style={styles.container}>
        <Text style={styles.name}>
            {name}
        </Text>

        {/* //Botão */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                -
            </Text>
        </TouchableOpacity>
    </View>
  )
}