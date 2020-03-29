import React from 'react'
import {Checkbox, Col} from "antd";


/*
*
<CheckboxComp
    label = ""
/>
*
* */
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

class CheckboxComp extends React.Component {
    render() {
        const {myprop} = this.props;
        return (
            <Col span={8}>
                <Checkbox
                    style={{margin: '8px'}}
                    onChange={onChange}
                >
                    {this.props.label}
                </Checkbox>
            </Col>
        )
    }
}

export {CheckboxComp}