import React from 'react'
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Blogs from './Blogs'
import BlogContent from './elements/BlogContent';
const BlogView = () => {
  return (
    <>
      <NavBar />
      <BlogContent/>
      <Footer />
    </>
  );
}

export default BlogView 