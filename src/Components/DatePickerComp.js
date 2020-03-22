import React from 'react'
import {DatePicker, Col, Row} from "antd";



function onChange(date, dateString) {
    console.log(date, dateString);
}

class DatePickerComp extends React.Component {
    render() {
        const {myProp} = this.props;
        return (
            <Col style ={{margin: '6px'}} span = {4}>
                <div style = {{width: '265px'}}>
                    <Row>
                        <label  className = "dateLabel" >{this.props.label}</label>
                    </Row>
                    <Row>
                        <DatePicker
                            onChange = {onChange}
                            size = {"medium"}
                            style ={{width: '100%'}}
                        />
                    </Row>
                </div>

            </Col>

        )
    }
}


export default DatePickerComp