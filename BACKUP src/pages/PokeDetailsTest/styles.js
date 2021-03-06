import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#13131b',
  },
  viewNome: {
    marginBottom: 15,
  },
  fire: {
    backgroundColor: '#e63946',
  },
  flying: {
    backgroundColor: '#e63946',
  },

  header: {
    marginTop: -50,
    marginBottom: 15,
    paddingTop: 30,
    height: 200,
    width: '100%',
    backgroundColor: '#e63946',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //position: 'absolute',
    borderRadius: 50,
  },
  TextGoBack: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingTop: 20,
  },
  pokeName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  viewType: {
    marginTop: 5,
    marginBottom: 20,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  type: {
    //backgroundColor: '#e63946',
    width: 80,
    borderRadius: 10,
  },
  textType: {
    color: '#fff',
    fontSize: 14,
    alignSelf: 'center',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 1,
  },
  textDetails: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
  },
  titleBaseStats: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  baseStats: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  viewBaseStats: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  textBaseStats: {
    color: '#fff',

    fontSize: 14,
    alignSelf: 'center',
  },
  base:{
    backgroundColor: '#457b9d',
    borderRadius: 30,
  },
  baseTotal:{
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  textStats: {
    color: '#fff',   
    fontSize: 14,
    alignSelf: 'center',
  },
  listItem: {
    padding: 20,
    fontSize: 18,
  },
  input: {
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
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginBottom: -30,
  },
  textBusca: {
    fontSize: 12,
    color: '#000',
    backgroundColor: '#ade8f4',
    padding: 10,
    borderRadius: 500,
  },
  card: {
    marginTop: 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(25,57,99,0.2)',
    width: '75%',
    height: 150,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  cardLeft: {
    display: 'flex',
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardRight: {
    display: 'flex',
    width: '50%',
    borderRadius: 7,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textCardRight: {
    color: '#000',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  textCardName: {
    color: '#000',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
    borderRadius: 15,
  },
});

export default styles;
