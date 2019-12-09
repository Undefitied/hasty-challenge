// @flow
import React from 'react'
import { Table } from 'antd'
import formatPrice from '../../utils/formatPrice'
import formatPercentage from '../../utils/formatPercentage'
import type { LatestDataType } from '../../types/api'

type Props = {
	data: Array<LatestDataType>
}

const columns = [
	{
		title: 'Rank',
		dataIndex: 'cmc_rank',
		key: 'cmcRank'
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Price',
		dataIndex: 'quote.USD.price',
		key: 'price',
		render: formatPrice(2),
	},
	{
		title: 'Price Change (24h)',
		dataIndex: 'quote.USD.percent_change_24h',
		key: 'priceChange',
		render: formatPercentage
	},
	{
		title: 'Market Cap',
		dataIndex: 'quote.USD.market_cap',
		key: 'marketCap',
		render: formatPrice(),
	},
	{
		title: 'Volume',
		dataIndex: 'quote.USD.volume_24h',
		key: 'volume',
		render: formatPrice(),
	},
]

const LatestTable = ({ data }: Props) => {
	return (
		<Table columns={columns} dataSource={data} />
	)
}

export default LatestTable
