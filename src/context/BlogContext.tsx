import React from "react";
import createDataContext from "./createDataContext";

interface State {
  blogPosts: { title: string; id: number; content: string }[];
}

interface Action {
  type: "addBlogPosts" | "removeBlogPost";
  payload: { title?: string; id?: number; content?: string };
}

type UseReducer = (state: State, action: Action) => State;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addBlogPosts":
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
    default:
      return state;
  }
};

const addBlogPosts = (dispatch: React.Dispatch<Action>) => {
  return (data: { title: string; content: string }) => {
    const { title, content } = data;
    dispatch({
      type: "addBlogPosts",
      payload: { title, content, id: Math.floor(Math.random() * 91826982718) }
    });
  };
};
const removeBlogPost = (dispatch: React.Dispatch<Action>) => {
  return (id: number) => {
    dispatch({ type: "removeBlogPost", payload: { id } });
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPosts, removeBlogPost },
  { blogPosts: [] }
);
