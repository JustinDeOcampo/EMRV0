import React from 'react'
import {Row, Form, Divider} from "antd";
import {TextFieldComp} from "../Components/TextFieldComp";
import DatePickerComp from "../Components/DatePickerComp";
import {RadioComp2} from "../Components/RadioComp";
import TextAreaComp from "../Components/TextAreaComp";
import DropDownComp from "../Components/DropDownComp";
import DrawerComp from "../Components/DrawerComp";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

class FormDev extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <Form
                        name = "FormDev"
                    >
                        <h2 style={{textAlign: 'center'}}>Developmental Consultation</h2>
                        <Row gutter={[16, 16]}>
                                <TextFieldComp
                                    label = "Name of Child: "
                                    placeholder = "Enter name of child"
                                    name = "nameOfChild"
                                />
                                <TextFieldComp
                                    label = "Person Completing the Form "
                                    placeholder = "Enter name"
                                    name = "personCompleting"
                                />
                            {/*Fix the spacing*/}
                                <DatePickerComp
                                    label = "Date:"
                                />
                        </Row>

                        {/*Fix this to display appropriate dates*/}
                        <Row gutter={[8, 0]}>
                            <DatePickerComp
                                label = "Date of Birth:"
                            />
                            <TextFieldComp
                                label = "Age: "
                                placeholder = "Enter Age"
                                name = "age"
                            />
                            <TextFieldComp
                                label = "Grade: "
                                placeholder = "Enter Grade"
                                name = "grade"
                            />
                            {/* Templates could go here of all schools in az*/}
                            <TextFieldComp
                                label = "School: "
                                placeholder = "Enter school"
                                name = "school"
                            />
                            <TextFieldComp
                                label = "PCP: "
                                placeholder = "Enter PCP"
                                name = "pcp"
                            />
                        </Row>

                        <Row>
                            <TextFieldComp
                                label = "Accompanied by: "
                                placeholder = "Enter name"
                                name = "accompaniedBy"
                            />
                            {/* Fix this to have preset options already*/}
                            <DropDownComp
                            label = "Relationship to Child?"
                            />
                            <RadioComp2
                                label = "Are you the legal guardian?"
                                a = "Y"
                                b = "N"
                            />
                        </Row>

                        <h1>I. History</h1>
                        {/*Fix this label spacing*/}
                            <TextAreaComp
                                label = "A. What is your chief concern/diagnoses?"
                                placeholder ="Enter details here"
                                name = "chiefConcern"
                            />
                        <TextAreaComp
                            label = "B. Interval History: (HPI) (B Section for Doctor Only)"
                            placeholder ="Enter details here"
                            name = "intervalHistory"
                        />
                        <h3>C. What current interventions is your child receiving?</h3>
                        {/*Fix options here*/}
                        <DropDownComp
                            label = ""
                        />
                        {/*Design this drawer later, and make it the new medication data appear below the button*/}
                        <h3>D. What Current Medications/Supplements is your child taking?</h3>
                        <DrawerComp
                            buttonLabel = "Add Current Medications"
                        />
                        <Row>
                            <RadioComp2
                                label = "Medication Allergies?"
                                a = "Y"
                                b = "N"
                            />
                            <RadioComp2
                                label = "Medication Effective?"
                                a = "Y"
                                b = "N"
                            />
                        </Row>

                        <h3>E. Past Medical / Family / Social History</h3>
                        {/*Fix options here*/}
                        <DropDownComp
                             label = "FH:"
                        />
                        {/*Fix options here*/}
                        <DropDownComp
                            label = "SH:"
                        />
                        <h3 style ={{marginTop: '10px'}}>F. Review of Systems - Including Side Effects</h3>
                        {/*Leave the default option as normal*/}
                        <Row>
                            <DropDownComp
                                label = "Constitutional/General:"
                            />
                            <DropDownComp
                                label = "Eyes:"
                            />
                            <DropDownComp
                                label = "Cardio:"
                            />
                            <DropDownComp
                                label = "Gastro-Intestinal"
                            />
                            <DropDownComp
                                label = "Musculoskeletal"
                            />
                        </Row>
                        <Row>

                            <DropDownComp
                                label = "Neurology"
                            />
                            <DropDownComp
                                label = "Allergy"
                            />
                            <DropDownComp
                                label = "Endocrinology"
                            />
                            <DropDownComp
                                label = "ENT"
                            />
                            <DropDownComp
                                label = "Respiratory"
                            />
                        </Row>
                        <Row>
                            <DropDownComp
                                label = "GU"
                            />
                            <DropDownComp
                                label = "Skin"
                            />
                        </Row>

                        <h3 style ={{marginTop: '10px'}}>F. Physical Examination</h3>

                        <Row>
                            <TextFieldComp
                                label = "Ht:"
                                placeholder = "Enter Height"
                                name = "ht"
                            />
                            <TextFieldComp
                                label = "Wt:"
                                placeholder = "Enter Weight"
                                name = "wt"
                            />
                            <TextFieldComp
                                label = "BP:"
                                placeholder = "Enter BP"
                                name = "bp"
                            />
                            <TextFieldComp
                                label = "HeartRate:"
                                placeholder = "Enter HR"
                                name = "heartRate"
                            />
                            <TextFieldComp
                                label = "OFC:"
                                placeholder = "Enter ofc"
                                name = "ofc"
                            />
                            <TextFieldComp
                                label = "Hw/Wt Δ:"
                                placeholder = "Enter difference in ht/wt"
                                name = "htwt"
                            />
                            <TextFieldComp
                                label = "Abdominal Girth:"
                                placeholder = "Enter Abdominal Girth"
                                name = "abdominalGirth"
                            />
                            <TextFieldComp
                                label = "BMI:"
                                placeholder = "Enter BMI"
                                name = "bmi"
                            />
                            <Divider/>
                            <DropDownComp
                                label = "Constitutional"
                            />
                            <DropDownComp
                                label = "Dysmorphisms"
                            />
                            <DropDownComp
                                label = "Head/Eyes"
                            />
                            <DropDownComp
                                label = "ENT"
                            />
                            <DropDownComp
                                label = "Neck"
                            />
                            <DropDownComp
                                label = "Cardiovascular"
                            />
                            <DropDownComp
                                label = "Respiratory"
                            />
                            <DropDownComp
                                label = "GI"
                            />
                            <DropDownComp
                                label = "GU"
                            />
                            <DropDownComp
                                label = "Musculoskeletal"
                            />
                            <DropDownComp
                                label = "Skin"
                            />
                            <DropDownComp
                                label = "Neurological"
                            />
                            <DropDownComp
                                label = "Hematology"
                            />


                        </Row>
                 </Form>
                </main>
            </div>
        );
    }
}



export default FormDev;