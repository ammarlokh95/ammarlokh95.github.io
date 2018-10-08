import React, { Component } from 'react';
import { connect } from 'react-redux';
import navigationAction from '../actions/NavigationAction'

var path = require("path");
class Navbar extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            currentLinks: [
                "Home",
                "Blog",
                "About"
            ]
        }
        this.generateTabs = this.generateTabs.bind(this);
    }

    generateTabs() {
        return this.state.currentLinks.map((linkname, index) => {
            if(linkname.toUpperCase() === this.props.activeLink.toUpperCase() ) {
                
                return <li class="nav-item active" id={index}>
                    <a class="nav-link" onClick={() => this.props.onClickAction(linkname.toUpperCase())}>
                    {linkname}
                    <span class="sr-only">(current)</span>
                    </a>
                    </li>
            }
            else {
                return <li class="nav-item" id={index}>
                    <a class="nav-link" onClick={() => this.props.onClickAction(linkname.toUpperCase())}>
                    {linkname}
                    <span class="sr-only">(current)</span>
                    </a>
                    </li>
            }
        })
    }
    render() {
        return <nav class="navbar navbar-expand-lg navbar-light cyan">
    <a class="navbar-brand" onClick={() => this.props.onClickAction("HOME")}>Ammar's Website</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        {this.generateTabs()}
        </ul>
    </div>
    </nav>
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickAction: text => {
            window.sessionStorage.setItem('currentPage', text)
            dispatch(navigationAction(text))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Navbar);