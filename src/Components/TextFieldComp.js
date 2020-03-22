import React from 'react'
import {Row, Col, Input, Select,Cascader } from 'antd';
import MaskedInput from 'react-maskedinput'



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
            <Col  style ={{margin: '8px' }} span = {5}>
                <Row>
                    <label>{this.props.label}</label>
                </Row>
                <Input
                    style = {{width: '265px' }}
                    name = {this.props.name}
                    id = {this.props.id}
                    placeholder = {this.props.placeholder}
                    onChange = {this.props.onChange}
                    onBlur = {this.props.onBlur}
                    value = {this.props.value}
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


class DateInputComp extends React.Component{
    render(){
        return(
            <Col>
                <div style = {{paddingLeft: '62px'}}>
                    <div style = {{paddingTop: '8px'}}>
                        <label>
                            Date of Birth:
                        </label>
                    </div>
                    <MaskedInput
                        style = {{width: '265px'}}
                        mask="11/11/1111"
                        placeholder="MM/DD/YYYY"
                        size="11"
                        {...this.props}

                        formatCharacters={{
                            'W': {
                                validate(char) { return /\w/.test(char ) },
                                transform(char) { return char.toUpperCase() }
                            }
                        }
                        }/>
                </div>
            </Col>

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
export {TextFieldComp, TextFieldGroupComp, DateInputComp}