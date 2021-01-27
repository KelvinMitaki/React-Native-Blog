import React, { useState } from "react";
const BlogContext = React.createContext({});

export const BlogProvider: React.FC = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<{ title: string }[]>([]);
  const addBlogPosts = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` }
    ]);
  };
  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
