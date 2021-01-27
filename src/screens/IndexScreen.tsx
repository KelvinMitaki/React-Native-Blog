import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

interface BlogContext {
  blogPosts: { title: string }[];
  addBlogPosts: () => void;
}

const IndexScreen = () => {
  const { blogPosts, addBlogPosts } = useContext(BlogContext) as BlogContext;

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
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
