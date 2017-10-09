import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ListView
} from "react-native";
import StatusBar from "./StatusBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayTitles: []
    };
    this.getAsyncData = this.getAsyncData.bind(this);
  }
  componentDidMount = () => {
    this.getAsyncData();
  };
  getAsyncData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(resJson =>
        resJson.map(item => {
          this.state.arrayTitles.push(item.title);
          console.log(JSON.stringify(resJson, null, 2));
          console.log(this.state.arrayTitles);
        })
      )
      .catch(err => console.error(err));
  };

  handleTouch = () => console.log("clicked me!!");
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Text>
          {`Displaying Async content here!!`}
           
           {this.state.arrayTitles.map(i => <Text>{i}</Text>)} 

        </Text>
        <Text>Hello World!!</Text>
        <Text>Testing</Text>
        <TouchableOpacity onPress={this.handleTouch}>
          <Text>Click me!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
});
