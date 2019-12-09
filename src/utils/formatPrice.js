// @flow
export default (fraction: number = 0) => (num: number) => {
	return '$' + ( parseFloat(num.toFixed(fraction)).toLocaleString() )
}