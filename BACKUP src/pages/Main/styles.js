import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',    
      flex: 1,
      backgroundColor: '#13131a',

  },    
  text: {
    fontSize: 22,
    alignSelf:'center'
  },
  header: {
    backgroundColor: '#d90429',
      height: 30,
      width: '100%',
      justifyContent: 'center',
      paddingLeft: 5,
    },
  
    title: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15
    },
  
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 16,
      color: '#FFF',
    },
  
    listItem: {
      padding: 20,
      fontSize: 18,
    },
    input:{
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,0.2)',
      height: 60,
      width: '95%',
      borderRadius: 30,
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 10,
      marginBottom: 30,
  },
  textInput: {
      fontSize: 16,
      color: '#fff',
      flex: 1
  },
    image: {
      alignSelf: 'center',
      width: 100, 
      height: 100,
    },
    textBusca: {
      fontSize: 12,
      color: '#000',
      backgroundColor: '#ade8f4',
      padding: 10,
      borderRadius: 500
    },
    card: {
       marginTop: 50, 
      flexDirection: 'row',
      backgroundColor: 'rgba(25,57,99,0.2)',
      width: '75%',
      height: 150,
      borderRadius: 15,
      justifyContent: 'space-around',
      alignSelf: 'center'
    },
    cardLeft: {
      display: 'flex',
      width: '50%',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center'
      
    },
    cardRight: {
      display: 'flex',
      width: '50%',
      borderRadius: 7,
      alignContent: 'center',
      justifyContent: 'center'
      
    },
    textCardRight :{
      color: '#000',
      fontSize: 10,
      textTransform: 'uppercase'
      
    },
    textCardName: {
      color: '#000',
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    textCardLefValue: {
      color: '#000',
      fontSize: 20,
    },
    cardPoke: {
        marginHorizontal: 7,
        width: '46%',
        height: '90%',
        padding: 10,
        alignItems: 'center',
        alignContent: 'center',
        //flex: 1,
        backgroundColor: '#48cae4',
        margin: 5,
        borderRadius: 15
  
    },    
  });
  
  export default styles;