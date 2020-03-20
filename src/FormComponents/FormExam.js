import React from 'react'
import {RadioOtherComp} from "../Components/RadioComp";
import TextAreaComp from "../Components/TextAreaComp";
import {TextFieldComp} from "../Components/TextFieldComp";


class FormExam extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <h1>II. Exam</h1>
                    <h3>Mood/Behavioral/Psychiatric Assessment</h3>
                    <RadioOtherComp
                        label ="Temperament"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Appearance"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Eye Contact"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Attention"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label = "Motor"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Communication"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Play"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Affect"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Mood"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Thought Processing"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Thought Content"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Violence"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Stereotypes"
                        a = ""
                        b = ""
                        c = ""
                    />

                    <TextAreaComp
                        label= "Child / Insight / Observations"
                    />
                    <RadioOtherComp
                        label = "Parent & Child Interaction: "
                        a = ""
                        b= ""
                        c = ""
                    />
                    <RadioOtherComp
                        label = "Testing: "
                        a = ""
                        b= ""
                        c = ""
                    />
                    <h3>Reports Reviewed and Discussed</h3>
                    <TextFieldComp
                        label = "Labs:"
                        placeholder = "Enter labs "
                        name = "labs"
                    />
                    <TextFieldComp
                        label = "Therapy Records:"
                        placeholder = "Enter therapy records "
                        name = "therapyRecords"
                    />
                    <TextFieldComp
                        label = "IEP/MET:"
                        placeholder = "Enter here "
                        name = "iepmet"
                    />
                    <TextFieldComp
                        label = "Medical Records:"
                        placeholder = "Enter medical records"
                        name = "medicalRecords"
                    />
                    <TextAreaComp
                        label = "Notes:"
                        name = "notes"
                    />



                </main>
            </div>
        );
    }
}



export default FormExam;