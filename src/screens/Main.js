import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import EpisodeList from '../components/EpisodeList';
import ApiClient from '../api/ApiClient';
import PageBar from '../components/PageBar';

const Main = ({navigation}) => {
  const [episodes, setEpisodes] = useState([]);
  const [episodePage, setEpisodePage] = useState(1);
  const [episodeMaxPage, setEpisodeMaxPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  useEffect(() => {
    getEpisodes();
  }, []);
  const getEpisodes = async () => {
    const result = await ApiClient.fetchData('episode');
    setEpisodes(result.results);
    setEpisodeMaxPage(result.info.pages);
    setFilteredEpisodes(result.results);
    setSearch('');
  };
  const getEpisodePage = async page => {
    if (page !== episodePage) {
      const result = await ApiClient.fetchData(`episode?page=${page}`);

      setEpisodes(result.results);
      setEpisodePage(page);
      setFilteredEpisodes(result.results);
      setSearch('');
    }
  };
  const searchEpisodes = search => {
    setSearch(search);
    const filteredEpisodes = episodes.filter(episode =>
      episode?.name?.toLowerCase()?.includes(search?.toLowerCase()),
    );
    setFilteredEpisodes(filteredEpisodes);
  };
  return (
    <View style={styles.root}>
      <SearchBar setSearch={searchEpisodes} search={search} />
      <EpisodeList navigation={navigation} episodes={filteredEpisodes} />
      <PageBar
        onPress={page => getEpisodePage(page)}
        maxPage={episodeMaxPage}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 7,
    paddingTop: 12,
    flex: 1,
  },
});
