import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'


const Counter = () => {
    // place to stotre 
    var [cnt, statement] = useState(0)

    // funvtion to substract and give it to satement 
    const clkd = () => {
        statement(cnt = cnt - 1)
    }
    const clku = () => {
        statement(cnt = cnt + 1)
    }

    return (

        <div>
            <Typography variant='h6'>Count is {cnt}</Typography><br />
            <Button variant='outlined' onClick={clku}>+</Button>
            <Button variant='outlined' onClick={clkd}>-</Button>

        </div>
    )
}

export default Counter
