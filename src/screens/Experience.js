import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Experience extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Experience Page</Text>
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
});
