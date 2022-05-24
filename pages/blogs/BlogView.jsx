import Head from 'next/head';
import React from 'react';
import BlogContent from './elements/BlogContent';
const BlogView = () => {
  return (
    <>
    <Head>
      <title>Blog Details</title>
    </Head>
      <BlogContent/>
 
    </>
  );
}

export default BlogView 