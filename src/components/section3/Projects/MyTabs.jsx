import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../../CSS/section3/Projects/MyTabs.css'

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
                <div className="projects-grid"></div>
            </TabPanel>
            <TabPanel>
                <div className="projects-grid"></div>
            </TabPanel>
        </Tabs>
    )
}

export default MyTabs