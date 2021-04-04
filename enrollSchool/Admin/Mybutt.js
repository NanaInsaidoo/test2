import { Button } from '@material-ui/core'
import React from 'react'

export default function Mybutt(props) {
    return (
        <div>
             <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    // type ="submit" 
                                    onClick={()=>props.name}                          
                          >
                                           BUTT
                                </Button>
        </div>
    )
}


