import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { MaterialIcons } from "@expo/vector-icons";

interface BlogContext {
  state: { blogPosts: { title: string }[] };
  addBlogPosts: () => void;
}

const IndexScreen = () => {
  const {
    state: { blogPosts },
    addBlogPosts
  } = useContext(Context) as BlogContext;
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: "#00a2ff",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
        onPress={() => addBlogPosts()}
      >
        <Text style={{ color: "white" }}>Add blog post</Text>
      </TouchableOpacity>
      <FlatList
        data={blogPosts}
        keyExtractor={data => data.title}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.title}</Text>
            <MaterialIcons name="delete" size={25} />
          </View>
        )}
      />
    </>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  post: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20
  }
});
