import 'Css/home.less';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';


const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	appFrame: {
		height: '100vh',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	appBar: {
		position: 'absolute',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'appBarShift-left': {
		marginLeft: drawerWidth,
	},
	'appBarShift-right': {
		marginRight: drawerWidth,
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	hide: {
		display: 'none',
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	'content-left': {
		marginLeft: -drawerWidth,
	},
	'content-right': {
		marginRight: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'contentShift-left': {
		marginLeft: 0,
	},
	'contentShift-right': {
		marginRight: 0,
	},
});


class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			teste: 'teste'
		};
	}

	render() {
		const { classes } = this.props;
		return (
			<main
				className={classNames(classes.content, classes['content-left'], {
					[classes.contentShift]: open,
					[classes['contentShift-left']]: open,
				})}
			>
				<div className={classes.drawerHeader} />
				<Typography>{this.state.teste}</Typography>
			</main>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
