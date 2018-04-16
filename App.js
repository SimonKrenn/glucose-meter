import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button, Header,} from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <Header
        style={styles.header}
        backgroundColor='#fff'
        centerComponent={{ text: 'My Glucose Tracker', style: { color: '#000', fontSize: 20 } }}
        rightComponent={{ icon: 'settings', color: '#F9537A' }}
      />

      <Button
        title='BUTTON'
      />
</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: '#fff',
    borderBottomColor: '#000'
  }
});
