import * as React from 'react';
import MainLayout from './layouts/main-layout';
import { getCurrentLocale } from './shared/helpers';
import { connect } from 'react-redux';

interface props{
lang: string;
}
function mapStateToProps(state) {
	return {
		lang: getCurrentLocale(state)
	};
}

class App extends React.Component<props, {}> {
	constructor(props) {
		super(props);
		if (this.props.lang === 'ar') {
			require('./shared/styles/ar.scss');
			}
		else {
			require('./shared/styles/en.scss');
		}
	}
	
	render() {
		return (

			<MainLayout/>
		
		);
	}
}

export default connect(mapStateToProps)(App);
