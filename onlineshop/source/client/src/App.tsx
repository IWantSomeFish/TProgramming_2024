import React from 'react';

import './App.css';
import { Button, Grid2, TextField } from '@mui/material';
import getProjects from './components/getProjects';
import getUsers from './components/getUsers';

const App: React.FC = () => (
<div className="App" style={{paddingTop: 30}}>
    <div className='Grid' style={{paddingLeft: 30}}>
        <Grid2 container spacing={2}>
        <Grid2>
            <div className='Users'>
                <TextField defaultValue="-1" id="user_id" label="Outlined" variant="outlined"/>
            </div>
            <div>
                <Button variant="contained" onClick={getUsers}>Get all users</Button>
            </div>   
        </Grid2>
        <Grid2>
            <div className='Projects'>
                <TextField defaultValue="-1" id="project_id" label="Outlined" variant="outlined" />
            </div>
            <div>
                <Button variant="contained" onClick={getProjects}>Get all projects</Button>
            </div>
        </Grid2>
        </Grid2>
    </div>
</div>
);

export default App;
