import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Calendar
          minDate={new Date()}
          monthFormat={'MMM yyyy'}
          enableSwipeMonths={true}
          markingType={'multi-dot'}
          markedDates={{
            '2021-11-08': {
              dots: [
                {key: 'Leg Day', color: 'red'},
                {key: 'Push Day', color: 'blue'},
              ],
            },
          }}
          style={{height: 300}}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CalendarScreen;
