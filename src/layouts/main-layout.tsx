import * as React from 'react';

import { Grid, Container} from 'semantic-ui-react';
import PageHeader from '../components/page-header'
import Plans from '../components/plans/index'
import PageFooter from '../components/page-footer'


const I18n = require('react-redux-i18n').I18n;

class MainLayout extends React.Component {
	




	render() {


		return (
			<Container fluid>
				<Grid>
						
								<PageHeader/>
							
						<Grid.Row className='content-section'>
							<Grid.Column computer={16}>
								<p className='section-text'>{I18n.t("main.description")}</p>
								
							</Grid.Column>	
						</Grid.Row>
						<Grid.Row className='upgrade-section'>
							<Grid.Column computer={16}>
								<p className='upgrade-text'>{I18n.t("main.upgrade")}</p>
								<p className='underline'></p>
								
							</Grid.Column>	
						</Grid.Row>
						<Plans/>
						<PageFooter/>
				</Grid>
			</Container>

		);
	}
}

export default MainLayout;