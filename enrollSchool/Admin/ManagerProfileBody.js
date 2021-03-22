import React from 'react'
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({

    divider: {
        // Theme Color, or use css color in quote
        backgroundColor: theme.palette.divider,
    },
   
 containerMain:{
    padding: theme.spacing(3),

 },
 card1:{
   width:"500px",
   height:"400px"
 }


}));
function ManagerProfileBody() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={9} >

                <Grid item lg={3} xs={12}>    
                <Box p={3}></Box>      
                    <Card className={classes.class1} >
                       
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Divider style={{height: 2, backgroundColor: "red"}} />

                            <Typography variant="h5" component="h2">
                            FIRST
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                            adjective
                            </Typography>

                            <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>

                             </CardContent>
                           <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>

                    </Card>
                        </Grid>

                <Grid item lg={9} >
                <Box padding={3}></Box>      

                    <Grid container direction = "column">
                        <Grid item lg={8}>
                        <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Divider style={{height: 3, backgroundColor: "red"}} />

                            <Typography variant="h5" component="h2">
                            SECOND
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                             </CardContent>
                           <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                        </Grid>
                        <Grid item lg={8}>
                        <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                             SECOND2
                             </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                             </CardContent>
                           <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                            </Grid>

                    </Grid>
                    </Grid>
               

            </Grid>

        </div>
    )
}

export default ManagerProfileBody
