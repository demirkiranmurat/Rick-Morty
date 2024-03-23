import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const PageBar = ({maxPage, onPress}) => {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll} horizontal>
        {Array.from(Array.from({length: maxPage}, (_, i) => i + 1)).map(
          page => (
            <Pressable
              key={page}
              onPress={() => onPress(page)}
              style={styles.pageContainer}>
              <Text style={styles.page}>{page}</Text>
            </Pressable>
          ),
        )}
      </ScrollView>
    </View>
  );
};

export default PageBar;

const styles = StyleSheet.create({
  root: {
    height: 45,
    backgroundColor: '#f5f5f5',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scroll: {
    marginTop: 1,
  },
  page: {},
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    borderWidth: 1,
    height: 30,
    width: 30,
    marginHorizontal: 7,
  },
});
