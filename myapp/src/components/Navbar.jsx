import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography varient='h5'>
                        CATS AND DOGS
                    </Typography>
                    <Link to='/login'>
                        <Button variant='cointained'>Login</Button>
                    </Link> 
                    <Link to='/signup'>
                        <Button variant='cointained'>Signup</Button>
                    </Link>
                    <Link to='/state'>
                        <Button variant='cointained'>State</Button>
                    </Link>
                    <Link to='/counter'><Button variant='contained'>Counter</Button>
                    </Link>
                    <Link to='/use'><Button variant='contained'>Use</Button>
                    </Link>
                    <Link to='/api'><Button variant='contained'>Api</Button>
                    </Link>
                    <Link to='/poki'><Button variant='contained'>Poki</Button>
                    </Link>
                    
                    
                </Toolbar>
            </AppBar>
            
            <br /><br /><br /><br />
        </div>
    )
}

export default Navbar
