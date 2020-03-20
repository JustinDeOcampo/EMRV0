import React from 'react'
import {CheckboxComp} from "../Components/CheckboxComp";
import DropDownComp from "../Components/DropDownComp";
import {TextFieldComp, TextFieldGroupComp} from "../Components/TextFieldComp";
import TextAreaComp from "../Components/TextAreaComp";
import {RadioOtherComp} from "../Components/RadioComp";

class FormPlan extends React.Component {
    render() {
        return (
            <main>
                {/*
                fix the options to add specifics for this part
                */}
                <h1>Plan:</h1>
                <h3 style = {{paddingBottom: '7px'}}>1. Counseled regarding overall progress and treatment plan.</h3>
                <h3>2. Order lab</h3>
                <CheckboxComp
                    label = "None"
                />
                <CheckboxComp
                    label = "CBC/CMP"
                />
                <CheckboxComp
                    label = "CMA"
                />
                <CheckboxComp
                    label = "FraX"
                />
                <CheckboxComp
                    label = "WES"
                />
                <CheckboxComp
                    label = "ECG"
                />
                <CheckboxComp
                    label = "EEG"
                />
                <CheckboxComp
                    label = "Sleep Study"
                />
                <CheckboxComp
                    label = "TFT"
                />
                <CheckboxComp
                    label = "Lipid Profile/HgbAIC"
                />
                <CheckboxComp
                    label = "Vitamin D/Ferritin"
                />
                <CheckboxComp
                    label = "Prolactin"
                />
                <CheckboxComp
                    label = "Other"
                />

                <h3>3. Testing at next visit: </h3>
                <DropDownComp
                    label = ""
                />

                <h3>4. Evaluations/Treatment</h3>
                <DropDownComp
                    label = ""
                />

                <h3>5. ABA Consult/ Assessment /Therapy: </h3>
                <DropDownComp

                />
                <h3>6. Skills group: </h3>
                <DropDownComp
                    label = ""
                />
                {/*templates here?*/}
                <h3>7. Supplements: </h3>
                <TextFieldComp
                    label = ""
                    placeholder = "Enter supplements "
                    name = ""
                />
                <h3>8. Nutrition:</h3>
                <TextFieldComp
                    label = ""
                    placeholder = "Enter nutrition "
                    name = ""
                />
                <h3>9. Books/ Websites / www.melmedcenter.com resources:</h3>
                <TextAreaComp
                    label = ""
                    name = ""
                    />
                <h3>10. Medical Management/Future Plan/ Review of risks, benefits and treatment options and importance of compliance with treatment plan</h3>
                <TextAreaComp
                    label = ""
                    name = ""
                />
                <h3>11. Medical /Agency Referral: </h3>
                <DropDownComp
                    label = ""
                />
                <h3>12. Developmental Counseling</h3>
                {/*Figure out how to customize how many options a dropdown can have*/}
                    <RadioOtherComp
                        label ="Developmental Challenges"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Demystification"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Behavior Management"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Accomodations"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Executive Function"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Self Esteem / Social Strategies"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Academic Strategies"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Anxiety"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="Activities of Daily Living"
                        a = ""
                        b = ""
                        c = ""
                    />
                    <RadioOtherComp
                        label ="CRAFFT"
                        a = ""
                        b = ""
                        c = ""
                    />

                    <h3>13.Records for Request</h3>
                    <CheckboxComp
                        label = "Request Medical Records"
                    />
                    <CheckboxComp
                        label = "Request School Records"
                    />
                    {/*make it so you can specify which diagnostic test they want*/}
                    <CheckboxComp
                        label = "Request Diagnostic Tests"
                    />
                <h3>14. Please bring: copies of reports, questionnaires or rating scales (we charge 15 cents/page for copies made in office)</h3>
                <CheckboxComp
                    label = "Check if true"
                />
                {/*weeks/months = number, have option to choose week or month*/}
                <h3>15. Future Appointments</h3>
                <TextFieldGroupComp/>
                {/*make this searchable dropdown with list of doctors/pa name*/}
                <p1>Which doctor will they be seeing?</p1>
                <DropDownComp/>
                <h3>Additional Comments</h3>
                <TextAreaComp
                    label = ""
                    name = "Type here"
                />


            </main>
        );
    }
}



export default FormPlan;