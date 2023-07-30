import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(3),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    
    pageTitle:{
         paddingLeft:theme.spacing(10),

        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
            
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
 
                <div className={classes.pageTitle}>
                    <Typography                      
                        variant="h5"
                        component="div">
                        {title}</Typography>
                   
                </div>
            </div>
        </Paper>
    )
}
