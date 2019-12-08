// @flow
import React, { useCallback } from 'react'
import { Menu } from 'antd'
import { PAGES_MAP } from '../../constants'
import type { PageIdType } from '../../types'
import { withRouter } from 'react-router-dom'

type Props = {
	currentPageId: PageIdType,
	history: {
		push: (string) => any
	}
}

const NavButtonList = ({ currentPageId, history }: Props) => {
	const values = (Object.values(PAGES_MAP): any)

	const onSelect = useCallback(({ key }) => {
		history.push(PAGES_MAP[key].route.path)
	}, [history])

	return (
		<Menu
			theme="dark"
			mode="horizontal"
			selectedKeys={[currentPageId]}
			style={{ lineHeight: '64px' }}
			onSelect={onSelect}
		>
			{values.map(({ id, title }) => (
				<Menu.Item key={id}>{title}</Menu.Item>
			))}
		</Menu>
	)
}

export default withRouter(NavButtonList)