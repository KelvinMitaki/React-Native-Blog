import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {
  NavigationInjectedProps,
  NavigationRoute,
  NavigationScreenProp,
  withNavigation
} from "react-navigation";

interface Props {
  titleLabel: string;
  contentLabel: string;
  btnLabel: string;
  title?: string;
  content?: string;
  onSubmit?: (values: {
    title: string;
    content: string;
    navigation: NavigationScreenProp<
      NavigationRoute<{
        id: number;
      }>,
      {
        id: number;
      }
    >;
  }) => void;
  onEditSubmit?: (values: {
    title: string;
    content: string;
    id: number;
    navigation: NavigationScreenProp<
      NavigationRoute<{
        id: number;
      }>,
      {
        id: number;
      }
    >;
  }) => void;
}

const BlogPostForm: React.FC<
  NavigationInjectedProps<{ id: number }> & Props
> = props => {
  const [title, setTitle] = useState<string>(props.title || "");
  const [content, setContent] = useState<string>(props.content || "");
  return (
    <View>
      <Text style={styles.text}>{props.titleLabel}:</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Text style={styles.text}>{props.contentLabel}:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContent}
        value={content}
      />
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          if (
            title.trim().length !== 0 &&
            content.trim().length !== 0 &&
            props.navigation
          ) {
            if (props.onSubmit) {
              props.onSubmit({ title, content, navigation: props.navigation });
            }
            if (props.onEditSubmit) {
              props.onEditSubmit({
                title,
                content,
                id: props.navigation.getParam("id"),
                navigation: props.navigation
              });
            }
          }
        }}
      >
        <Text style={{ color: "white" }}>{props.btnLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(BlogPostForm);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 2,
    marginTop: 10,
    fontSize: 18
  },
  submit: {
    backgroundColor: "#00a2ff",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 350,
    alignSelf: "center",
    borderRadius: 5
  }
});
