import  React, {Fragment} from 'react';

import { Grid } from 'semantic-ui-react';


const I18n = require('react-redux-i18n').I18n;

class PageFooter extends React.Component {

	componentWillMount() {
		window.innerWidth <= 767 ? this.setState({ visible: false }) : '';
	}
	state = {
		visible: true,
		activeItem: 'home'
	}
	setVisible = () => {
		this.setState({ visible: !this.state.visible })
	}
	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name }, () => {
			console.log(this.state.activeItem)
		})
	}


	render() {


		return (
			<Fragment>
			<Grid.Row className='footer-section'>
			<Grid.Column computer={16} className='footer-head'>
				
				
			</Grid.Column>	
			
		</Grid.Row>
		<Grid.Row  className='footer-section footer-bottom'>
			<Grid.Column  computer={4} mobile={1} tablet={2}  largeScreen={4}>
				
				
			</Grid.Column>	
			<Grid.Column computer={3} mobile={7} tablet={3}  largeScreen={3}>
				<p>
					{I18n.t("footer.needhelp")}
				</p>
				<p className='p-body'>
				{I18n.t("footer.requestDemo")}
					
				</p>
				<p className='p-body'>
				{I18n.t("footer.terms")}
					
				</p>
				<p className='p-body'>
				{I18n.t("footer.privacy")}
					
				</p>
			</Grid.Column>
			<Grid.Column computer={3} mobile={7} tablet={3}  largeScreen={3}>
				<p>
				{I18n.t("footer.contact")}
					
				</p>
				<p className='p-body'>
				{I18n.t("footer.liveChat")}
					
				</p>
				<p className='p-body'>
				{I18n.t("footer.phone")}
					
				</p>
				<p className='p-body'>
				{I18n.t("footer.fax")}
					
				</p>
				<p className='p-body'>
				{I18n.t("footer.email")}
					
				</p>
			</Grid.Column>
			<Grid.Column  computer={4} mobile={16} tablet={4}  largeScreen={4}>
				<p className='p-body copyright'>
				{I18n.t("footer.copyright")}
					
				</p>
				
			</Grid.Column>	
		</Grid.Row>
		</Fragment>

		);
	}
}

export default PageFooter;