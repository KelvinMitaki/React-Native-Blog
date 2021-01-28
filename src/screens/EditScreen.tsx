import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Context } from "../context/BlogContext";
import { BlogContext } from "./IndexScreen";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen: NavigationStackScreenComponent<{ id?: number }> = props => {
  const { state, editBlogPost } = useContext(Context) as BlogContext;
  const blog = state.blogPosts.find(
    pb => pb.id === props.navigation.getParam("id")
  );
  const { title, content } = blog as typeof state.blogPosts[0];
  return (
    <View>
      <BlogPostForm
        titleLabel="Edit Title"
        contentLabel="Edit Content"
        btnLabel="Edit Blog"
        title={title}
        content={content}
        onEditSubmit={editBlogPost}
      />
    </View>
  );
};

export default EditScreen;
