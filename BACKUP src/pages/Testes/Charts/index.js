import React from 'react'
import { StackedBarChart  } from 'react-native-svg-charts'
import {View} from 'react-native'

export default function Charts() {
    const data = [
        {           
            hp: 280,
            max: 20,            
        },
       
    ]

    const colors = ['red', '#fff']
    const keys = ['hp', 'max']
        return (
<View style={{backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            
            <StackedBarChart
            style={{ height: 25, width: 300, borderRadius: 30 }}
            horizontal={true}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={{  }}
        />

<StackedBarChart
            style={{ height: 25, width: 300}}
            horizontal={true}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={true}
          // contentInset={{ top: 10, bottom: 10 }}
        />
        
        </View>
        )  
}

/*


import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import styleTypes from './styleTypes';

import Animated, {
  useSharedValue, // //1º Seta o valor inicial da animação
  useAnimatedStyle, //2º Cria um estilo a partir do valor do SharedValue
  withTiming, // seta o tempo de duração do efeito
  Easing, // Efeito (bouce, linear etc)
  interpolate, // calcula quanto colocar de opacidade em cada percurso
  Extrapolate, // calcula o MAX de opacidade do interpolate
  withDelay, // seta um tempo para a nimação iniciar
  withSequence, // seta uma sequencia de animações para o mesmo componente
} from 'react-native-reanimated';

export default function PokeDetaisTest({route, navigation}) {
  const [image, setImage] = useState(route.params?.image);
  const [name, setName] = useState(route.params?.name);
  const [abilities, setAbilities] = useState(route.params?.abilities);
  const [type, setType] = useState(route.params?.type);
  const [type2, setType2] = useState(route.params?.type2);
  const [weight, setWeight] = useState(route.params?.weight);
  const [height, setHeight] = useState(route.params?.height);

  const [hp, setHp] = useState(route.params?.hp);
  const [attack, setAttack] = useState(route.params?.attack);
  const [defense, setDefense] = useState(route.params?.defense);
  const [specialAttack, setSpecialAttack] = useState(
    route.params?.specialAttack,
  );
  const [specialDefense, setSpecialDefense] = useState(
    route.params?.specialDefense,
  );
  const [speed, setSpeed] = useState(route.params?.speed);

  //ANIMATIONS

  const titlePosition = useSharedValue(35);
  const imagePosition = useSharedValue(-100);
  const viewPosition = useSharedValue(-50);

  useEffect(() => {
    imagePosition.value = withTiming(0, {
      duration: 1000,
      easing: Easing.bounce,
    });

    titlePosition.value = withDelay(
      0,
      withSequence(
        withTiming(0, {
          duration: 1500,
          //easing: Easing.bounce
        }),
        //  withTiming(-280, {
        //    duration: 1500,
        //    //easing: Easing.bounce
        //  })
      ),
    );

    viewPosition.value = withTiming(0, {
      duration: 1000,
      easing: Easing.bounce,
    });
  }, []);

  const viewStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: viewPosition.value}],
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      // opacity: titleOpacity.value,  //Seria esse, caso nao tivesse o Interpolate
      opacity: interpolate(
        titlePosition.value,
        [30, 0], //Quando a position for 30 a opacidade é 0, quando for 0 a opacidade é 1
        [0, 1],
        Extrapolate.CLAMP, //CLAMP diz que ele para nos valores 0 e 1 da opacidade
      ),
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePosition.value}],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e9c46a" />

      <LinearGradient
        colors={['#e9c46a', '#e9c46a', '#e76f51']}
        // colors={['#9c89b8', '#9c89b8', '#fff']}
        style={styles.header}>
        <View style={styles.TextGoBack}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              Pokedex
            </Text>
          </TouchableOpacity>
        </View>

        <Animated.Image
          style={[styles.image, imageStyle]}
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${image
              .replace('https://pokeapi.co/api/v2/pokemon-form/', '')
              .replace('/', '')}.png`,
          }}
        />
      </LinearGradient>

      <View style={styles.viewNome}>
        <Animated.Text style={[styles.pokeName]}>{name}</Animated.Text>
      </View>

      <View style={styles.viewType}>
        <View style={styleTypes[type]}>
          <Text style={styles.textType}>{type}</Text>
        </View>

        {type2 && (
          <View style={styleTypes[type2]}>
            <Text style={styles.textType}>{type2}</Text>
          </View>
        )}
      </View>

      <View style={styles.viewType}>
        <Text style={styles.textDetails}>{weight / 10} Kg</Text>
        <Text style={styles.textDetails}>{height / 10} M</Text>
      </View>

      <Text style={styles.titleBaseStats}>Base Stats</Text>

      <View style={styles.baseStats}>
        <View style={styles.viewBaseStats}>
          <Text style={styles.textBaseStats}>HP: </Text>
          <View style={styles.base}>
            <Text style={styles.textStats}>{hp}/300</Text>
          </View>
        </View>

        <View style={styles.viewBaseStats}>
          <Text style={styles.textBaseStats}>ATK: </Text>
          <View style={styles.base}>
            <Text style={styles.textStats}>{attack}/300</Text>
          </View>
        </View>

        <View style={styles.viewBaseStats}>
          <Text style={styles.textBaseStats}>DEF: </Text>
          <View style={styles.base}>
            <Text style={styles.textStats}>{defense}/300</Text>
          </View>
        </View>

        <View style={styles.viewBaseStats}>
          <Text style={styles.textBaseStats}>SPD: </Text>
          <View style={styles.base}>
            <Text style={styles.textStats}>{speed}/300</Text>
          </View>
        </View>
      </View>
    </View>
  );
}




*/
/*

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
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'center',
  },
  viewBaseStats: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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


*/