import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import BottomModal from './BottomModal';
import SetCard from './SetCard';
import TimeCard from './TimeCard';

const SetList = ({ dispatch, state, workout, exercise }) => {
  const [visible, onChangeVisible] = useState(false);
  let last_date = null;

  return (
    <View style={styles.container}>
      <BottomModal
        visible={visible}
        onClose={() => {
          onChangeVisible(false);
        }}
      />
      <View style={styles.header}>
        <Text style={styles.title}>{state.selected_exercise.name}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        style={styles.container}
        data={state.selected_exercise.sets}
        renderItem={({ item }) => {
          let list = [
            <SetCard
              key={item.id}
              set={item}
              workout={workout}
              exercise={exercise}
            />,
          ];
          let date = new Date(item.timestamp);
          if (last_date !== date.toDateString()) {
            last_date = date.toDateString();
            list = [
              <TimeCard key={item.timestamp} time={item.timestamp} />,
              ...list,
            ];
          }

          return list;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { flex: 1 },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state, props) => {
  return {
    state: state.workouts,
    ...props,
  };
};

export default connect(mapStateToProps)(SetList);
