import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const TimeCard = ({ time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{moment(time).format('ddd, D MMM YYYY')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    height: 50,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default TimeCard;
