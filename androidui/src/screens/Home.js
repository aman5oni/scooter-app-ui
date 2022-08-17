import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../images/Scooter.png")} style={styles.img} />
      <Text style={styles.title}>Bhide Scooter</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the Bhide scooter
        are custom-tuned for the ultimate riding experience.
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Detail")}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212"
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain"
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    marginTop: 20
  },
  detail: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30
  },
  text: {
    fontSize: 30,
    color: "#FFF"
  }
});
