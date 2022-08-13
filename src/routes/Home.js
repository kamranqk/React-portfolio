import React from "react";
import Educations from "../components/Educations";
import Skills from "../components/Skills";
import Contentblogs from "../components/Contentblogs";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

  function Home(){ 
    return(
      <main id="home">
        <Contentblogs />
        <Skills />
        <Educations />
        <Projects/>
        <Contacts/>
      </main>

    )
  }
  export default Home;