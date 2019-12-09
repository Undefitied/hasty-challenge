// @flow

export default (url: string, obj: Object) => {
	let u = url + '?'

	for (let p in obj) {
		u += p + '=' + obj[p] + '&'
	}

	return u
}