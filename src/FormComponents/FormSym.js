import React from 'react'
import {SympComp} from "../Components/RadioComp";
import {Divider} from "antd";
import '../styles/style.css'

class FormSym extends React.Component {
    render() {
        return (
            <div className="form-sym">
                <div>
                    <h2 style={{textAlign: 'center'}}>Symptom Checklist Parent (Vanderbilt Modified Form)</h2>
                    <p>Please rate each symptom by selecting the number that best describes the symptoms or severity of
                        challenge.</p>
                    <h3>Frequency Code: 0 = Never, 1 = Occasionally, 2 = Often, 3 = Very Often</h3>

                    <div className="container">
                        <div className={"container-v"}>
                            {/*Have alternating color themes similar to the form*/}
                            <SympComp
                                label="Fails to give attention to details or makes careless mistakes"
                                name={1}
                            />
                            <SympComp
                                label="Has difficulty sustaining attention in tasks"
                                name={2}
                            />
                            <SympComp
                                label="Does not seem to listen when spoken to directly"
                                name={3}
                            />
                            <SympComp
                                label="Difficulty following instructions and fails to complete assigned tasks"
                                name={4}
                            />
                            <SympComp
                                label="Has difficulty organizing tasks"
                                name={5}
                            />
                            <SympComp
                                label="Avoids or dislikes tasks that require sustained mental effort"
                                name={6}
                            />
                            <SympComp
                                label="Loses things necessary for tasks"
                                name={7}
                            />
                            <SympComp
                                label="Is easily distracted by extraneous stimuli"
                                name={8}
                            />
                            <SympComp
                                label="Is forgetful in daily activities"
                                name={9}
                            />
                            <SympComp
                                label="Fidgets with hands or feet or squirms in seat"
                                name={10}
                            />
                            <SympComp
                                label="Difficulty remaining seated when expected"
                                name={11}
                            />
                            <SympComp
                                label="Runs about or climbs excessively at inappropriate times"
                                name={12}
                            />
                            <SympComp
                                label="Has difficulty playing quietly"
                                name={13}
                            />
                            <SympComp
                                label="Is 'on the go' or often acts as if 'driven by a motor'"
                                name={14}
                            />
                            <SympComp
                                label="Talks excessively"
                                name={15}
                            />
                            <SympComp
                                label="Blurts out answers before questions complete"
                                name={16}
                            />
                            <SympComp
                                label="Has difficulty awaiting turn"
                                name={17}
                            />
                            <SympComp
                                label="Interrupts or intrudes on others"
                                name={18}
                            />
                            <SympComp
                                label="Difficulty with homework completion"
                                name={19}
                            />
                            <SympComp
                                label="Problematic school performance"
                                name={20}
                            />
                            <SympComp
                                label="Difficulty in social situations with peers"
                                name={21}
                            />
                            <SympComp
                                label="Difficulty managing anger or disappointment"
                                name={22}
                            />
                            <SympComp
                                label="Oppositional with parents"
                                name={23}
                            />
                            <SympComp
                                label="Aggressive verbally"
                                name={24}
                            />

                            <SympComp
                                label="Aggressive physically"
                                name={25}
                            />
                            <SympComp
                                label="Mood changes quickly and drastically"
                                name={26}
                            />
                            <SympComp
                                label="Less social with friends, looks dull or flat"
                                name={27}
                            />

                        </div>
                        <div className="container-v">
                            <SympComp
                                label="Is tired during the day"
                                name={28}
                            />
                            <SympComp
                                label="Is dull, flat, “loss of spirit” not him or herself"
                                name={29}
                            />
                            <SympComp
                                label="Is worried or anxious about things"
                                name={30}
                            />
                            <SympComp
                                label="Is sad, depressed, low mood, tearful"
                                name={31}
                            />
                            <SympComp
                                label="Is irritated easily by things or crabby feeling"
                                name={32}
                            />
                            <SympComp
                                label="Reacts emotionally i.e. yelling, slamming doors"
                                name={33}
                            />
                            <SympComp
                                label="Tics or movements, twitches, jerks or noises"
                                name={34}
                            />
                            <SympComp
                                label="Habits such as nail biting or skin picking"
                                name={35}
                            />
                            <SympComp
                                label="Decreased appetite"
                                name={36}
                            />
                            <SympComp
                                label="Difficulty falling asleep"
                                name={37}
                            />
                        </div>
                    </div>

                    <Divider/>
                </div>
            </div>
        );
    }
}


export default FormSym;