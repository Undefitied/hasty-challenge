// @flow
import { connect } from 'react-redux'
import type { LatestDropdownValueType } from '../types';

type Props = {
	latestLimitValue: LatestDropdownValueType
};

const MarketOverviewContainer = ({ latestLimitValue }: Props) => (
	'test' + latestLimitValue
)

const mapStateToProps = (state) => {
	return {
		latestLimitValue: state.uiGlobal.latestLimit
	}
}

export default connect(mapStateToProps)(MarketOverviewContainer)