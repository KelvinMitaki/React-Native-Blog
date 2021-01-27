import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const posts = useContext(BlogContext) as { title: string }[];

  return (
    <View>
      <Text>IndexScreen IndexScreen</Text>
      <FlatList
        data={posts}
        keyExtractor={data => data.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
