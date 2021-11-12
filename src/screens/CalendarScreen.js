import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Calendar
        minDate={new Date()}
        monthFormat={'MMM yyyy'}
        enableSwipeMonths={true}
        markingType={'multi-dot'}
        markedDates={{
          '2021-11-08': {
            dots: [
              { key: 'Leg Day', color: 'red' },
              { key: 'Push Day', color: 'blue' },
            ],
          },
        }}
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  calendar: {
    height: 300,
  },
});

export default CalendarScreen;
