import React from 'react'
import { Col, Input, Form} from 'antd';

const { TextArea } = Input;


{/*

<TextAreaComp
    label = ""
    name = ""
/>
*/}

export class TextAreaComp extends React.Component {
    render() {
        const {myProp} = this.props;
        return (

            <Col >
                <Form.Item
                    name = {this.props.name}
                >
                <h3>{this.props.label}</h3>
                    <div id = "textarea" contentEditable="true">

                    </div>
                </Form.Item>
            </Col>
        )
    }
}

export default TextAreaComp