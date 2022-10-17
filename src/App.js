import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Github from "./components/Github/Github";
import Contact from "./components/Contact/Contact";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

AOS.init();

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <div className="app">
      <Header burgerMenu={{ burgerMenu, setBurgerMenu }} />
      {burgerMenu ? (
        <BurgerMenu burgerMenu={{ burgerMenu, setBurgerMenu }} />
      ) : (
        <></>
      )}
      <div className="app-wrapper">
        <div className="list left">
          <a
            href="https://www.linkedin.com/in/paul-arthur-aim%C3%A9-a081b9252/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://github.com/paaime" target="_blank">
            <svg
              className="github"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <div className="line"></div>
        </div>
        <div className="content-wrapper">
          <Hero />
          <About />
          <Projects />
          <Github />
          <Contact />
          <Footer />
        </div>
        <div className="list right">
          <a href="mailto: aimepaularthur@gmail.com">
            aimepaularthur@gmail.com
          </a>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
