import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../../CSS/section3/Projects/MyTabs.css'

import ghibli from '../../../img/section3/proj/ghibli.png'
import hero from '../../../img/section3/proj/hero.png'
import hangman from '../../../img/section3/proj/hangman.png'

const MyTabs = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <div className="major">
                        Web Development
                    </div>
                </Tab>
                <Tab>
                    <div className="major">
                        Embedded System
                    </div>
                </Tab>
            </TabList>

            <TabPanel>
                <div className="projects-grid">
                    <div className='project-item'>
                        <img src={hero} alt="" />
                        <div className="description">
                            <h1>Wiki Hero App</h1>
                            <p>
                                A React-Redux application with multiple componenets using Super Hero API, Material UI
                                and Axios to show, search and filter characters information.
                            </p>
                        </div>
                    </div>
                    <div className='project-item'>
                        <img src={ghibli} alt="" />
                        <div className="description">
                            <h1>Ghibli Studio App</h1>
                            <p>
                                A React application with multiple componenets using Ghibli Studio API, Material UI and Axios
                                to show and filter the movies info.
                            </p>
                        </div>
                    </div>
                    <div className='project-item'>
                        <img src={hangman} alt="" />
                        <div className="description">
                            <h1>Hangman game App</h1>
                            <p>
                            Classic Hang-man game, a React-Redux application with multiple componenets, Material UI and framer-motion.
                            </p>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="projects-grid"></div>
            </TabPanel>
        </Tabs>
    )
}

export default MyTabs