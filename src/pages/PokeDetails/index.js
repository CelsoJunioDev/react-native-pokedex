import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import styleTypes from './styleTypes';



export default function PokeDetais({route, navigation}) {
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
              Voltar
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${image
              .replace('https://pokeapi.co/api/v2/pokemon-form/', '')
              .replace('/', '')}.png`,
          }}
        />
      </LinearGradient>

      <View style={styles.viewNome}>
        <Text style={styles.pokeName}>{name}</Text>
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

        <View style={styles.viewBaseStats}>
          <Text style={styles.textBaseStats}>EXP: </Text>
          <View style={styles.base}>
            <Text style={styles.textStats}>295/300</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
