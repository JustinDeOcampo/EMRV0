import React from 'react'
import {Form, Input, Button, Row} from 'antd';
import '../styles/style.css'
import Text from "antd/es/typography/Text";
import ExportButton from '../Components/ExportButton';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};



class FormSubmit extends React.Component{

    render(){
        return(
            <div style ={{paddingTop: '30px'}} className={"centered"}>

                <div className={"centered"}>
                    {"You are now finished with the form."}
                </div>

                <div style = {{paddingBottom: '20px'}} className={"centered"}>
                    {"Please click below to submit and export."}
                </div>

                <div className = "centered">
                  <ExportButton divIdToPrint="form-content-to-pdf" pdfName="melmed-forms"/>
                </div>
            </div>

        )
    }
}

export default FormSubmit