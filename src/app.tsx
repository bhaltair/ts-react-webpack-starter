import React, { Suspense, lazy } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>

				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/hello">Hello</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path="/about">
							<About name={ 'about' }/>
						</Route>
						<Route path="/hello" component={ Hello }>
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Suspense>
		</Router>

	)
}

const Hello = lazy(() => import('./components/Hello'))

function About({ name = 'about' }: { 
	name: string
}) {
	return <h2>{ name }</h2>;
}

function Home() {
	return (
		<div className="app">
			Home
		</div>
	)
}

render(
	<App />, document.getElementById("content")
)