import React from "react";
import { NavigationRoute, NavigationScreenProp } from "react-navigation";
import axios from "../axios/axios";
import createDataContext from "./createDataContext";

interface State {
  blogPosts: { title: string; id: number; content: string }[];
}

interface Action {
  type: "addBlogPost" | "removeBlogPost" | "editBlogPost" | "fetchPosts";
  payload: { title?: string; id?: number; content?: string };
}

type UseReducer = (state: State, action: Action) => State;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "fetchPosts":
      return { ...state, blogPosts: action.payload as typeof state.blogPosts };
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
  return async (data: {
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
    try {
      const { title, content } = data;
      const res = await axios.post("/blogPosts", { title, content });
      dispatch({
        type: "addBlogPost",
        payload: res.data
      });
      data.navigation.navigate("Index");
    } catch (error) {
      console.log(error);
    }
  };
};
const removeBlogPost = (dispatch: React.Dispatch<Action>) => {
  return async (id: number) => {
    try {
      await axios.delete(`/blogPosts/${id}`);
      dispatch({ type: "removeBlogPost", payload: { id } });
    } catch (error) {
      console.log(error);
    }
  };
};
const fetchPosts = (dispatch: React.Dispatch<Action>) => {
  return async () => {
    try {
      const { data } = await axios.get("/blogPosts");
      dispatch({ type: "fetchPosts", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
const editBlogPost = (dispatch: React.Dispatch<Action>) => {
  return async (data: {
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
    try {
      const { content, title } = data;
      const res = await axios.put(`/blogPosts/${data.id}`, { content, title });
      dispatch({ type: "editBlogPost", payload: res.data });
      data.navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, removeBlogPost, editBlogPost, fetchPosts },
  {
    blogPosts: []
  }
);
