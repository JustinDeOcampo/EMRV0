import React from 'react'
import {Form} from "antd";
import {CurrentDateComp, DateInputComp, TextFieldComp} from "../Components/TextFieldComp";
import {RadioComp2} from "../Components/RadioComp";
import TextAreaComp from "../Components/TextAreaComp";
import DropDownComp from "../Components/DropDownComp";
import {gradeInputs, relationshipInputs} from "../Components/DropDownOptions"
import '../styles/style.css'


class FormDev extends React.Component {
    render() {
        return (
            <div>
                <Form
                    name="FormDev"
                >
                    <h2 style={{textAlign: 'center'}}>Developmental Consultation</h2>
                    <div className={"container"}>
                        <TextFieldComp
                            label="Name of Child: "
                            placeholder="Enter name of child"
                            name="nameOfChild"
                        />
                        {/*mother, father, guardian, self, other (typable) */}
                        <TextFieldComp
                            label="Person Completing the Form "
                            placeholder="Enter name"
                            name="personCompleting"
                        />
                        <CurrentDateComp
                            label="Date:"
                        />
                        <DateInputComp
                            label="Date of Birth:"
                        />
                    </div>

                    {/*Fix this to display appropriate dates*/}
                    <div className={"container"}>
                        <TextFieldComp
                            label="Age: "
                            placeholder="Enter Age"
                            name="age"
                        />
                        {/*add pre-k - senior in high school, college*/}
                        <DropDownComp
                            label="Grade: "
                            arrayOfData={gradeInputs}
                        />
                        {/* Templates could go here of all schools in az*/}
                        <TextFieldComp
                            label="School: "
                            placeholder="Enter school"
                            name="school"
                        />
                        <TextFieldComp
                            label="PCP: "
                            placeholder="Enter Primary care provider"
                            name="pcp"
                        />
                    </div>

                    <div className={"container-half"}>

                        <DropDownComp
                            label="Relationship to Child?"
                            arrayOfData={relationshipInputs}
                        />
                        <TextFieldComp
                            label="Accompanied by: "
                            placeholder="Enter name"
                            name="accompaniedBy"
                        />
                    </div>
                    <RadioComp2
                        label="Are you the legal guardian?"
                        a="Y"
                        b="N"
                    />
                    <h1>I. History</h1>
                    <TextAreaComp
                        label="A. What is your chief concern/current diagnosis?"
                        placeholder="Enter details here"
                        name="chiefConcern"
                    />

                </Form>
            </div>
        );
    }
}


export default FormDev;