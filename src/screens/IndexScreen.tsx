import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";

export interface BlogContext {
  state: { blogPosts: { title: string }[] };
  addBlogPosts: () => void;
  removeBlogPost: (title: string) => void;
}

const IndexScreen: NavigationStackScreenComponent = props => {
  const {
    state: { blogPosts },
    addBlogPosts,
    removeBlogPost
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
          <TouchableOpacity
            style={styles.post}
            onPress={() =>
              props.navigation.navigate("Show", { title: item.title })
            }
          >
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => removeBlogPost(item.title)}>
              <MaterialIcons name="delete" size={25} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

IndexScreen.navigationOptions = () => {
  return {
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 20 }}>
        <AntDesign name="pluscircle" size={25} />
      </TouchableOpacity>
    )
  };
};

export default IndexScreen;

const styles = StyleSheet.create({
  post: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    borderColor: "grey",
    borderBottomWidth: 1
  }
});
