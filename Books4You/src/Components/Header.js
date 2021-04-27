import { Component } from "react";
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


class Header extends Component {
    render() {
        return (
            <div className="header">
            <h1>Books4You</h1> 
            <div className="menu">
            <NavLink to = "/">Home</NavLink> 
            {this.props.loggedIn ? <NavLink to = "/Add-Book">Add-a-Book</NavLink> : null}
            {this.props.loggedIn ? <NavLink to = "/my-books">My Books</NavLink> : null}
            {this.props.loggedIn ? <NavLink to = "/profile">My Profile</NavLink> : null}
            {this.props.loggedIn ? <NavLink to = "" onClick={this.props.onLogout}>Logout</NavLink> : <NavLink to = "/login">Login</NavLink>}

            {!this.props.loggedIn ? <NavLink to = "/login">Login</NavLink> : null}
            {!this.props.loggedIn ? <NavLink to = "/register">Register</NavLink> : null}
            </div>
            <div className="cart">CART: {this.props.ctr} items</div>
            
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.cartR.ctr,
        loggedIn: state.authR.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogout: () => dispatch({type:'LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)