import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import * as userActions from '../actions/UserActions.js'

class UserPanel extends Component {
    componentDidMount() {
        this.props.userActions.getLoginStatus();
    }

    login = (e) => {
        this.props.userActions.login();
    }

    render() {
        return this.props.user.isAuthentificated ? (<span>{this.props.user.user.first_name + ' ' + this.props.user.user.last_name}</span>) : (<Button onClick={this.login}>Войти</Button>);
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)
