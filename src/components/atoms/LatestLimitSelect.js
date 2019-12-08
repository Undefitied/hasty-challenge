// @flow
import React from 'react'
import { LATEST_LIMIT_LABELS, LATEST_LIMIT_OPTIONS } from '../../constants'
import { Select } from 'antd'
import type { LatestDropdownValueType } from '../../types'

const { Option } = Select

type Props = {
	onChange: (newValue: LatestDropdownValueType) => any
}

const LatestLimitSelect = ({ onChange }: Props) => {
	const values = (Object.values(LATEST_LIMIT_OPTIONS): any)

	return (
		<Select defaultValue={LATEST_LIMIT_OPTIONS.DEFAULT} onChange={onChange}>
			{values.map((o) =>
				<Option key={o} value={o}>{LATEST_LIMIT_LABELS[o]}</Option>
			)}
		</Select>
	)
}

export default LatestLimitSelect