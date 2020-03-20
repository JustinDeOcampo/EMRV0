import React from 'react'
import {Row, Col, Input, Select,Cascader } from 'antd';


{/*
Template
        <TextFieldComp
            label = ":"
            placeholder = "Enter "
            name = ""
        />
*/}

class TextFieldComp extends React.Component {
    render() {
        const {myProp} = this.props;
        return (
            <Col  style ={{margin: '7px' }} span = {4}>
                <Row>
                    <label >{this.props.label}</label>
                </Row>

                <Input
                    placeholder = {this.props.placeholder}
                    suffix = {this.props.suffix}
                />


            </Col>
        )
    }
}

const { Option } = Select;

class TextFieldGroupComp extends React.Component{
    render(){
        return(
            <div>
                <Input.Group compact>
                    <Input style={{ width: '7%' }}/>
                    <Select defaultValue="months">
                        <Option value="months">months</Option>
                        <Option value="weeks">weeks </Option>
                    </Select>
                </Input.Group>
            </div>

        )
    }
}

{/*class NumFieldComp extends React.Component{
    render(){
        function onChange(value) {
            console.log('changed', value);
        }
        const {myProp} = this.props;
        return(
            <div>
                <InputNumber
                    formatter={value => `${value} min`}
                    onChange={onChange}
                />
            </div>
        )
    }
}
*/}
export {TextFieldComp, TextFieldGroupComp}