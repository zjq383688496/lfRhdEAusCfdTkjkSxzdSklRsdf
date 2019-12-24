import NestedRoute from './NestedRoute'
import StatusRoute from './StatusRoute'
import loadable from '@loadable/component'
import { fetchTopList, fetchTopDetail } from '../store/actions'

const router = [
	{
		path: '/home',
		component: loadable(() => import('../page/Home')),
		routes: [
			{
				path: '/home/child',
				component: loadable(() => import('../page/Child'))
			}
		]
	}
]

export default router

export {
	router,
	NestedRoute,
	StatusRoute
}
