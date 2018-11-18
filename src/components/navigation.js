import React from 'react'
import { Link } from 'gatsby'
import './navigation.css'
import logo from '../images/logo.png'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showNav: false }
  }

  toggleButton = () => {
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    // let { showNav } = this.state
    return (
      <nav className="navigation clearfix">
        <img className="logo" src={logo} alt="Logo" />
        <h1 className="title">Effective Cloud User Group</h1>
        <ul className="nav">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="#speakers">演讲嘉宾</Link>
          </li>
          <li>
            <Link to="#agenda">大会议程</Link>
          </li>
          <li>
            <Link to="#previous">历届回顾</Link>
          </li>
          <li>
            <Link to="#partners">合作伙伴</Link>
          </li>
        </ul>
        <div className="button" onClick={this.toggleButton}>
          <span className="line-1" />
          <span className="line-2" />
          <span className="line-3" />
        </div>
      </nav>
    )
  }
}

export default Navigation
