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
    let navs = [
      { name: '首页', location: '/' },
      { name: '技术主题', location: '#themes' },
      { name: '演讲嘉宾', location: '#speakers' },
      { name: '大会议程', location: '#agenda' },
      { name: '合作伙伴', location: '#partners' },
      { name: '报名参会', location: '#join' },
    ]

    let { showNav } = this.state
    return (
      <div className="navigation-wrap">
        <nav className="navigation clearfix">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <h1 className="title">Effective Cloud User Group</h1>
          <ul className="nav">
            {navs.map((n, i) => (
              <li key={i}>
                <Link to={n.location}>{n.name}</Link>
              </li>
            ))}
          </ul>
          <div className="button" onClick={this.toggleButton}>
            <span className="line-1" />
            <span className="line-2" />
            <span className="line-3" />
          </div>
          {showNav && (
            <ul className="mobile-nav">
              {navs.map((n, i) => (
                <li key={i}>
                  <Link to={n.location} onClick={this.toggleButton}>
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        {showNav && <div className="overlay" />}
      </div>
    )
  }
}

export default Navigation
