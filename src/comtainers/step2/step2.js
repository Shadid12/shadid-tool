import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PatientsListComponent from '../../components/patients'

const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: '20px'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        marginTop: '10px'
    }
});

class Step2Container extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid 
                    container 
                    spacing={24} 
                    direction="row"
                    justify="center"
                >
                    
                    <Grid 
                        item xs={6}
                    >
                        <Paper className={classes.paper}>
                            <Typography variant="h3" gutterBottom>
                                Patients List
                            </Typography>
                        </Paper>
                        <PatientsListComponent />
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Step2Container);
