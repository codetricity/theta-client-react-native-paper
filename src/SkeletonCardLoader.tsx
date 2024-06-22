import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SkeletonCardLoader = () => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        {/* Header section */}
        <View style={styles.header}>
          <View style={styles.avatar} />
          <View>
            <View style={styles.title} />
            <View style={styles.subtitle} />
          </View>
        </View>
        <View style={{ marginTop: 10 }}> 
          <View style={styles.name} />
          <View style={styles.description} />
        </View>
        <View style={styles.image} />
        <View style={styles.actions} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginVertical: 10,
  },
  card: {
    height: 380,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    padding: 10,
    marginBottom: 10,
    width: '95%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    backgroundColor: '#c0c0c0',
    margin: 10,
    borderRadius: 30,
  },
  title: {
    height: 20,
    width: 160,
    backgroundColor: '#c0c0c0',
    borderRadius: 5,
    marginBottom: 5,
  },
  subtitle: {
    height: 15,
    width: 200,
    backgroundColor: '#c0c0c0',
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    height: 25,
    width: 100,
    backgroundColor: '#c0c0c0',
    margin: 5,
    borderRadius: 5,
  },
  description: {
    height: 20,
    width: 160,
    backgroundColor: '#c0c0c0',
    margin: 5,
    borderRadius: 5,
  },
  image: {
    height: 150,
    width: '100%',
    backgroundColor: '#c0c0c0',
    margin: 5,
    borderRadius: 5,
  },
  actions: {
    height: 30,
    width: 60,
    backgroundColor: '#c0c0c0',
    borderRadius: 15,
    alignSelf: 'flex-end',
    margin: 5,
  },
});

export default SkeletonCardLoader;
