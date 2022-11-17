import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';

interface Props {
    name: string;
    onRemove: () => void; //Tipando uma função
}

export function Participant({name, onRemove}: Props) {  
    
    function handleParticipantAdd(){

    }

  return (
    <View style={styles.container}>
        <Text style={styles.name}>
            {name}
        </Text>

        {/* //Botão */}
        <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Text style={styles.buttonText}>
                -
            </Text>
        </TouchableOpacity>
    </View>
  )
}