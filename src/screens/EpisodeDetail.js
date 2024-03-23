import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CharacterList from '../components/CharacterList';
import SearchBar from '../components/SearchBar';
import ApiClient from '../api/ApiClient';

const EpisodeDetail = ({route}) => {
  const [episodeName, setEpisodeName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const fetchCharacterData = async characterId => {
    const result = await ApiClient.fetchData(`character/${characterId}`);
    return result;
  };
  const getCharacters = async () => {
    const characterIdList = route?.params?.item?.characters.map(characterId => {
      const parts = characterId.split('/');
      return parts[parts.length - 1];
    });
    const characterData = await Promise.all(
      characterIdList.map(fetchCharacterData),
    );
    setCharacters(characterData);
    setFilteredCharacters(characterData);
    setSearch('');
    setEpisodeName(route.params.item.name);
  };
  const searchCharacters = search => {
    setSearch(search);
    const filteredCharacters = characters.filter(
      character =>
        character?.location?.name
          ?.toLowerCase()
          ?.includes(search?.toLowerCase()) ||
        character?.species?.toLowerCase()?.includes(search?.toLowerCase()) ||
        character?.gender?.toLowerCase()?.includes(search?.toLowerCase()) ||
        character?.name?.toLowerCase()?.includes(search?.toLowerCase()),
    );
    setFilteredCharacters(filteredCharacters);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <View style={styles.root}>
      <Text style={styles.episodeName}>{episodeName}</Text>
      <SearchBar setSearch={searchCharacters} search={search} />
      <CharacterList characters={filteredCharacters} />
    </View>
  );
};

export default EpisodeDetail;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 7,
    paddingTop: 10,
    flex: 1,
  },
  episodeName: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    color: 'black',
    marginBottom: 10,
  },
});
