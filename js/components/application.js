import React from 'react';

class Application extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className='react'>
				<Navbar className='navigation col-md-2' />
					{this.props.children}
				</div>
			</div>
		)
	}
}

module.exports = Application;