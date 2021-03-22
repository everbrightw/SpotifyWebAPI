import React, { Component } from 'react';
import { TabList, Tab, Tabs, TabPanel} from 'react-tabs';
import TabHome from './tabs/TabHome'
import TabSearch from './tabs/TabSearch'
import '../css/TabsNav.css'
import TabSearchContent from "./TabSearchContent"
import TabHomeContent from "./TabHomeContent"

class TabComponent extends Component {

    state = {
        tabIndex: 0
    };

    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabHome/>
                            <p style={{marginBottom: '1.875rem'}}>New Releases</p>
                        </Tab>

                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabSearch/>
                            <p style={{marginBottom: '1.875rem'}}>Search</p>
                        </Tab>
                    </TabList>
                    {/* tan contents */}
                    <TabPanel>
                        <TabHomeContent />
                    </TabPanel>
                    <TabPanel>
                        <TabSearchContent />
                    </TabPanel>
                </Tabs>

            </div>
        );
    }
}

export default TabComponent;