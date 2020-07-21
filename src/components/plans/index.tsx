import React, { Fragment } from 'react';

import { Grid, Card, Checkbox, Button, Modal,Label,Container,Radio } from 'semantic-ui-react';
import { Form } from "formsy-semantic-ui-react";



const I18n = require('react-redux-i18n').I18n;

class Plans extends React.Component {


	state = {
		planModal: false
	}


	closeModal = () => {
		this.setState({
			planModal: false
		})
	}

	handleSubmit=()=>{
		
	}
	render() {

		const errorLabel = <Label color="red" pointing />

		return (
			<Fragment>
				<Grid.Row className='cards-section'>
					<Grid.Column computer={2} mobile={1} tablet={2}  largeScreen={2} className='card-plan'>
					</Grid.Column>

					{/* enterprize */}
					<Grid.Column computer={4} mobile={16} tablet={6}  largeScreen={4} className='card-plan'>
						<Card className='no-offer'>
							<div className='card-header'>
								<p> {I18n.t("plans.plan1.head")}</p>
							</div>
							<div className='price-section'>
								<p>{I18n.t("plans.plan1.desc")}</p>
								<p className='price'>{I18n.t("plans.plan1.price")}</p>
							</div>
							<Card.Content>
								<Card.Meta>{I18n.t("plans.plan1.workspaces")}</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan1.workspacesDesc")}
      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan1.dailyPosts")}
									
								</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan1.dailyPostsDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan1.users")}
									
								</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan1.usersDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan1.customerSupport")}
									
								</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan1.customerSupportDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan1.training")}
									
								</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan1.trainingDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content className='last-content'>
								<Card.Meta>
								{I18n.t("plans.plan1.historical")}
									
								</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan1.historicalDesc")}

      						</Card.Description>
							</Card.Content>


						</Card>

					</Grid.Column>

					{/* Premium */}
					<Grid.Column computer={4} mobile={16} tablet={6}  largeScreen={4} className='card-plan'>
						<Card>
							<div className='card-header'>
								<p>
								{I18n.t("plans.plan2.head")}
									
								</p>
							</div>
							<div className='price-section '>
								<p>
								{I18n.t("plans.plan2.desc")}

									
							</p>
								<p className='price'>
								{I18n.t("plans.plan2.price")}
									
								</p>
								<p className='toggle'>
									<span>
								{I18n.t("plans.plan2.monthly")}
										</span>
									<Checkbox toggle defaultChecked/>
									<span>
								{I18n.t("plans.plan2.yearly")}

									</span>


								</p>
							</div>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan2.workspaces")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan2.workspacesDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan2.dailyPosts")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan2.dailyPostsDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan2.users")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan2.usersDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan2.customerSupport")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan2.customerSupportDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan2.training")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan2.trainingDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan2.historical")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan2.historicalDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content className='btn-content'>
								<Button
									onClick={() => {
										this.setState({
											planModal: true
										})
									}
									}>
									
								{I18n.t("plans.plan2.btn")}
									
						</Button>
							</Card.Content>


						</Card>

					</Grid.Column>

					{/* enterprize */}
					<Grid.Column computer={4} mobile={16} tablet={6}  largeScreen={4} className='card-plan plan-3'>
						<Card className='no-offer'>
							<div className='card-header'>
								<p> 
								{I18n.t("plans.plan3.head")}
									
								</p>
							</div>
							<div className='price-section'>
								<p>
								{I18n.t("plans.plan3.desc")}
									
									</p>
								<p className='price'>
								{I18n.t("plans.plan3.price")}
									
								</p>
							</div>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan3.workspaces")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan3.workspacesDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan3.dailyPosts")}

								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan3.dailyPostsDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan3.users")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan3.usersDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan3.customerSupport")}
									
								</Card.Meta>
								<Card.Description>
									
								{I18n.t("plans.plan3.customerSupportDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan3.training")}
									
								</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan3.trainingDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content>
								<Card.Meta>
								{I18n.t("plans.plan3.historical")}
									
								</Card.Meta>
								<Card.Description>
								{I18n.t("plans.plan3.historicalDesc")}

      						</Card.Description>
							</Card.Content>
							<Card.Content className='btn-content'>
								<Button
									onClick={() => {

									}
									}>
									
								{I18n.t("plans.plan3.btn")}

						</Button>
							</Card.Content>


						</Card>

					</Grid.Column>
				</Grid.Row>

				<Modal size='small' open={this.state.planModal} onClose={this.closeModal}>
					<Modal.Content >
							<Container className='modal-content'>
							<p className='upgrade-text'>
							{I18n.t("modal.head")}
								
							</p>
							<p className='underline'></p>
							<div className='price-section price-section-modal'>
								<span className='price'>
									{I18n.t("modal.price")}	
								</span>
								<p className='toggle'>
									<span>
									{I18n.t("modal.monthly")}	
										
									</span>
									<Checkbox toggle defaultChecked />
									<span className='year-offer'>
									{I18n.t("modal.yearly")}	
										</span>


								</p>
								<p className='payment-desc'>
								{I18n.t("modal.desc")}	
									</p>

								<Grid>
									<Grid.Row>
										<Grid.Column width='11' className='credit-check'>
										<Radio label={I18n.t("modal.credit")} defaultChecked/>
										</Grid.Column>
										<Grid.Column width='2'>
											<img src="/public/assets/images/visa-card.png" alt=""/>
											
										</Grid.Column>
										<Grid.Column width='2'>
										<img src="/public/assets/images/master-card.png" alt=""/>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</div>
							<Form onValidSubmit={this.handleSubmit}>
								<Form.Field>
										<Form.Input
											name="cardHolder"
											required
											placeholder={I18n.t("modal.name")}
											
											validationErrors={{
												isDefaultRequiredValue: 'Required',
											
											}}
											errorLabel={errorLabel}
											 />
								</Form.Field>
								<Form.Field>
										<Form.Input
											name="cardHolder"
											required
											placeholder={I18n.t("modal.number")}
											className='card-number'
											validationErrors={{
												isDefaultRequiredValue: 'Required',
											
											}}
											errorLabel={errorLabel}
											icon={<img src="/public/assets/images/visa-card.png" alt=""/>}
											 />
											

								</Form.Field>		
								<Form.Group >
									<Form.Field width={3}>
										<Form.Input
											name="cardHolder"
											required
											placeholder={I18n.t("modal.month")}
											validationErrors={{
												isDefaultRequiredValue: 'Required',
											
											}}
											errorLabel={errorLabel}
											 />
									</Form.Field>
									<Form.Field width={3}>
										<Form.Input
											name="cardHolder"
											required
											placeholder={I18n.t("modal.year")}
											validationErrors={{
												isDefaultRequiredValue: 'Required',
											
											}}
											errorLabel={errorLabel}
											 />
									</Form.Field>
									<Form.Field width={1}>
									</Form.Field>
									<Form.Field width={9}>
										<Form.Input
											name="cardHolder"
											required
											placeholder={I18n.t("modal.cvv")}
											
											validationErrors={{
												isDefaultRequiredValue: 'Required',
											
											}}
											errorLabel={errorLabel}
											 />
									</Form.Field>
								</Form.Group>
								<Form.Field width={16} className='terms-container'>
									<Checkbox defaultChecked />
									<span className='accept-term'> 
										{I18n.t("modal.accept")}
									 </span> 
									 <span className='terms'>
										{I18n.t("modal.terms")}
									 </span>

								</Form.Field>
								
								<Form.Button  type='submit' fluid>
								{I18n.t("modal.pay")}

								</Form.Button>
							</Form>
							</Container>
					</Modal.Content>
				</Modal>

			</Fragment>



		);
	}
}

export default Plans;