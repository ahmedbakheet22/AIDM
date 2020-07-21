import * as React from 'react';

import LangSwitcher from '../../shared/lang-switcher';
import { Menu,Button,Grid } from 'semantic-ui-react';



const I18n = require('react-redux-i18n').I18n;

class PageHeader extends React.Component {

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
		const { activeItem } = this.state


		return (

			<Grid.Row className='header-section'>
							<Grid.Column computer={16}>
								
			<Menu stackable className='header-page'>

				<Menu.Menu position='right'>
					<Menu.Item
						name='home'
						onClick={this.handleItemClick}
						active={activeItem === 'home'}
					>
						{I18n.t("menu.home")}

					</Menu.Item>

					<Menu.Item
						name='price'
						onClick={this.handleItemClick}

						active={activeItem === 'price'}
					>
						{I18n.t("menu.pricing")}

					</Menu.Item>

					<Menu.Item
						name='contact'
						onClick={this.handleItemClick}
						active={activeItem === 'contact'}
						className='last-item'
					>
						{I18n.t("menu.contact")}

					</Menu.Item>
					<Menu.Item
						name='sign-up'
						className='sign-up'
					>
						{I18n.t("menu.signUp")}

					</Menu.Item>
					<Menu.Item
						name='sign-in'
						className='sign-in'
					>
						<Button className='add-new-provider-btn'
							onClick={() => {
								
							}
							}>
						{I18n.t("menu.signIn")}
						</Button>

					</Menu.Item>

					<Menu.Item
						name='lng'
					>
						<LangSwitcher />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
							</Grid.Column>	
						</Grid.Row>


		);
	}
}

export default PageHeader;