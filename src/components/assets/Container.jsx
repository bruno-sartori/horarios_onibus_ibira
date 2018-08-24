import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from 'Components/Home';
import NossaHistoria from 'Components/NossaHistoria';
import AreaCobertura from 'Components/AreaCobertura';
import PlanoRadio from 'Components/PlanoRadio';
import PlanoFibra from 'Components/PlanoFibra';
import Corporativo from 'Components/Corporativo';
import FaleConosco from 'Components/FaleConosco';
import NotFound from 'Components/NotFound';
import Header from './Header';
import Footer from './Footer';
import FooterMobile from './FooterMobile';

class Container extends Component {
	constructor(props) {
		super(props);

		this.isMobile = false;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			this.isMobile = true;
		}

		this.state = {
			rehydrated: false
		};
	}

	componentWillMount() {
		this.setState(() => ({ rehydrated: true }));
	}

	render() {
		if (!this.state.rehydrated) {
			return (<div>Loading...</div>);
		}

		return (
			<div className="App" id="app">
				<Header />
				<section style={{ overflowY: 'none' }}>
					<Switch>
						<Route path="/" exact render={props => (<Home {...props} />)} />
						<Route path="/a-jdnet" render={props => (<NossaHistoria {...props} />)} />
						<Route path="/area-de-cobertura" render={props => (<AreaCobertura {...props} />)} />
						<Route path="/planos-radio" render={props => (<PlanoRadio {...props} />)} />
						<Route path="/planos-fibra" render={props => (<PlanoFibra {...props} />)} />
						<Route path="/corporativo" render={props => (<Corporativo {...props} />)} />
						<Route path="/fale-conosco" render={props => (<FaleConosco {...props} />)} />
						<Route render={props => (<NotFound {...props} />)} />
					</Switch>
				</section>
				{ (this.isMobile === true) ? <FooterMobile /> : <Footer /> }
			</div>
		);
	}
}

Container.propTypes = {
	children: PropTypes.object
};

Container.defaultProps = {
	children: void 0
};

export default Container;
