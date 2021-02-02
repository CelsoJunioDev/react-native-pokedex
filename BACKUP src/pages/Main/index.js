import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Main({navigation}) {
  const [pokemons, setPokemons] = useState([]);
  const [image, setImage] = useState('https://github.com/celsojuniodev.png');
  const [pokeName, setPokeName] = useState('');
  const [abilities, setAbilites] = useState([]);
  const [type, setType] = useState([]);
  const [type2, setType2] = useState([]);
  const [weight, setWeight] = useState([]);
  const [height, setHeight] = useState([]);
  const [hp, setHp] = useState([]);
  const [attack, setAttack] = useState([]);
  const [defense, setDefense] = useState([]);
  const [specialAttack, setSpecialAttack] = useState([]);
  const [specialDefense, setSpecialDefense] = useState([]);
  const [speed, setSpeed] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon', {
      //busca
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  async function pokeDetails(name) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      //busca
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        // setImage(data.forms[0].url);
        // setAbilites(data.abilities[0].ability.name);
        // setType(data.types[0].type.name);
        // setType2(data.types[1]?.type.name);
        // setWeight(data.weight / 10);
        // setHeight(data.height / 10);
        // setHp(data.stats[0].base_stat);
        // setAttack(data.stats[1].base_stat);
        // setDefense(data.stats[2].base_stat);
        // setSpecialAttack(data.stats[3].base_stat);
        // setSpecialDefense(data.stats[4].base_stat);
        // setSpeed(data.stats[5].base_stat);

        // console.log(data.stats[0].base_stat);

        transport(
          data.forms[0].url,
          data.forms[0].name,
          data.types[0].type.name,
          data.types[1]?.type.name,
          data.weight,
          data.height,
          data.stats[0].base_stat,
          data.stats[1].base_stat,
          data.stats[2].base_stat,
          data.stats[3].base_stat,
          data.stats[4].base_stat,
          data.stats[5].base_stat,
        );
      });
  }

  function transport(
    image,
    name,
    type,
    type2,
    weight,
    height,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  ) {
    navigation.navigate('PokeDetailsTest', {
      image: image,
      name: name,
      type: type,
      type2: type2,
      weight: weight,
      height: height,
      hp: hp,
      attack: attack,
      defense: defense,
      specialAttack: specialAttack,
      specialDefense: specialDefense,
      speed: speed,
    });
  }

  function PokemonShow(item) {
    const {name, url} = item.item;

    //pegar o numero do pokemon
    const pokemonNumber = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    const imageUrl =
      'https://pokeres.bastionbot.org/images/pokemon/' + pokemonNumber + '.png';
    return (
      <LinearGradient
        colors={['#48cae4', '#a8dadc', '#fff']}
        style={styles.cardPoke}>
        <TouchableOpacity onPress={() => pokeDetails(name)}>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d90429" />

      <View style={styles.header}>
        <Text style={styles.title}>Pokedex</Text>
      </View>

      <FlatList
        //horizontal
        numColumns={2}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={PokemonShow}
      />
    </View>
  );
}
