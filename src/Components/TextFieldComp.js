import React from 'react'
import {Row, Col, Input, Select,Cascader } from 'antd';
import {DateTodayComp} from './DatePickerComp'
import MaskedInput from 'react-maskedinput'

import '../styles/style.css'

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

            <div  style ={{margin: '8px' }} className = "item-1">
                <Row>
                    <label>{this.props.label}</label>
                </Row>
                <Input
                    style = {{width: '260px' }}
                    name = {this.props.name}
                    id = {this.props.id}
                    placeholder = {this.props.placeholder}
                    onChange = {this.props.onChange}
                    onBlur = {this.props.onBlur}
                    value = {this.props.value}
                />
            </div>
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
                <div style = {{paddingLeft: '15px'}} className = "item-1">
                    <div style = {{paddingTop: '8px'}}>
                        <label>
                            Date of Birth:
                        </label>
                    </div>
                    <MaskedInput
                        style = {{width: '260px'}}
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
        )
    }
}
class CurrentDateComp extends React.Component{
    render(){
        return(
            <div style ={{margin: '1px', paddingTop:'6px', width: '260px' }} className = "item-1">
                <Row>
                    <label>{this.props.label}</label>
                </Row>
                <DateTodayComp/>
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
export {TextFieldComp, TextFieldGroupComp, DateInputComp, CurrentDateComp}