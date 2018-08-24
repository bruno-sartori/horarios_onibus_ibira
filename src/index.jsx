import 'Css/main.less';
import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Container from 'Components/assets/Container';
import registerServiceWorker from './registerServiceWorker';

export default class AppProvider extends Component {
	constructor() {
		super();

		this.state = { rehydrated: false };

		this.history = createHistory();
	}

	componentWillMount() {
		this.setState(() => ({ rehydrated: true }));
	}

	componentDidMount() {
		$(document).on('click', 'a[href^="#"]', function(event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 1000);
		});

		function isVisible(elem) {
			const docViewTop = $(window).scrollTop();
			const docViewBottom = docViewTop + $(window).height();

			const elemTop = $(elem).offset().top;
			const elemBottom = elemTop + $(elem).height();

			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}

		$(window).scroll(() => {
			$('.showme').each(function() {
				if (isVisible(this)) {
					$(this).animate({ opacity: '1' }, 1000);
				} else {
					$(this).css({ opacity: '0' });
				}
			});
		});


		$(window).scroll(function() {
			const st = $(this).scrollTop();
			$('.hideme').css({ opacity: 1 - st / 600 });
		});
	}

	render() {
		if (!this.state.rehydrated) {
			return (
				<div> Loading... </div>
			);
		}

		return (
			<Router history={this.history}>
				<Switch>
					<Route path="/" render={props => (<Container {...props} />)} />
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<AppProvider />, document.getElementById('root'));
registerServiceWorker();
