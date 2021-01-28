import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationParams, NavigationRoute } from "react-navigation";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { Foundation } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { BlogContext } from "./IndexScreen";

const ShowScreen: NavigationStackScreenComponent<{ id?: number }> = props => {
  const { state } = useContext(Context) as BlogContext;
  const blogPost = state.blogPosts.find(
    blog => blog.id === props.navigation.getParam("id")
  );

  return (
    <ScrollView>
      <Text style={styles.title}>{blogPost?.title}</Text>
      <Text style={styles.content}>{blogPost?.content}</Text>
    </ScrollView>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Foundation name="pencil" size={25} />
      </TouchableOpacity>
    )
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "underline"
  },
  content: {
    marginHorizontal: 10
  }
});
