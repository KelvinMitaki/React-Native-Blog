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
  state: { blogPosts: { title: string; id: number; content: string }[] };
  addBlogPosts: () => void;
  removeBlogPost: (id: number) => void;
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
        keyExtractor={data => data.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.post}
            onPress={() => props.navigation.navigate("Show", { id: item.id })}
          >
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
              <MaterialIcons name="delete" size={25} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate("Create")}
      >
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
