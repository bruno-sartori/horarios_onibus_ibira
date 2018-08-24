import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Home from 'Components/Home';
import NotFound from 'Components/NotFound';

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

class Container extends Component {
	constructor(props) {
		super(props);

		this.isMobile = false;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			this.isMobile = true;
		}

		this.state = {
			rehydrated: false,
			open: false,
			anchor: 'left'
		};
	}

	componentWillMount() {
		this.setState(() => ({ rehydrated: true }));
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleChangeAnchor = (event) => {
		this.setState({
			anchor: event.target.value,
		});
	};

	render() {
		if (!this.state.rehydrated) {
			return (<div>Loading...</div>);
		}

		const { classes, theme } = this.props;
		const { anchor, open } = this.state;

		const drawer = (
			<Drawer
				variant="persistent"
				anchor={anchor}
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={this.handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>{}</List>
				<Divider />
				<List>{}</List>
			</Drawer>
		);

		let before = null;
		let after = null;

		if (anchor === 'left') {
			before = drawer;
		} else {
			after = drawer;
		}

		return (
			<div className="App" id="app">
				<div className={classes.root}>
					<div className={classes.appFrame}>
						<AppBar
							className={classNames(classes.appBar, {
								[classes.appBarShift]: open,
								[classes[`appBarShift-${anchor}`]]: open,
							})}
						>
							<Toolbar disableGutters={!open}>
								<IconButton
									color="inherit"
									aria-label="Open drawer"
									onClick={this.handleDrawerOpen}
									className={classNames(classes.menuButton, open && classes.hide)}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="title" color="inherit" noWrap>
									Persistent drawer
								</Typography>
							</Toolbar>
						</AppBar>
						{before}
						<main
							className={classNames(classes.content, classes[`content-${anchor}`], {
								[classes.contentShift]: open,
								[classes[`contentShift-${anchor}`]]: open,
							})}
						>
							<div className={classes.drawerHeader} />
							<Switch>
								<Route path="/" exact render={props => (<Home {...props} />)} />
								<Route render={props => (<NotFound {...props} />)} />
							</Switch>
						</main>
						{after}
					</div>
				</div>
			</div>
		);
	}
}

Container.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.object,
	theme: PropTypes.object,
};

Container.defaultProps = {
	children: void 0,
	classes: void 0,
	theme: void 0
};

export default withStyles(styles, { withTheme: true })(Container);
