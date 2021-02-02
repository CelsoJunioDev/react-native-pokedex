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
          <View style={{flexDirection: 'row'}}>
          <View style={{
            backgroundColor: '#457b9d',
            borderRadius: 30,
            width: hp,
            zIndex: 1

          }}>
            <Text style={styles.textStats}>{hp}</Text>
          </View>
          <View style={{
            backgroundColor: '#fff',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderRadius: 0,
            width: 200 - hp,
            marginLeft: -13

          }}>
           <Text></Text>
          </View>
          </View>
          
            
          </View>
         
          <View style={styles.viewBaseStats}>
          <Text style={styles.textBaseStats}>ATK: </Text>
          <View style={{flexDirection: 'row'}}>
          <View style={{
            backgroundColor: '#457b9d',
            borderRadius: 30,
            width: attack,
            zIndex: 1

          }}>
            <Text style={styles.textStats}>{attack}</Text>
          </View>
          <View style={{
            backgroundColor: '#fff',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderRadius: 0,
            width: 200 - attack,
            marginLeft: -13

          }}>
           <Text></Text>
          </View>
          </View>
          </View>

        {/* <View style={styles.viewBaseStats}>
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
          <View style={styles.base}>
            <Text style={styles.textStats}>{defense}/300</Text>
          </View>
        </View>

        <View style={styles.viewBaseStats}>
          <Text style={styles.textBaseStats}>SPD: </Text>
          <View style={styles.base}>
            <Text style={styles.textStats}>{speed}/300</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
