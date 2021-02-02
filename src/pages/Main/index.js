import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import api from '../../api'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Main({navigation}) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get()
      .then((response) => {
        setPokemons(response.data.results);
      });
  }, []);

  async function pokeDetails(name) {
    await api.get(`${name}`)
      .then((response) => {

        transport(
          response.data.forms[0].url,
          response.data.forms[0].name,
          response.data.types[0].type.name,
          response.data.types[1]?.type.name,
          response.data.weight,
          response.data.height,
          response.data.stats[0].base_stat,
          response.data.stats[1].base_stat,
          response.data.stats[2].base_stat,
          response.data.stats[3].base_stat,
          response.data.stats[4].base_stat,
          response.data.stats[5].base_stat,
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



// import React, {useState, useEffect} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';
// import api from '../../api'
// import LinearGradient from 'react-native-linear-gradient';
// import styles from './styles';

// export default function Main({navigation}) {
//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon', {
//       //busca
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//       },
//     })
//       .then((Response) => Response.json())
//       .then((data) => {
//         setPokemons(data.results);
//       });
//   }, []);

//   async function pokeDetails(name) {
//     await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
//       //busca
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//       },
//     })
//       .then((Response) => Response.json())
//       .then((data) => {

//         transport(
//           data.forms[0].url,
//           data.forms[0].name,
//           data.types[0].type.name,
//           data.types[1]?.type.name,
//           data.weight,
//           data.height,
//           data.stats[0].base_stat,
//           data.stats[1].base_stat,
//           data.stats[2].base_stat,
//           data.stats[3].base_stat,
//           data.stats[4].base_stat,
//           data.stats[5].base_stat,
//         );
//       });
//   }

//   function transport(
//     image,
//     name,
//     type,
//     type2,
//     weight,
//     height,
//     hp,
//     attack,
//     defense,
//     specialAttack,
//     specialDefense,
//     speed,
//   ) {
//     navigation.navigate('PokeDetailsTest', {
//       image: image,
//       name: name,
//       type: type,
//       type2: type2,
//       weight: weight,
//       height: height,
//       hp: hp,
//       attack: attack,
//       defense: defense,
//       specialAttack: specialAttack,
//       specialDefense: specialDefense,
//       speed: speed,
//     });
//   }

//   function PokemonShow(item) {
//     const {name, url} = item.item;

//     //pegar o numero do pokemon
//     const pokemonNumber = url
//       .replace('https://pokeapi.co/api/v2/pokemon/', '')
//       .replace('/', '');
//     const imageUrl =
//       'https://pokeres.bastionbot.org/images/pokemon/' + pokemonNumber + '.png';
//     return (
//       <LinearGradient
//         colors={['#48cae4', '#a8dadc', '#fff']}
//         style={styles.cardPoke}>
//         <TouchableOpacity onPress={() => pokeDetails(name)}>
//           <Image style={styles.image} source={{uri: imageUrl}} />
//           <Text style={styles.text}>{name}</Text>
//         </TouchableOpacity>
//       </LinearGradient>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#d90429" />

//       <View style={styles.header}>
//         <Text style={styles.title}>Pokedex</Text>
//       </View>

//       <FlatList
//         //horizontal
//         numColumns={2}
//         data={pokemons}
//         keyExtractor={(pokemon) => pokemon.name}
//         contentContainerStyle={{flexGrow: 1}}
//         renderItem={PokemonShow}
//       />
//     </View>
//   );
// }
