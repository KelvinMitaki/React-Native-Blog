import React from "react";
const BlogContext = React.createContext({});

export const BlogProvider: React.FC = ({ children }) => {
  const blogPosts = [
    { title: "Blog#1" },
    { title: "Blog#2" },
    { title: "Blog#3" },
    { title: "Blog#4" },
    { title: "Blog#5" }
  ];
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
