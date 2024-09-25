import { Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname, setfname] = useState("muzammil")
    var[a, seta]=useState()
    const dff = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
        
    }
    const handleinput = (e) => {
        seta(fname)
    }
    
    return (
    <div>
            <Typography variant='h4'>Welcome {a}</Typography>
            <TextField variant='outlined' onChange={dff} />
            <Button variant='contained' onClick={handleinput} >submit</Button>
            
            
    </div>
  )
}

export default Statebasics
