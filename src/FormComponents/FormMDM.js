import React from 'react'
import {RadioComp2, RadioOtherComp} from "../Components/RadioComp";
import TextAreaComp from "../Components/TextAreaComp";
import DropDownComp from "../Components/DropDownComp";
import DrawerComp from "../Components/DrawerComp";
import {NumFieldComp, TextFieldComp} from "../Components/TextFieldComp";
import {CheckboxComp} from "../Components/CheckboxComp";
import {Row } from "antd";


class FormMDM extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <h1>III. Medical Decision Making</h1>
                    <RadioOtherComp
                        label = "Clinical Global Impression:"
                    />
                    <RadioOtherComp
                        label = "Morbidity Assessment"
                    />
                    <TextAreaComp/>
                    <DropDownComp
                        label = "Established DX:"
                    />
                    <DrawerComp
                        buttonLabel = "Add New DX"
                    />
                    <RadioComp2
                        label = "Symptoms most likely based on:"
                    />
                    <RadioOtherComp
                        label = "Complex presentation contributes to significant challenges with: "
                    />
                    <TextFieldComp
                        label = "Chart Review"
                        suffix = "(minutes)"

                    />
                    <TextFieldComp
                        label = "Duration of Visit:"
                        suffix = "(minutes)"

                    />
                    <TextFieldComp
                        label = "Total Time:"
                        suffix = "(minutes)"
                    />
                    <Row>
                    <CheckboxComp
                        label = "50% of time spent on counseling and/or coordination of care?"
                    />
                    </Row>
                    <Row>
                    <CheckboxComp
                        label = "Medication’s efficacy, side effects, alternatives, interactions discussed"
                    />
                    </Row>
                    <Row>
                        <CheckboxComp
                            label = " 90 day allowance of medication does not create undue risk of diversion or abuse"
                        />
                    </Row>



                </main>
            </div>
        );
    }
}



export default FormMDM;