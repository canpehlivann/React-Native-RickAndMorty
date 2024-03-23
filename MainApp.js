import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Dimensions, Text, FlatList, TouchableOpacity, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { likeCharacter,unlikeCharacter } from './redux/actions';

import { SafeAreaView } from 'react-native-safe-area-context';
import Pagination from './components/Pagination';
import { getAllEpisodes } from './api/base/axios';

const MainApp = ({ navigation }) => {
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllEpisodes(currentPage)
    .then((data)=>{
      setEpisodes(data.results);
      setTotalPages(data.info.pages);
    }
    )
    .catch((error)=>
    {
      console.log(error);
    });
    
  }, [currentPage]);


  const onSearch = () => {
    const filtered = episodes.filter((episode) =>
      episode.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredEpisodes(filtered);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('EpisodeDetails', { episodeId: item.id });
      }}
      style={styles.cardContainer}>

      
      <View style={styles.cardContent}>

      <Image
          source={require('./assets/adaptive-icon.png')}
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

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
       <View style={styles.row}>
       <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Bölüm ara..."
        style={styles.searchInput}
      />
       </View>

      <Button title="Arama" onPress={onSearch} />
      <FlatList
        data={filteredEpisodes.length > 0 ? filteredEpisodes : episodes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        contentContainerStyle = {styles.list}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default MainApp;
