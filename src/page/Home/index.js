import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => state, {})
export default class Home extends Component {
	componentDidMount(){
	}

	render(){
		return (
			<div>Home</div>
		)
	}
}