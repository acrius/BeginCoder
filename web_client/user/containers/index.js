import raect, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import * as userActions from '../actions/UserActions.js'

class UserPanel extends Component {
    login(e) {
        this.props.userActions.login();
    }

    render() {
        return (
            <Button onClick={this.login}>Войти</Button>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userFetching: state.userFetching,
        userError: state.userError,
        isAuthentificated: state.isAuthentificated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)
