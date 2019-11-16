import React from 'react'
import './style.css'
import { Row, Col, Menu, Icon  } from 'antd'
import store from '../../store/index'
import { getChangeListAction } from './actionCreator'
export default class CommonWrapper extends React.Component{
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange.bind(this))
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <img  className="logo" src={require('../../statics/images/logo.jpg')}></img>
                         </Col>
                    <Col span={18}>
                    <Menu  mode="horizontal">
                           {this.state.common.list.map((value) => {
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
    handleStoreChange() {
        this.setState(store.getState())
     }
    getCommonInfo() {
        fetch('/api/common.json').then((res) => res.json() ).then(this.handleGetInfoSucc.bind(this)).catch(this.handleGetInfoErr.bind(this))
    }
    handleGetInfoSucc(res) {
        const action = getChangeListAction(res.data.list)
        store.dispatch(action)
    }
    handleGetInfoErr() {
        console.log('err')
    }
   
}
