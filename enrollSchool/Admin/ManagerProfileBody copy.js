import React from 'react'
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    container1:{
 
           
        backgroundColor:"red",


    },
    container2:{
       height:"100%",
        
        backgroundColor:"red",

    },
    container3:{
        padding:theme.spacing(5),
        height:"255px",
        width:"100%",
        backgroundColor:"orange"

    },
    item1:{
        height:"290px",
        padding:theme.spacing(2),
        
        backgroundColor:"grey"

    },
    item11:{
        padding:theme.spacing(2),
        height:"290px",
        
        backgroundColor:"green"

    },
    item2:{
        padding:theme.spacing(2),
        height:"100",

        
        backgroundColor:"blue"

    },
    item22:{
        height:"100%",

        
        minWidth:"100%",

  

        
        backgroundColor:"violet"

    },
    item21:{
        height:"100%",

        
        minWidth:"100%",

        
        backgroundColor:"blue"

    },
    item3:{
        // padding:theme.spacing(2),
        height:"250px",
        width:"80%",
        
        backgroundColor:"black",

    },
    item31:{
        padding:theme.spacing(),
        height:"350px",
        width:"80%",
        
        backgroundColor:"violet",

    },
    card1:{
        
        height:"100%",

        
        width:"100%",
        
        backgroundColor:"black"

    },
    card2:{
        
        height:"100%",

        
        width:"100%",
        
        backgroundColor:"yellow"

    },

    card3:{
        
        height:"100%",

        
        width:"100%",
        
        backgroundColor:"pink"

    },


}));
function ManagerProfileBody() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.container1}   
                direction="row"
                justify="space-evenly"
                alignItems="flex-start">
                    
                <Grid item className={classes.item1} lg={5} md={8}   xs={12}>

                        <Grid container className={classes.container2} 
                         direction="column"
                         justify="space-evenly"
                         alignItems="center">
                            
                                <Grid item  className={classes.item21} lg={5} xs={5}   >
                                    <Card className={classes.card1}>

                                    </Card>
                                    </Grid>
                                <Grid item className={classes.item22} lg={5} xs={5} >
                                <Card className={classes.card2}>

                                        </Card>
                                   </Grid> 

                        </Grid>

                            
                        </Grid>

                <Grid item className={classes.item11} lg={5}  md={8} xs={12} >
                <Card className={classes.card3}>

                        </Card>
                     </Grid>

            </Grid>
             
        </div>
    )
}

export default ManagerProfileBody
