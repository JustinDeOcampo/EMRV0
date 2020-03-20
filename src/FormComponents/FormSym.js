import React from 'react'
import {SympComp} from "../Components/RadioComp";

class FormSym extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <h2 style={{textAlign: 'center'}}>Symptom Checklist Parent (Vanderbilt Modified Form)</h2>
                    <p>Please rate each symptom by selecting the number that best describes the symptoms or severity of challenge.</p>
                    <h3>Frequency Code: 0 = Never, 1 = Occasionally, 2 = Often, 3 = Very Often</h3>

                    {/*Have alternating color themes similar to the form*/}
                    <SympComp
                        label = "Fails to give attention to details or makes careless mistakes"
                        name ="1"
                    />
                    <SympComp
                        label = "Has difficulty sustaining attention in tasks"
                        name ="2"
                    />
                    <SympComp
                        label = "Does not seem to listen when spoken to directly"
                        name ="3"
                    />
                    <SympComp
                        label = "Difficulty following instructions and fails to complete assigned tasks"
                        name ="4"
                    />
                    <SympComp
                        label = "Has difficulty organizing tasks"
                        name ="5"
                    />
                    <SympComp
                        label = "Avoids or dislikes tasks that require sustained mental effort"
                        name ="6"
                    />
                    <SympComp
                        label = "Loses things necessary for tasks"
                        name ="7"
                    />
                    <SympComp
                        label = "Is easily distracted by extraneous stimuli"
                        name ="8"
                    />
                    <SympComp
                        label = "Is forgetful in daily activities"
                        name ="9"
                    />
                    <SympComp
                        label = "Fidgets with hands or feet or squirms in seat"
                        name ="10"
                    />
                    <SympComp
                        label = "Difficulty remaining seated when expected"
                        name =""
                    />
                    <SympComp
                        label = "Runs about or climbs excessively at inappropriate times"
                        name =""
                    />
                    <SympComp
                        label = "Has difficulty playing quietly"
                        name =""
                    />
                    <SympComp
                        label = "Is 'on the go' or often acts as if 'driven by a motor'"
                        name =""
                    />
                    <SympComp
                        label = "Talks excessively"
                        name =""
                    />
                    <SympComp
                    label = "Blurts out answers before questions complete"
                    name =""
                    />
                    <SympComp
                        label = "Has difficulty awaiting turn"
                        name =""
                    />
                    <SympComp
                        label = "Interrupts or intrudes on others"
                        name =""
                    />
                    <SympComp
                        label = "Difficulty with homework completion"
                        name =""
                    />
                    <SympComp
                        label = "Problematic school performance"
                        name =""
                    />
                    <SympComp
                        label = "Difficulty in social situations with peers"
                        name =""
                    />
                    <SympComp
                        label = "Challenges in the morning routine"
                        name =""
                    />
                    <SympComp
                        label = "Difficulty with time management"
                        name =""
                    />
                    <SympComp
                        label = "Difficulty with siblings"
                        name =""
                    />
                    <SympComp
                        label = "Difficulty managing anger or disappointment"
                        name =""
                    />
                    <SympComp
                        label = "Oppositional with parents"
                        name =""
                    />
                    <SympComp
                        label = "Aggressive verbally"
                        name =""
                    />
                    <SympComp
                        label = "Aggressive physically"
                        name =""
                    />
                    <SympComp
                        label = "Mood changes quickly and drastically"
                        name =""
                    />
                    <SympComp
                        label = "Less social with friends, looks dull or flat"
                        name =""
                    />
                    <SympComp
                        label = "Is tired during the day"
                        name =""
                    />
                    <SympComp
                        label = "Is dull, flat, “loss of spirit” not him or herself"
                        name =""
                    />
                    <SympComp
                        label = "Is worried or anxious about things"
                        name =""
                    />
                    <SympComp
                        label = "Is sad, depressed, low mood, tearful"
                        name =""
                    />
                    <SympComp
                        label = "Is irritated easily by things or crabby feeling"
                        name =""
                    />
                    <SympComp
                        label = "Reacts emotionally i.e. yelling, slamming doors"
                        name =""
                    />
                    <SympComp
                        label = "Tics or movements, twitches, jerks or noises"
                        name =""
                    />
                    <SympComp
                        label = "Habits such as nail biting or skin picking"
                        name =""
                    />
                    <SympComp
                        label = "Decreased appetite"
                        name =""
                    />
                    <SympComp
                        label = "Difficulty falling asleep"
                        name =""
                    />



                </main>
            </div>
        );
    }
}



export default FormSym;