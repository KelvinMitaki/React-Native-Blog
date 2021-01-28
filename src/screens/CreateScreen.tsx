import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const CreateScreen = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  return (
    <View>
      <Text style={styles.text}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setContent(text)}
        value={content}
      />
      <TouchableOpacity style={styles.submit}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 2,
    marginTop: 10,
    fontSize: 18
  },
  submit: {
    backgroundColor: "#00a2ff",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 350,
    alignSelf: "center",
    borderRadius: 5
  }
});
