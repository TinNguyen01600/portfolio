import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import WebCarousel from './WebCarousel';
import EmbeddedCarousel from './EmbeddedCarousel';

const MyTabs = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <div className="major" style={{fontSize: '3vh'}}>
                        Web Development
                    </div>
                </Tab>
                <Tab>
                    <div className="major" style={{fontSize: '3vh'}}>
                        Embedded System
                    </div>
                </Tab>
            </TabList>

            <TabPanel>
                <WebCarousel />
            </TabPanel>
            <TabPanel>
                <EmbeddedCarousel />
            </TabPanel>
        </Tabs>
    )
}

export default MyTabs