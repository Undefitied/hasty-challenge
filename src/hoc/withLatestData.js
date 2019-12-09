// @flow
import React, { useEffect, useState } from 'react'
import type { AbstractComponent } from 'react'
import fetchWithConfig from '../utils/fetchWithConfig'
import { API_LIST } from '../constants/api'
import withQueryParams from '../utils/withQueryParams'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import type { LatestDropdownValueType } from '../types'

type Props = {|
	limit: LatestDropdownValueType,
	loading: boolean,
	error: null | { message: string },
	data: any
|};

const mapStateToProps = (state) => ({
	limit: state.uiGlobal.latestLimit
})

function withLatestData<Config> (
	WrappedComponent: AbstractComponent<{| ...Config, ...Props |}>
): AbstractComponent<Config> {
	return connect(
		mapStateToProps
	)((props: {| ...Config, ...Props |}) => {
		const { limit } = props

		const [loading, setLoading] = useState(false)
		const [error, setError] = useState(null)
		const [data, setData] = useState(null)

		useEffect(() => {
			fetchWithConfig({
				url: withQueryParams(
					API_LIST.LATEST,
					{
						limit
					}
				),
				handling: {
					setLoading,
					setError,
					setData
				}
			})
		}, [limit])

		if (loading) {
			return <Icon type="loading" />
		}

		if (error) {
			return error.message ? error.message : 'Error'
		}

		return (
			<WrappedComponent
				{...props}
				loading={loading}
				error={error}
				data={data}
			/>
		)
	})
}

export default withLatestData