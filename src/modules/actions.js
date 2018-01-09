import React, { Component } from 'react';
import constants from './actionConstants';

const {
    REGISTER_USER
} = constants;

export function registerUser(){
    return(dispatch, store)=>{
        const payload = {
            data:{
                userName:"testing",
                email:"sample@sample.com"
            }
        };
		request.post("http://localhost:3002/api/login").send(payload).finish((error, res)=>{
			dispatch({
				type:REGISTER_USER,
				payload:res.body
			});
		});

    };

}

function handleRegister(state, action){
	return update(state, {
		booking:{
			$set:action.payload
		}
	})
}

const ACTION_HANDLERS = {
    REGISTER_USER:handleRegister

}