import React from 'react'
import {DatePicker, Col, Row} from "antd";



function onChange(date, dateString) {
    console.log(date, dateString);
}

class DatePickerComp extends React.Component {
    render() {
        const {myProp} = this.props;
        return (
            <Col style ={{margin: '7px'}} span = {4}>
                <Row>
                    <label  className = "dateLabel" >{this.props.label}</label>
                </Row>
                <Row>
                    <DatePicker
                        onChange = {onChange}
                        size = {"medium"}
                        style ={{width: '250px'}}
                    />
                </Row>

            </Col>

        )
    }
}


export default DatePickerComp