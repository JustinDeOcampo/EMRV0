import React from 'react'
import {Row, Form, Input} from "antd";
import {TextFieldComp, DateInputComp} from "../Components/TextFieldComp";
import DatePickerComp from "../Components/DatePickerComp";
import {RadioComp2} from "../Components/RadioComp";
import TextAreaComp from "../Components/TextAreaComp";
import DropDownComp from "../Components/DropDownComp";
import FormSym from "./FormSym";
import FormSubmit from "./FormSubmit";
import '../styles/style.css'



class FormDev extends React.Component{
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
                            {/*mother, father, guardian, self, other (typable) */}
                                <TextFieldComp
                                    label = "Person Completing the Form "
                                    placeholder = "Enter name"
                                    name = "personCompleting"
                                />
                            {/*Fix the spacing*/}
                                <DatePickerComp
                                    label = "Date:"
                                />
                            <DateInputComp/>
                        </Row>

                        {/*Fix this to display appropriate dates*/}
                        <Row gutter={[8, 0]}>
                            <TextFieldComp
                                label = "Age: "
                                placeholder = "Enter Age"
                                name = "age"
                            />
                            {/*add pre-k - senior in high school, college*/}
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
                            <TextAreaComp
                                label = "A. What is your chief concern/current diagnosis?"
                                placeholder ="Enter details here"
                                name = "chiefConcern"
                            />

                 </Form>
                </main>
            </div>
        );
    }
}



export default FormDev;