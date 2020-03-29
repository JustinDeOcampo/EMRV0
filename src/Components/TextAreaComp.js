import React from 'react'
import {Col, Form} from 'antd';




{/*

<TextAreaComp
    label = ""
    name = ""
/>
*/
}

export class TextAreaComp extends React.Component {
    render() {

        return (

            <Col>
                <Form.Item
                    name={this.props.name}
                >
                    <h3>{this.props.label}</h3>
                    <div id="textarea" contentEditable="true">

                    </div>
                </Form.Item>
            </Col>
        )
    }
}

export default TextAreaComp