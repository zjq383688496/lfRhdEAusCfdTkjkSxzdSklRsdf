import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const StatusRoute = props => (
	<Route render={({ staticContext }) => {
		if (staticContext) staticContext.statusCode = props.code
		return props.children
	}} />
)

StatusRoute.propTypes = {
	code: PropTypes.number,
	children: PropTypes.node
}

export default StatusRoute
