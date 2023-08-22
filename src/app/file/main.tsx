"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

function MainLab() {
  const [value, setValue] = useState('1');
  const [tabCount, setTabCount] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const addTab = () => {
    const newTabCount = tabCount + 1;
    setTabCount(newTabCount);
    setValue(newTabCount.toString());
  };

  const renderTabs = () => {
    const tabs = [];
    for (let i = 1; i <= tabCount; i++) {
      tabs.push(
        <Tab  key={i} label={`Floor ${i}`} value={i.toString()} sx={{textTransform:'none', color: "#A9ACB2"}} />
      );
    }
    return tabs;
  };

  const renderTabPanels = () => {
    const tabPanels = [];
    for (let i = 1; i <= tabCount; i++) {
      tabPanels.push(
        <TabPanel key={i} value={i.toString()} className='main__tab'>Floor {i}</TabPanel>
      );
    }
    return tabPanels;
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="main__header">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {renderTabs()}
            <Button onClick={addTab} sx={{textTransform:'none', color: 'rgba(255,255,255,0.5)'}}><AddIcon/> New Floor Plan</Button>
          </TabList>
        </Box>
        {renderTabPanels()}
      </TabContext>
    </Box>
  );
}

export default MainLab;
