import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => state, {})
export default class Child extends Component {
	componentDidMount(){
	}

	render(){
		return (
			<div>Child</div>
		)
	}
}