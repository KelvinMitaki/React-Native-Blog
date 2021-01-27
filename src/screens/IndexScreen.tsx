import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

interface BlogContext {
  blogPosts: { title: string }[];
  addBlogPosts: () => void;
}

const IndexScreen = () => {
  const data = useContext(BlogContext) as BlogContext;

  return (
    <View>
      <Text>IndexScreen IndexScreen</Text>
      <FlatList
        data={data.blogPosts}
        keyExtractor={data => data.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
