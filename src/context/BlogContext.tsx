import React from "react";
import { NavigationRoute, NavigationScreenProp } from "react-navigation";
import createDataContext from "./createDataContext";

interface State {
  blogPosts: { title: string; id: number; content: string }[];
}

interface Action {
  type: "addBlogPost" | "removeBlogPost" | "editBlogPost";
  payload: { title?: string; id?: number; content?: string };
}

type UseReducer = (state: State, action: Action) => State;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addBlogPost":
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          action.payload as { title: string; id: number; content: string }
        ]
      };
    case "removeBlogPost":
      return {
        ...state,
        blogPosts: state.blogPosts.filter(bp => bp.id !== action.payload.id)
      };
    case "editBlogPost":
      const blogPosts = state.blogPosts;
      const postIndex = blogPosts.findIndex(p => p.id === action.payload.id);
      blogPosts[postIndex] = action.payload as typeof state.blogPosts[0];
      return {
        ...state,
        blogPosts
      };
    default:
      return state;
  }
};

const addBlogPost = (dispatch: React.Dispatch<Action>) => {
  return (data: {
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
  }) => {
    const { title, content } = data;
    dispatch({
      type: "addBlogPost",
      payload: { title, content, id: Math.floor(Math.random() * 91826982718) }
    });
    data.navigation.navigate("Index");
  };
};
const removeBlogPost = (dispatch: React.Dispatch<Action>) => {
  return (id: number) => {
    dispatch({ type: "removeBlogPost", payload: { id } });
  };
};
const editBlogPost = (dispatch: React.Dispatch<Action>) => {
  return (data: {
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
  }) => {
    dispatch({ type: "editBlogPost", payload: data });
    data.navigation.goBack();
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, removeBlogPost, editBlogPost },
  {
    blogPosts: [
      { title: "Test Post", content: "This is the first test post", id: 1 }
    ]
  }
);
