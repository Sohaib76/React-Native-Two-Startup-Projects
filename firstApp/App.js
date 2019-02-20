import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {

  state = {
    placeName: '',
    places : []
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName : val,
      
    });
  };

  placeSubmitHandler = () => {
    if (this.state.places.trim === ""){
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });

  };
  render() {
    const placesOutput = this.state.places.map((place, i) => (
    <ListItem key={i} placeName={place}></ListItem>
    ));
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>For Ada</Text>
        <Text>Build Apps of React Native</Text> */}
        <Text></Text>
        <View style={styles.inputContainer}> 
        <TextInput
          style = {styles.placeInput}
          placeholder = "Enter The TExt"
          value = {this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />

        <Button
          onPress = {this.placeSubmitHandler}
          title = "Add"
          style = {styles.placeButton}
        />
        </View>
       
        <View style={styles.listContainer}>{placesOutput}</View>
          
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 30,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
