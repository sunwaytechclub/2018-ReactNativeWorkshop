import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';



export default class App extends React.Component {
  state = {
    count: null,
    input: null,
    showPaused: false
  }

  tick = () => {
    this.setState({count: (--this.state.count)})
  }
  startTimer = () => {
    this.setState({showPaused:true, count:this.state.input})
    clearInterval(this.timer)
    this.timer = setInterval(this.tick, 1000)
    
  }

  pauseTimer = () => {
    clearInterval(this.timer)
    this.setState({showPaused:false})
  }
  
  storeText = text => {
    this.setState({
      input: text
    })
  }
  


  render() {
    if (this.state.count < 1) {
      clearInterval(this.timer)
    }
    return (
      
      
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.count}</Text>
        <TextInput 
          placeholder="seconds left"
          returnKeyType="done"
          value={this.state.count}
          onChangeText={this.storeText}
          keyboardType="number-pad"
          style={styles.input}
          placeholderTextColor="lightgreen"
        />
        {this.state.showPaused ? (
          <Button title="pause" onPress={this.pauseTimer}/>
        ) : (
          <Button title="start" onPress={this.startTimer}/>
        )}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'lightgreen',
    fontSize: 130
  },
  input: {
    color: 'lightblue',
    padding: 20,
    fontSize: 40
  },
  button: {
    color: 'lightblue',
    padding: 40,
    fontSize: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
