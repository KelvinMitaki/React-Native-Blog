import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Context } from "../context/BlogContext";
import { BlogContext } from "./IndexScreen";

const EditScreen: NavigationStackScreenComponent<{ id?: number }> = props => {
  const { state } = useContext(Context) as BlogContext;
  const blog = state.blogPosts.find(
    pb => pb.id === props.navigation.getParam("id")
  );
  const [title, setTitle] = useState<string>(blog?.title || "");
  const [content, setContent] = useState<string>(blog?.content || "");
  return (
    <View>
      <Text style={styles.text}>Edit Title:</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Text style={styles.text}>Edit Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContent}
        value={content}
      />
      <TouchableOpacity style={styles.submit}>
        <Text style={{ color: "white" }}>Edit Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;

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
