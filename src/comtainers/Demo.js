import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

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

class DemoContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography component="h2" variant="h1" gutterBottom>
                        Component Lists
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Paper className={classes.paper}>
                    <Typography variant="button" gutterBottom>
                        Step 1
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        In this component user can add a behaviour and behaviour and choose color.
                        User can also save the behaviours.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={() => { this.props.history.push('/step1') } }
                    >
                        View
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Paper className={classes.paper}>
                    <Typography variant="button" gutterBottom>
                        Step 2
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        This is the Patients list. In this list you will be able to attach created behaviours to patients
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={() => { this.props.history.push('/step2') } }
                    >
                        View
                    </Button>
                </Paper>
            </Grid>
            </Grid>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(DemoContainer));
