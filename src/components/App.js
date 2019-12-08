// @flow
import React from 'react'
import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../config/redux'
import 'antd/dist/antd.css'
import LayoutWrapper from './ecosystems/Layout'
import { PAGES_MAP } from '../constants'

const App = () => {
	const values = (Object.values(PAGES_MAP): any)

	return (
		<Provider store={store}>
			<BrowserRouter>
				<LayoutWrapper>
					<Switch>
						{values.map(({ id, route }) => (
							<Route exact key={id} {...route} />
						))}
					</Switch>
				</LayoutWrapper>
			</BrowserRouter>
		</Provider>
	)
}

export default App
