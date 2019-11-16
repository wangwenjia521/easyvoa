import React from 'react'
import './style.css'
import { Row, Col, Menu, Icon  } from 'antd'
import store from '../../store/index'
import { getChangeListAction } from './actionCreator'
import {connect } from 'react-redux'
 class CommonWrapper extends React.Component{
    // constructor(props) {
    //     super(props)
    //     this.state = store.getState()
    //     store.subscribe(this.handleStoreChange.bind(this))
    // }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <img  className="logo" src={require('../../statics/images/logo.jpg')} alt=""></img>
                         </Col>
                    <Col span={18}>
                    <Menu  mode="horizontal">
                           {this.props.list.map((value) => {
                               return (
                                <Menu.Item key={value.id}>
                                <Icon type="appstore" />
                                {value.title}
                                </Menu.Item> 
                               )
                           })}
                    </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
    componentDidMount() {
        this.getCommonInfo()
    }
    // handleStoreChange() {
    //     this.setState(store.getState())
    //  }
    getCommonInfo() {
        fetch('/api/common.json').then((res) => res.json() )
        .then(this.props.changeList)
        .catch(this.handleGetInfoErr.bind(this))
    }
    handleGetInfoErr() {
        console.log('err')
    }
   
}
const mapStateToProps = (state) => ({
    list: state.common.list
})
const mapDispatchToProps = (dispatch) => {
    return{
        changeList: (res) => {
            const action = getChangeListAction(res.data.list)
            store.dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonWrapper)



