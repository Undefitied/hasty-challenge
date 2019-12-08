// @flow
import React, { useEffect } from 'react'
import type { Node } from 'react'
import { Layout } from 'antd'
import HeaderContainer from '../../containers/HeaderContainer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { setCurrentPage } from '../../actions'
import { PAGES_BY_PATH } from '../../constants'
import { connect } from 'react-redux'
import type { PageIdType } from '../../types'

const { Header, Footer, Content } = Layout

type Props = {
	children: Node,
	location: {
		pathname: string,
	},
	setCurrentPageRedux: PageIdType => any
}

const LayoutWrapper = ({ children, location, setCurrentPageRedux }: Props) => {
	useEffect(() => {
		setCurrentPageRedux(PAGES_BY_PATH[location.pathname].id)
	}, []) // for "componentDidMount"

	useEffect(() => {
		setCurrentPageRedux(PAGES_BY_PATH[location.pathname].id)
	}, [location, setCurrentPageRedux])

	return (
		<Layout>
			<Header>
				<HeaderContainer />
			</Header>
			<Content>
				{children}
			</Content>
			<Footer>
				Sergey Kuzovkov, undefitied@gmail.com
			</Footer>
		</Layout>
	)
}

export default compose(
	withRouter,
	connect(null, (dispatch) => ({
		setCurrentPageRedux: (pageId) => dispatch(setCurrentPage(pageId))
	})),
)(LayoutWrapper)