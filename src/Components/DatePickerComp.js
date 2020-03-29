import React from 'react'
import {DatePicker, Col, Row, Input} from "antd";

const getDateTime = () => {
    let tempDate = new Date();
    let date =  (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    return date;
}

class DateTodayComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reportStartDate: getDateTime()
        }
    }
    render() {

        return (
                <Input
                    style = {{width: '260px' }}
                    readonly
                    name="reportStartDate"
                    className="form-control"
                    placeholder="Report Start Date"
                    defaultValue={this.state.reportStartDate}
                />
        );
    }
}

function onChange(date, dateString) {
    console.log(date, dateString);
}

class DatePickerComp extends React.Component {
    render() {
        const {myProp} = this.props;
        return (
            <Col style ={{margin: '6px'}} span = {4}>
                <div style = {{width: '260px'}}>
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


export {DatePickerComp, DateTodayComp}