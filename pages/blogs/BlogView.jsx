import Head from 'next/head';
import React from 'react';
import NavBar from '../../components/NavBar';
import BlogContent from './elements/BlogContent';
const BlogView = () => {
  return (
    <>
    <Head>
      <title>Blog Details</title>
    </Head>
    <NavBar/>
      <BlogContent/>
 
    </>
  );
}

export default BlogView;