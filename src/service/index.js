function getTopList({ cookies }) {
	return fetch('/v8/fcg-bin/fcg_myqq_toplist.fcg')
}

function getTopDetail({ id, cookies }) {
	return fetch('/v8/fcg-bin/fcg_v8_toplist_cp.fcg')
}

export {
	getTopList,
	getTopDetail
}