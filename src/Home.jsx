import React, { Suspense } from 'react'
import Hero from './Pages/Hero'
 
const About = React.lazy(() => import('./Pages/About'));
const Projects = React.lazy(() => import('./Pages/Projects'));
const Contactus = React.lazy(() => import('./Pages/Contactus'));
const Footer = React.lazy(() => import('./Pages/Footer'));
 
const Home = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contactus"><Contactus /></section>
        <Footer />
      </Suspense>
    </>
  )
}

export default Home