import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationRoute } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { Context } from "../context/BlogContext";
import { BlogContext } from "./IndexScreen";

const ShowScreen: React.FC<{
  navigation: StackNavigationProp<NavigationRoute, { title: string }>;
}> = props => {
  const { state } = useContext(Context) as BlogContext;
  const blogPost = state.blogPosts.find(
    blog => blog.title === props.navigation.getParam("title")
  );
  return (
    <View>
      <Text>{blogPost?.title}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
