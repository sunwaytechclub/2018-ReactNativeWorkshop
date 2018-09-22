import  React , { Component }from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const DATA = {
  timer :1234567,
  laps : [12345 , 2345 , 34567, 23456 ],
}

function Timer({interval}) {
  return <Text style = {styles.timer}>{interval}</Text>
}
export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Timer interval= {DATA.timer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 140,
  },
  timer: {
    color : '#FFFFFF',
    fontSize : 75,
    fontWeight: '200',

  }
});
