import React from 'react'
import {Radio, Col, Row, Form,Input} from 'antd';
{/*Radio Other Comp
<RadioOtherComp
    label =""
    a = ""
    b = ""
    c = ""
/>
*/}

class RadioOtherComp extends React.Component {
    state = {
        value: 1,
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render(){
        const {myProp} = this.props;
        return(
            <Form.Item>
                <Row>
                    <label style ={{marginRight: '10px'}}>{this.props.label}</label>
                </Row>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>
                            {this.props.a}
                        </Radio>
                        <Radio value={2}>
                            {this.props.b}
                        </Radio>
                        <Radio  value={3}>
                            {this.props.c}
                        </Radio>
                        <Radio value={4}>
                            Other
                            {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                        </Radio>
                    </Radio.Group>
            </Form.Item>
        )
    }
}

class RadioComp2 extends React.Component {
    state = {
        value: 1,
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        const {myProp} = this.props;
        return (

            <Col span = {4}>
                <Form.Item
                    name = {this.props.name}
                    label = {this.props.label}
                >
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>
                        {this.props.a}
                    </Radio>
                    <Radio  value={2}>
                        {this.props.b}
                    </Radio>
                </Radio.Group>
                </Form.Item>
            </Col>
        )
    }
}

class SympComp extends React.Component{
    state = {
        value: 1,
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render(){
        const {myProp} = this.props;
        return(
           <Form.Item>
               <Radio.Group onChange={this.onChange} value={this.state.value}>
                   <Radio value={1}>0</Radio>
                   <Radio value={2}>1</Radio>
                   <Radio value={3}>2</Radio>
                   <Radio value={4}>3</Radio>
               </Radio.Group>
               <label style = {{marginLeft: '15px'}}>{this.props.label}</label>
           </Form.Item>
        )
    }
}


export {RadioComp2, RadioOtherComp, SympComp}