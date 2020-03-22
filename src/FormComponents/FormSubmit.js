import React from 'react'

import '../styles/style.css'
import ExportButton from '../Components/ExportButton';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};




class FormSubmit extends React.Component{

    render(){
        return(
            <div style ={{paddingTop: '30px'}} >

                <div className={"centered"}>
                    {"You are now finished with the form."}
                </div>

                <div style = {{paddingBottom: '20px'}} className={"centered"}>
                    {"Please click below to submit and export."}
                </div>

                <div style = {{paddingBottom: '10px'}} className={"centered"}>
                  <ExportButton divIdToPrint="form-content-to-pdf" pdfName="melmed-forms"/>
                </div>
            </div>

        )
    }
}

export default FormSubmit