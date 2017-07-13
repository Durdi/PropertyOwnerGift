import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./img/graintebanana.gif")} style={{height: 300, width: 300}} resizeMode='contain' />
        <ButtonContainer />
      </View>
    );
  }
}

class ButtonContainer extends React.Component {
  render(){
    return (
      <View style = {styles.container, styles.buttonContainer}>
        <VideoButton buttonText = "What We Do"/>
        <VideoButton buttonText = "See Us in Action"/>
        <VideoButton buttonText = "Story of Us"/>
      </View>
    );
  }
}

class VideoButton extends React.Component{
  render(){
    return(
        <TouchableHighlight style={styles.button} onPress={onPressPlayVideo}>
          <Text style = {styles.buttonText}>{this.props.buttonText}</Text>
        </TouchableHighlight>

    );
  }
}

const onPressPlayVideo = function(videoNumber){
  console.log("stuff");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545A5E',
    alignItems:'center',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#E31937',
    padding : 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius:10,
    height: 75,
    width: 300,
    justifyContent:'center',
    alignItems: 'center',
    margin: 20

  },
  buttonContainer: {
  },
  buttonText:{
    color:'#fff'
  },

});

