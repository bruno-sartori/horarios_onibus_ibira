import React, { Component } from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = () => ({
	inputLabelFocused: {
		color: '#fff',
	},
	inputLabel: {
		color: '#fff'
	},
	input: {
		color: '#fff'
	},
	textArea: {
		color: '#fff',
		paddingBottom: '11px'
	},
	inputInkbar: {
		'&:hover:before': {
			backgroundColor: '#fff'
		},
		'&:before': {
			backgroundColor: '#fff'
		},
		'&:after': {
			backgroundColor: '#fff',
		},
		'&:hover:not($disabled):before': {
			backgroundColor: '#fff'
		}
	},
	disabled: {

	}
});

class TextField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(event.target.value);
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<FormControl fullWidth>
				<InputLabel htmlFor={this.props.id} name={this.props.name} FormControlClasses={{ root: classes.inputLabel, focused: classes.inputLabelFocused }}>{this.props.label}</InputLabel>
				<Input
					multiline={this.props.multiline}
					rows={this.props.rows}
					type={this.props.type}
					id={this.props.id}
					value={this.state.value}
					classes={{ root: (this.props.multiline) ? classes.textArea : classes.input, inkbar: classes.inputInkbar, disabled: classes.disabled }}
					onChange={(event) => { this.handleChange(event); }}
				/>
			</FormControl>
		);
	}
}

TextField.propTypes = {
	rows: PropTypes.number,
	multiline: PropTypes.bool,
	type: PropTypes.string,
	label: PropTypes.string,
	classes: PropTypes.object,
	onChange: PropTypes.func,
	id: PropTypes.string,
	name: PropTypes.string
};

TextField.defaultProps = {
	rows: 1,
	multiline: false,
	type: '',
	label: '',
	classes: void 0,
	onChange: void 0,
	id: void 0,
	name: void 0
};

export default withStyles(styles)(TextField);
