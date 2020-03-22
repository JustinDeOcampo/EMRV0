import React from 'react'
import {Form, Input, Button, Row} from 'antd';
import '../styles/style.css'
import Text from "antd/es/typography/Text";
import PatientDocumentExportButton from '../PdfComponents/PatientDocumentExportButton';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};



class FormSubmit extends React.Component{

    render(){
        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return(
            <div style ={{paddingTop: '30px'}}>

                <div className={"centered"}>
                    {"You are now finished with the form."}
                </div>

                <div style = {{paddingBottom: '20px'}} className={"centered"}>
                    {"Please click below to submit and export."}
                </div>

                <div className = "centered">
                  <PatientDocumentExportButton patientData={{}}/>
                  
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item >
                            <Button size='large' type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}

export default FormSubmit