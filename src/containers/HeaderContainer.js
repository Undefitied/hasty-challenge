// @flow
import React from 'react'
import { connect } from 'react-redux'
import { setLatestDropdown } from '../actions'
import LatestLimitSelect from '../components/atoms/LatestLimitSelect'
import NavButtonList from '../components/molecules/NavButtonList'
import type { LatestDropdownValueType, PageIdType } from '../types'
import { Col, Row } from 'antd'

type Props = {
	currentPageId: PageIdType,
	onLatestLimitChange: (LatestDropdownValueType) => any
}

const Header = ({ currentPageId, onLatestLimitChange }: Props) => {

	return (
		<>
			<Row type="flex" gutter={32}>
				<Col>
					<span style={{color: 'white'}}>CoinHastyCap</span>
				</Col>
				<Col>
					<NavButtonList currentPageId={currentPageId} />
				</Col>
				<Col>
					<LatestLimitSelect onChange={onLatestLimitChange} />
				</Col>
			</Row>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		currentPageId: state.uiGlobal.currentPageId
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLatestLimitChange: (newValue) => dispatch(setLatestDropdown(newValue)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)