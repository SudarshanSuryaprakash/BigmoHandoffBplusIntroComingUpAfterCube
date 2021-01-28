import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default () => {
  return (
    <LinearGradient
      colors={['#fdffbc', '#ffdcb8']}
      //colors={['#d9dab0', '#f4f5db']}
      //colors={['rgba(122, 219, 255, 0.52)', 'rgba(3, 231, 152, 0.52)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.graph}></View>
      <View style={styles.protoContainer}>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>£100</Text>
          <Text style={styles.cardExp}>left to spend</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>10</Text>
          <Text style={styles.cardExp}>days remaining</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  graph: {
    height: 450,
    width: '90%',
    //backgroundColor: 'rgba(255,255,255,0.7)',
  },
  protoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    //backgroundColor: '#f7f7e8',
    //backgroundColor: '#f8f1f1',
    backgroundColor: '#ffeebb',

    //padding: 20,
    height: 80,
    width: 130,
    borderWidth: 2,
    borderColor: '#c7cfb7',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardExp: {
    color: '#5E5E5F',
  },
});
