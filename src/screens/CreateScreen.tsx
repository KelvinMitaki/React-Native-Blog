import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

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
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "black"
  }
});
