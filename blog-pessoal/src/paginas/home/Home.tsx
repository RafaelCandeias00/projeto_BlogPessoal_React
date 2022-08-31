import React from "react";
import { Paper, Box, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Paper>
                <Box p={2}>
                    <Box display={"flex"} justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img src="https://pixabay.com/images/id-7413333/" alt="" style={{ width: "100%"}} height="100%"/>
                    <Box p={2} display={"flex"} justifyContent="center">
                        <Button variant="contained" color="primary">
                            Texto 1
                        </Button>
                        <Button variant="contained" color="secondary">
                            Texto 2
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;