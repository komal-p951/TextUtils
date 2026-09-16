import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
        <h4 className="navbar-brand" >{props.title}</h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/TextUtils/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TextUtils/about">About</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className='bg-dark rounded mx-2' style={{height:'30px' , width:'30px', cursor:'pointer', border:'1px solid'}} onClick={() => props.toggleMode('dark')}></div>
            <div className='bg-light rounded mx-2' style={{height:'30px' , width:'30px', cursor:'pointer', border:'1px solid'}} onClick={() => props.toggleMode('light')}></div>
            <div className='bg-primary rounded mx-2' style={{height:'30px' , width:'30px', cursor:'pointer', border:'1px solid'}} onClick={() => props.toggleMode('primary')}></div>
            <div className='bg-danger rounded mx-2' style={{height:'30px' , width:'30px', cursor:'pointer', border:'1px solid'}} onClick={() => props.toggleMode('danger')}></div>
            <div className='bg-success rounded mx-2' style={{height:'30px' , width:'30px', cursor:'pointer', border:'1px solid'}} onClick={() => props.toggleMode('success')}></div>
            <div className='bg-warning rounded mx-2' style={{height:'30px' , width:'30px', cursor:'pointer', border:'1px solid'}} onClick={() => props.toggleMode('warning')}></div>
          </div>
        </div>
        
    </nav>
  )
}


Navbar.defaultProps = {title: "TextUtils"}
Navbar.propTypes = {title : PropTypes.string}