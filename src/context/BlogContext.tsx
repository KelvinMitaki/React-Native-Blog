import React from "react";
import createDataContext from "./createDataContext";

interface State {
  blogPosts: { title: string }[];
}

interface Action {
  type: "addBlogPosts" | "removeBlogPost";
  payload: { title: string };
}

type UseReducer = (state: State, action: Action) => State;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addBlogPosts":
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          { title: `Blog Post #${state.blogPosts.length + 1}` }
        ]
      };
    case "removeBlogPost":
      return {
        ...state,
        blogPosts: state.blogPosts.filter(
          bp => bp.title !== action.payload.title
        )
      };
    default:
      return state;
  }
};

const addBlogPosts = (dispatch: React.Dispatch<Action>) => {
  return () => {
    dispatch({
      type: "addBlogPosts",
      payload: { title: `Blog Post #1` }
    });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPosts },
  { blogPosts: [] }
);
