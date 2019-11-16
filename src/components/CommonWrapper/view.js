import React from 'react'
import './style.css'
import { Row, Col, Menu, Icon  } from 'antd'
export default class CommonWrapper extends React.Component{
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <img  className="logo" src={require('../../statics/images/logo.jpg')}></img>
                         </Col>
                    <Col span={18}>
                    <Menu  mode="horizontal">
                        <Menu.Item >
                        <Icon type="appstore" />
                            英语学习
                        </Menu.Item>
                        <Menu.Item >
                        <Icon type="appstore" />
                            英语学习
                        </Menu.Item>
                        <Menu.Item >
                        <Icon type="appstore" />
                            英语学习
                        </Menu.Item>
                        <Menu.Item >
                        <Icon type="appstore" />
                            英语学习
                        </Menu.Item>
                        <Menu.Item >
                        <Icon type="appstore" />
                            英语学习
                        </Menu.Item>
                        
                    </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
    componentDidMount() {
        this.getCommonInfo()
    }
    getCommonInfo() {
        fetch('/api/common.json').then((res) => res.json() ).then(this.handleGetInfoSucc.bind(this)).catch(this.handleGetInfoErr.bind(this))
    }
    handleGetInfoSucc(res) {
        var action = {
            type: 'change_list',
            list: res.data.list
        }
      console.log(action)
    }
    handleGetInfoErr() {
        console.log('err')
    }
}
