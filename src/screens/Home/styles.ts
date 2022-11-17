import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
      // flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    eventName:{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,               
    },
    input: {
        flex:1, //Empurra os elementos pro canto da tela
        backgroundColor: '#1F1E25',
        height: 56,
        fontSize: 16,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        marginRight: 12        
    },
    buttonText:{
        fontSize: 24,
        color: '#FFF',
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
   form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
        
    },
    listEmptyText:{
      color: '#FDFCFE',
      fontSize: 24,
      textAlign: 'center',      
    },
  });