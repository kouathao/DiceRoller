import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

export default class App extends React.Component {
  state = {
    uriDiceOne: require("./src/images/dice1.png"),
    uriDiceTwo: require("./src/images/dice3.png")
  };

  getRandomValueOne = () => {
    // get a random number then plus 1
    return Math.floor(Math.random() * 6 + 1);
  };

  getRandomValueTwo = () => {
    // get a random number then plus 1
    return Math.floor(Math.random() * 6 + 1);
  };

  playButtonPressed = () => {
    // Alert.alert("Button Pressed: " + this.getRandomValueOne());

    var rNumberOne = this.getRandomValueOne();
    var rNumberTwo = this.getRandomValueTwo();

    switch (rNumberOne) {
      case 1:
        this.setState({
          uriDiceOne: require("./src/images/dice1.png")
        });
        break;
      case 2:
        this.setState({
          uriDiceOne: require("./src/images/dice2.png")
        });
        break;
      case 3:
        this.setState({
          uriDiceOne: require("./src/images/dice3.png")
        });
        break;
      case 4:
        this.setState({
          uriDiceOne: require("./src/images/dice4.png")
        });
        break;
      case 5:
        this.setState({
          uriDiceOne: require("./src/images/dice5.png")
        });
        break;
      case 6:
        this.setState({
          uriDiceOne: require("./src/images/dice6.png")
        });
        break;
      default:
        break;
    }

    switch (rNumberTwo) {
      case 1:
        this.setState({
          uriDiceTwo: require("./src/images/dice1.png")
        });
        break;
      case 2:
        this.setState({
          uriDiceTwo: require("./src/images/dice2.png")
        });
        break;
      case 3:
        this.setState({
          uriDiceTwo: require("./src/images/dice3.png")
        });
        break;
      case 4:
        this.setState({
          uriDiceTwo: require("./src/images/dice4.png")
        });
        break;
      case 5:
        this.setState({
          uriDiceTwo: require("./src/images/dice5.png")
        });
        break;
      case 6:
        this.setState({
          uriDiceTwo: require("./src/images/dice6.png")
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.uriDiceOne} />
        <Image source={this.state.uriDiceTwo} />
        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.gameButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e75292",
    alignItems: "center",
    justifyContent: "center"
  },
  gameButton: {
    marginTop: 35,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    overflow: "hidden",
    borderRadius: 5,
    borderColor: "#fff"
  }
});
