import React from 'react';
import 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';

export default function Form(props){
		return(
			<div className='form-div col-md-12'>
				<form className='form-inline formDiv col-md-8' onSubmit={props.onSubmit}>
					<input className='form-control col-md-8' search type='text' name='artist' placeholder='Search Artist' />
					<input className='btn btn-default' type='submit' placeholder='Search' onSubmit={props.onSubmit} />
				</form>
			</div>
		)
	}

export default connect(Form);