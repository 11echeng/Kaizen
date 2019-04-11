import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const Header = ({ user }) => (
	<div className="navbar navbar-inverse header-nav" id="top" tabIndex="-1">
		<div className="container-fluid">
			<div className="navbar-header" id="header">
				<NavLink to="/" className="navbar-brand">
					<div className="quickVote-logo">quickVote</div>
				</NavLink>
			</div>
			<div className="navbar-inverse-collapse">
				<ul role="nav" className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<NavLink
							to="#"
							className="dropdown-toggle"
							data-toggle="dropdown"
							activeClassName="active"
						>
							<i className="mi mi-dashboard" />
							<span className="portal_nav">ITSM Portal</span>
							<span className="caret"></span>
						</NavLink>
						<ul className="dropdown-menu">
							<li>
								<a
									href="https://itsm.lmig.com/iqueue/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<img
										src="https://iconcierge.pdc.paas.lmig.com/assets/icons/iqueue_favicon.ico"
										width="25px"
										alt=""
									/>
									<span className="portal_nav">iQueue</span>
								</a>
							</li>
							<li>
								<a
									href="https://ispot.lmig.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									<img
										src="https://iconcierge.pdc.paas.lmig.com/assets/icons/ispot_favicon.ico"
										alt=""
									/>
									<span className="portal_nav">iSpot</span>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a
							href="//itsm.lmig.com/feedback?application=iticket"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="mi mi-feedback" />
							<span className="portal_nav-feedback">
								Feedback
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
)
Header.propTypes = {
	user: PropTypes.shape({
		role: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string
	}).isRequired
}
export default Header
