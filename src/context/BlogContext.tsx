import React from "react";
const BlogContext = React.createContext({});

export const BlogProvider: React.FC = ({ children }) => {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};

export default BlogContext;
