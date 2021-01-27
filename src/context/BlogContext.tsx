import React, { useReducer, useState } from "react";
const BlogContext = React.createContext({});

interface State {
  blogPosts: { title: string }[];
}

interface Action {
  type: "addBlogPosts";
  payload: { title: string };
}

type UseReducer = (state: State, action: Action) => State;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addBlogPosts":
      return { ...state, blogPosts: [...state.blogPosts, action.payload] };
    default:
      return state;
  }
};

export const BlogProvider: React.FC = ({ children }) => {
  const [{ blogPosts }, dispatch] = useReducer<UseReducer>(reducer, {
    blogPosts: []
  });

  const addBlogPosts = () => {
    dispatch({
      type: "addBlogPosts",
      payload: { title: `Blog Post #${blogPosts.length + 1}` }
    });
  };
  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
