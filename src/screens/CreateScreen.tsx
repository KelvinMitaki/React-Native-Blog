import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";
import { BlogContext } from "./IndexScreen";

const CreateScreen: NavigationStackScreenComponent = props => {
  const { addBlogPost } = useContext(Context) as BlogContext;
  return (
    <View>
      <BlogPostForm
        titleLabel="Enter Title"
        contentLabel="Enter Content"
        btnLabel="Submit"
        onSubmit={addBlogPost}
      />
    </View>
  );
};

export default CreateScreen;
