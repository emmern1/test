import ReactDOM from 'react-dom';
import React from 'react';
import css from './style.css';


var App = React.createClass({
	render() {
		return (<div className={css.seksjon}>
					<div className={css.title1}>hallo hallo px</div>
					<div className={css.title2}>hallo hallo pt</div>
					<div className={css.title3}>hallo hallo %</div>
					<div className={css.title4}>hallo hallo vw</div>
					<div className={css.title5}>hallo hallo em</div>
				</div>);
	}


})





ReactDOM.render(
	<App />,
	document.getElementById('root'))