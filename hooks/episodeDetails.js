import React, { useEffect, useState } from "react";
import { TouchableOpacity, Button, StyleSheet, TextInput } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from "react-native";
import { getCharacter, getCharacterFromUrl, getCharacters, getEpisode } from "../api/base/axios";
import { convertCharacterPromiseToObjects } from '../helpers/convertCharacterPromiseToObjects';
import EpisodeDetailsRenderer from "../views/renderEpisodeList";

const EpisodeDetails = ({ route, navigation }) => {
  const { episodeId } = route.params;
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  //const [likedCharacters, setLikedCharacters] = useState([]);
  //const [searchText, setSearchText] = useState("");

  useEffect(() => {
   getEpisode(episodeId)
    .then((data) => {

        setEpisode(data);
        const ep = data;
        const ch = ep.characters;

        const characterData = ch.map(
          characterUrl => getCharacterFromUrl(characterUrl)
        );

        Promise.all(characterData
          .map(
            promise=>promise
            .then(characterObject => characterObject)
            .catch(error=>{
              console.error('Error fetching character data: ',error);
              return null;
            })
          )
          )
          .then(characterObjects =>
            {
              characterObjets = characterObjects.filter(obj => obj !== null );
              
              setCharacters(characterObjects);
            })
          
          .catch(error =>{
            console.error('Error resolving data promises: ',error);  
          })
          

      })

  }, [episodeId]);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('EpisodeDetails', { episodeId: item.id });
      }}
      style={styles.cardContainer}>

      
      <View style={styles.cardContent}>

      <Image
          source={require('../assets/adaptive-icon.png')}
          style={styles.image}
        />

        <View style={styles.column}>
        <Text style={styles.title}>{item.episode}</Text>
        <View style={styles.row}>
        <Text style={styles.titleContent}>Episode Name:</Text>
        <View style = {styles.item}>
        <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
        </View>
        </View>

        <View style={styles.row}>
        <Text style={styles.titleContent}>Air Date:</Text>
        <Text style={styles.title}>{item.air_date}</Text>
        </View>

        </View>
      </View>
    </TouchableOpacity>
  );
}


export default EpisodeDetails

//   const showLikedCharacters = () => {
//     const likedCharacterDetails = characters.filter((character) =>
//       likedCharacters.includes(character.id)
//     );
//     navigation.navigate("LikedCharactersScreen", {
//       likedCharacters: likedCharacterDetails,
//     });
//   };

//   const filteredCharacters = characters.filter(
//     (character) =>
//       character.name &&
//       character.name.toLowerCase().includes(searchText.toLowerCase())
//   );
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.contentContainer}>
//         <Button
//           onPress={showLikedCharacters}
//           title="Beğenilen Karakterleri Gör"
//         />
//         <TextInput
//           style={styles.searchInput}
//           onChangeText={(text) => setSearchText(text)}
//           value={searchText}
//           placeholder="Karakter adı ara..."
//           placeholderTextColor="#FFFFFF"
//         />
//         {episode ? (
//           <>
//             <View
//               style={{
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text style={{ color: "white", fontWeight: "bold" }}>
//                 {" "}
//                 Bölüm Adı: {episode.name}
//               </Text>
//               <Text style={{ color: "white", fontWeight: "bold" }}>
//                 Sezon,Bölüm: {episode.episode}
//               </Text>
//               <Text style={{ color: "white", fontWeight: "bold" }}>
//                 Tarih: {episode.air_date}
//               </Text>
//               <Text style={styles.charactersTitle}>Karakterler:</Text>
//               {filteredCharacters.length > 0 ? (
//                 filteredCharacters.map((character) => (
//                   <View style={styles.characterCard} key={character.id}>
//                     <TouchableOpacity
//                       onPress={() =>
//                         navigation.navigate("CharacterDetails", {
//                           characterId: character?.id,
//                         })
//                       }
//                     >
//                       <Image
//                         source={{ uri: character.image }}
//                         style={styles.characterImage}
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleLike(character.id)}>
//                       <Text
//                         style={[
//                           styles.likeText,
//                           {
//                             fontWeight: likedCharacters.includes(character.id)
//                               ? "bold"
//                               : "normal",
//                           },
//                         ]}
//                       >
//                         👍 Like
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 ))
//               ) : (
//                 <ActivityIndicator color="#FFFFFF" />
//               )}
//             </View>
//           </>
//         ) : (
//           <ActivityIndicator color="#FFFFFF" />
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };


const styles = StyleSheet.create({

  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center' // Optional: Add padding to the row
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 0, // Optional: Add padding to the row
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // Align items to the left
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    margin: 12,
    
  },
  cardContent: {
    flexDirection: 'row', // Align content in a row
    alignItems: 'center', // Align items vertically
    padding: 0,
    width: 300,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold' // Add margin to separate title from image
  },
  titleContent: {
    marginRight: 2,
     // Add margin to separate title from image
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  searchInput: {
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 5,
    padding: 8,
    marginTop: 16,
    marginBottom: 8,
    fontWeight:'bold',
    width: Dimensions.get('window').width - 19,
  },
  item: {
    marginHorizontal: 5, // Optional: Add margin between items
    width: '45%', // Optional: Set a specific width for items
  },
  list: {
    width: Dimensions.get('window').width, // Set width to device width
    paddingVertical: 10,
  },
});



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#202329",
//   },
//   contentContainer: {
//     padding: 16,
//   },
//   charactersTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//     marginBottom: 16,
//   },
//   characterCard: {
//     backgroundColor: "#39434A",
//     borderRadius: 5,
//     padding: 16,
//     alignItems: "center",
//     marginBottom: 16,
//     width: "100%",
//   },
//   characterImage: {
//     width: 250,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 8,
//   },
//   likeText: {
//     fontSize: 16,
//     color: "#FFFFFF",
//     marginBottom: 15,
//   },
//   searchInput: {
//     backgroundColor: "#39434A",
//     borderRadius: 5,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     color: "#FFFFFF",
//     marginBottom: 16,
//     width: "100%",
//   },
// });
