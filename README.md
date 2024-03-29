# PORTFOLIO

## Table of content

[General Description](#general-description)

[Technologies](#technologies)

[Project Structure](#project-structure)

[Instruction](#instruction)

[React + Vite](#react--vite)

## General Description

> My portfolio built with ReactJS, animation by framer-motion. The portfolio provides details about my background, so that you can understand more about my life.

## Technology

-   JavaScript
-   React + Vite
-   HTML / CSS
-   Routing (react-router-dom)
-   Framer-motion

## Project Structure

[src/](./src)
* [components/](./src/components)
  * [section1/](./src/components/section1)
    * [sidebar/](./src/components/section1/sidebar)
      * [Links.jsx](./src/components/section1/sidebar/Links.jsx)
      * [Sidebar.jsx](./src/components/section1/sidebar/Sidebar.jsx)
      * [ToggleButton.jsx](./src/components/section1/sidebar/ToggleButton.jsx)
    * [Banner.jsx](./src/components/section1/Banner.jsx)
    * [Header.jsx](./src/components/section1/Header.jsx)
    * [ResumeButton.jsx](./src/components/section1/ResumeButton.jsx)
  * [section2/](./src/components/section2)
    * [Astronaut.jsx](./src/components/section2/Astronaut.jsx)
    * [Parallax.jsx](./src/components/section2/Parallax.jsx)
    * [Portals.jsx](./src/components/section2/Portals.jsx)
  * [section3/](./src/components/section3)
    * [AboutMe/](./src/components/section3/AboutMe)
      * [AboutMe.jsx](./src/components/section3/AboutMe/AboutMe.jsx)
      * [Cinephile.jsx](./src/components/section3/AboutMe/Cinephile.jsx)
      * [Finland.jsx](./src/components/section3/AboutMe/Finland.jsx)
      * [Football.jsx](./src/components/section3/AboutMe/Football.jsx)
      * [Introduction.jsx](./src/components/section3/AboutMe/Introduction.jsx)
      * [Introductory.jsx](./src/components/section3/AboutMe/Introductory.jsx)
      * [Music.jsx](./src/components/section3/AboutMe/Music.jsx)
      * [Travel.jsx](./src/components/section3/AboutMe/Travel.jsx)
    * [ContactMe/](./src/components/section3/ContactMe)
      * [ContactMe.jsx](./src/components/section3/ContactMe/ContactMe.jsx)
      * [PhoneSvg.jsx](./src/components/section3/ContactMe/PhoneSvg.jsx)
    * [Projects/](./src/components/section3/Projects)
      * [EmbeddedCarousel.jsx](./src/components/section3/Projects/EmbeddedCarousel.jsx)
      * [MyTabs.jsx](./src/components/section3/Projects/MyTabs.jsx)
      * [Projects.jsx](./src/components/section3/Projects/Projects.jsx)
      * [WebCarousel.jsx](./src/components/section3/Projects/WebCarousel.jsx)
    * [Skills/](./src/components/section3/Skills)
      * [CenterRotateWheel.jsx](./src/components/section3/Skills/CenterRotateWheel.jsx)
      * [CircularUI.jsx](./src/components/section3/Skills/CircularUI.jsx)
      * [ImageBox.jsx](./src/components/section3/Skills/ImageBox.jsx)
      * [SkillCarousel.jsx](./src/components/section3/Skills/SkillCarousel.jsx)
      * [Skills.jsx](./src/components/section3/Skills/Skills.jsx)
      * [skillSets.js](./src/components/section3/Skills/skillSets.js)
    * [CloseButton.jsx](./src/components/section3/CloseButton.jsx)
    * [Education.jsx](./src/components/section3/Education.jsx)
    * [Footer.jsx](./src/components/section3/Footer.jsx)
    * [Home.jsx](./src/components/section3/Home.jsx)
    * [Work.jsx](./src/components/section3/Work.jsx)
* [CSS/](./src/CSS)
  * [section1/](./src/CSS/section1)
    * [Banner.css](./src/CSS/section1/Banner.css)
    * [ConnectButton.css](./src/CSS/section1/ConnectButton.css)
    * [Header.css](./src/CSS/section1/Header.css)
    * [section1.css](./src/CSS/section1/section1.css)
    * [Sidebar.css](./src/CSS/section1/Sidebar.css)
  * [section2/](./src/CSS/section2)
    * [Parallax.css](./src/CSS/section2/Parallax.css)
    * [Portals.css](./src/CSS/section2/Portals.css)
  * [section3/](./src/CSS/section3)
    * [AboutMe/](./src/CSS/section3/AboutMe)
      * [AboutMe.css](./src/CSS/section3/AboutMe/AboutMe.css)
      * [Cinephile.css](./src/CSS/section3/AboutMe/Cinephile.css)
      * [Finland.css](./src/CSS/section3/AboutMe/Finland.css)
      * [Football.css](./src/CSS/section3/AboutMe/Football.css)
      * [Introduction.css](./src/CSS/section3/AboutMe/Introduction.css)
      * [Music.css](./src/CSS/section3/AboutMe/Music.css)
      * [Travel.css](./src/CSS/section3/AboutMe/Travel.css)
    * [Projects/](./src/CSS/section3/Projects)
      * [EmbeddedCarousel.css](./src/CSS/section3/Projects/EmbeddedCarousel.css)
      * [Projects.css](./src/CSS/section3/Projects/Projects.css)
      * [WebCarousel.css](./src/CSS/section3/Projects/WebCarousel.css)
    * [skills/](./src/CSS/section3/skills)
      * [CenterRotateWheel.css](./src/CSS/section3/skills/CenterRotateWheel.css)
      * [CircularUI.css](./src/CSS/section3/skills/CircularUI.css)
      * [ImageBox.css](./src/CSS/section3/skills/ImageBox.css)
      * [Skills.css](./src/CSS/section3/skills/Skills.css)
    * [ContactMe.css](./src/CSS/section3/ContactMe.css)
    * [Education.css](./src/CSS/section3/Education.css)
    * [Footer.css](./src/CSS/section3/Footer.css)
    * [Home.css](./src/CSS/section3/Home.css)
    * [Work.css](./src/CSS/section3/Work.css)
  * [App.css](./src/CSS/App.css)
* [img/](./src/img)
  * [section1/](./src/img/section1)
    * [banner.jpg](./src/img/section1/banner.jpg)
    * [bird.png](./src/img/section1/bird.png)
    * [email.png](./src/img/section1/email.png)
    * [github.svg](./src/img/section1/github.svg)
    * [linkedin.svg](./src/img/section1/linkedin.svg)
    * [location.png](./src/img/section1/location.png)
    * [me.jpg](./src/img/section1/me.jpg)
    * [phone.png](./src/img/section1/phone.png)
    * [whatsapp.png](./src/img/section1/whatsapp.png)
  * [section2/](./src/img/section2)
    * [astronaut.png](./src/img/section2/astronaut.png)
    * [earth.png](./src/img/section2/earth.png)
    * [in_portal.png](./src/img/section2/in_portal.png)
    * [out_portal.png](./src/img/section2/out_portal.png)
    * [stars.png](./src/img/section2/stars.png)
  * [section3/](./src/img/section3)
    * [aboutme/](./src/img/section3/aboutme)
      * [airplane.svg](./src/img/section3/aboutme/airplane.svg)
      * [ball.svg](./src/img/section3/aboutme/ball.svg)
      * [fishing.jpg](./src/img/section3/aboutme/fishing.jpg)
      * [football.jpg](./src/img/section3/aboutme/football.jpg)
      * [me.jpg](./src/img/section3/aboutme/me.jpg)
      * [movie.jpg](./src/img/section3/aboutme/movie.jpg)
      * [movie_icon.svg](./src/img/section3/aboutme/movie_icon.svg)
      * [music.svg](./src/img/section3/aboutme/music.svg)
      * [travel.jpg](./src/img/section3/aboutme/travel.jpg)
      * [waving-hand.svg](./src/img/section3/aboutme/waving-hand.svg)
    * [proj/](./src/img/section3/proj)
      * [dht22.jpg](./src/img/section3/proj/dht22.jpg)
      * [ghibli.png](./src/img/section3/proj/ghibli.png)
      * [handwash.png](./src/img/section3/proj/handwash.png)
      * [hangman.png](./src/img/section3/proj/hangman.png)
      * [hero.png](./src/img/section3/proj/hero.png)
      * [portfolio.png](./src/img/section3/proj/portfolio.png)
      * [raster.png](./src/img/section3/proj/raster.png)
      * [tma.png](./src/img/section3/proj/tma.png)
    * [skills/](./src/img/section3/skills)
      * [altium.png](./src/img/section3/skills/altium.png)
      * [arduino.png](./src/img/section3/skills/arduino.png)
      * [bitbucket.png](./src/img/section3/skills/bitbucket.png)
      * [c.png](./src/img/section3/skills/c.png)
      * [confluence.png](./src/img/section3/skills/confluence.png)
      * [cpp.png](./src/img/section3/skills/cpp.png)
      * [css.png](./src/img/section3/skills/css.png)
      * [docker.png](./src/img/section3/skills/docker.png)
      * [esp32.png](./src/img/section3/skills/esp32.png)
      * [framer-motion.png](./src/img/section3/skills/framer-motion.png)
      * [git.png](./src/img/section3/skills/git.png)
      * [github.png](./src/img/section3/skills/github.png)
      * [gitlab.png](./src/img/section3/skills/gitlab.png)
      * [html.png](./src/img/section3/skills/html.png)
      * [js.png](./src/img/section3/skills/js.png)
      * [linux.png](./src/img/section3/skills/linux.png)
      * [lora.png](./src/img/section3/skills/lora.png)
      * [matlab.png](./src/img/section3/skills/matlab.png)
      * [mui.png](./src/img/section3/skills/mui.png)
      * [netlify.png](./src/img/section3/skills/netlify.png)
      * [pcb.png](./src/img/section3/skills/pcb.png)
      * [python.png](./src/img/section3/skills/python.png)
      * [react.png](./src/img/section3/skills/react.png)
      * [redux.png](./src/img/section3/skills/redux.png)
      * [rtos.png](./src/img/section3/skills/rtos.png)
      * [schematic.png](./src/img/section3/skills/schematic.png)
      * [star.png](./src/img/section3/skills/star.png)
      * [stm32.png](./src/img/section3/skills/stm32.png)
      * [vscode.png](./src/img/section3/skills/vscode.png)
    * [award.svg](./src/img/section3/award.svg)
    * [bulbs.jpg](./src/img/section3/bulbs.jpg)
    * [certi.svg](./src/img/section3/certi.svg)
    * [degree.svg](./src/img/section3/degree.svg)
    * [laptop.png](./src/img/section3/laptop.png)
    * [tma.png](./src/img/section3/tma.png)
    * [wapice.png](./src/img/section3/wapice.png)
  * [icon.png](./src/img/icon.png)
* [App.jsx](./src/App.jsx)
* [main.jsx](./src/main.jsx)

## Instruction

1. Open your terminal and clone the repository with the following command:

```
git clone https://github.com/TinNguyen01600/portfolio
```

2. Install all the packages:

```
npm install
```

3. Start the application in your local machine:

```
npm run dev
```

\*\* Or simply access the deployed version on Netlify (https://tin-nguyen-portfolio.netlify.app/).

<pre>
Package use: 
    "@emailjs/browser": "^3.12.1",
    "framer-motion": "^10.16.16",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.1",
    "react-slick": "^0.29.0",
    "react-tabs": "^6.0.2",
    "reactjs-popup": "^2.0.6",
    "slick-carousel": "^1.8.1"
</pre>

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
