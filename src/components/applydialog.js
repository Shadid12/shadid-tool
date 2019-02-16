import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DialogActions from '@material-ui/core/DialogActions';

const styles = theme => ({
    field: {
    }
});

class ApplyDialogComponent extends Component {
    state = {
        open: false,
        gilad: false,
        another: false,
        another2: false
    };

    componentDidMount() {
        this.setState({ open: this.props.isOpen })
    }

    handleClose = () => {
        // this.setState({ open: false });
        this.props.parentHandler();
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { gilad, another, another2 } = this.state;
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Select Conditions that apply to this patient"}</DialogTitle>
                    <DialogContent>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Assign items</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
                                    }
                                    label="Gilad Gray"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={another} onChange={this.handleChange('another')} value="another" />
                                    }
                                    label="Another Effect"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={another2} onChange={this.handleChange('another2')} value="another2" />
                                    }
                                    label="Another Effect 2"
                                />
                            </FormGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={this.handleClose} 
                            color="primary"
                        >
                            Apply
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

  
export default withStyles(styles)(ApplyDialogComponent);