import React from 'react'
import {Form, Input, Radio, Row} from 'antd';
import '../styles/style.css'
import classNames from 'classnames'

{/*Radio Other Comp
<RadioOtherComp
    label =""
    a = ""
    b = ""
    c = ""
/>
*/
}

/*component for radio buttons with an "other" option attached*/
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

    render() {

        return (
            <Form>
                <Form.Item
                    name = {this.props.name}
                >
                    <Row>
                        <label style={{marginRight: '10px'}}>{this.props.label}</label>
                    </Row>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>
                            {this.props.a}
                        </Radio>
                        <Radio value={2}>
                            {this.props.b}
                        </Radio>
                        <Radio value={3}>
                            {this.props.c}
                        </Radio>
                        <Radio value={4}>
                            Other
                            {this.state.value === 4 ? <Input style={{width: 100, marginLeft: 10}}/> : null}
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>

        )
    }
}

/*component for radio buttons with only two options*/
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

            <div style={{paddingLeft: '20px'}} className="item-1">
                <div style={{paddingTop: '6px'}}>
                    <label>{this.props.label}</label>
                </div>
                <Row>
                    <Radio.Group style={{paddingTop: '7px'}} onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>
                            {this.props.a}
                        </Radio>
                        <Radio value={2}>
                            {this.props.b}
                        </Radio>
                    </Radio.Group>
                </Row>
            </div>
        )
    }
}

{/*
component for the symptom checklist radio buttons. this is its own component
because every radio group is the same on this page
*/
}

class SympComp extends React.Component {
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
        const {name, label} = this.props;


        let colorChecker = (name) => {
            let radioClass;
            /*alternating blue and white radio buttons */
            /*this if statement is not working*/
            if (name % 2 == 0) {
                radioClass = classNames('blue-radiobutton')
            } else {
                radioClass = null;
            }
            return radioClass;
        };


        return (
            <Form.Item
                name={this.props.name}
                className={colorChecker(name)}
                style={{background: "", width: '100%'}}
            >
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>0</Radio>
                    <Radio value={2}>1</Radio>
                    <Radio value={3}>2</Radio>
                    <Radio value={4}>3</Radio>
                </Radio.Group>
                <label style={{marginLeft: '15px'}}>{this.props.label}</label>
            </Form.Item>
        )
    }
}


export {RadioComp2, RadioOtherComp, SympComp}