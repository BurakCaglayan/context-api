import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import posed from 'react-pose'

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    }
  }
});

class User extends Component {
  state = {
    isVisible: false
  }
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok"
  }

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    //Consumer Dİspatch
    dispatch({ type: "DELETE_USER", payload: id });
  }

  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {
          value => {
            const { dispatch } = value;
            return (
              <div className="col-md-8 mb-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between" style={isVisible ? { backgroundColor: "#62848d", cursor: "pointer" } : { cursor: "pointer" }} onClick={this.onClickEvent}>
                    <h4 className="d-inline">{name}</h4>
                    <i className="far fa-trash-alt" style={{ cursor: "pointer" }} onClick={this.onDeleteUser.bind(this, dispatch)}></i>
                  </div>
                  <Animation pose={isVisible ? "visible" : "hidden"}>
                    <div className="card-body">
                      <p className="card-text">Maaş: {salary}</p>
                      <p className="card-text"> Department: {department}</p>
                    </div>
                  </Animation>
                </div>
              </div>
            )
          }
        }
      </UserConsumer>
    )
  }
}

User.defaultProps = {
  name: "Bilgi Yok",
  department: "Bilgi Yok",
  salary: "Bilgi Yok"
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default User;