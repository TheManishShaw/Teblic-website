import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import InnerPage from '../../components/InnerPage'
import NavBar from '../../components/NavBar'
import AiContent from './subpages/AiContent'

const Ai = () => {
  return (
    <>
      <NavBar />
      <InnerPage heading="UNLOCK FUTURE" heading2="NOW" />
      <AiContent />
      <Footer />
    </>
  );
}

export default Ai;