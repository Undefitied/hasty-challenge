import { API_KEY, API_URL } from '../constants/api'

export default ({
	url,
	options,
	handling: {
		setLoading,
		setError,
		setData
	}
}) => {
	setLoading(true)



	// todo: use real api
	fetch(API_URL(url), {
		...options,
		mode: 'cors',
		headers: {
			Accept: 'application/json',
			...(options ? options.headers : {}),
			'X-CMC_PRO_API_KEY': API_KEY,
		}
	}).then(resp => {
		setLoading(false)
		setError(null)
		setData(resp.data)
	}).catch((err) => {
		setLoading(false)
		setError(err)
		setData(null)
	})
}