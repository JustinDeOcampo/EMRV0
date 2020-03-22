import React from 'react'
import { Layout, Button, Steps, message  } from 'antd';
import FormDev from "../FormComponents/FormDev";
import FormSym from "../FormComponents/FormSym";
import FormSubmit from "../FormComponents/FormSubmit";

const { Header } = Layout;


const { Step } = Steps;

/*this file handles the overall layout of the website*/

/*object to hold what the content of each step is*/
const steps = [
    {
        title: 'First',
        content: <FormDev/>,
    },
    {
        title: 'Second',
        content: <FormSym/>,
    },
    {
        title: 'Submit',
        content: <FormSubmit/>,
    },
];





class LayOut extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            current: 0,
        };
    }

    /*handles previous and next button clicks*/
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div>

                {/*header styling*/}
                <Header style={{ zIndex: 1, width: '100%', height: '85px'}}>
                    <h1 style = {{color: 'white'}}>Melmed Center</h1>
                </Header>


                <div style = {{margin: 32}}>
                    {/*Renders first, second, and the submit step */}
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>

                    {/*Renders the content of the current step*/}
                    <div className="steps-content">
                        {steps[current].content}
                    </div>

                    {/*Renders and handles the button changes of next and prev*/}
                    <div className="steps-action">
                        {current > 0 && (
                            <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )}
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button style={{textAlign: 'right'}} type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                    </div>
                </div>

            </div>

            /*Layout>

                <Header style={{position: 'fixed', zIndex: 1, width: '100%', height: '85px'}}>
                    <h1 style = {{color: 'white'}}>Melmed Center</h1>
                </Header>

                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>

                    <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>

                        <Tabs tabBarExtraContent={operations}>
                            <TabPane tab="Developmental Consultation" key="1">
                                <FormDev/>
                            </TabPane>
                            <TabPane tab="Symptoms Checklist" key="2">
                                <FormSym/>
                            </TabPane>
                        </Tabs>

                    </div>
                </Content>

                <Footer style={{textAlign: 'center'}}>4848 E. Cactus Rd. Ste. #940, Scottsdale, AZ 85254 | Phone (480) 443-0050 | Fax (480) 443-4018 | Toll Free 877-587-1770</Footer>
            </Layout>
            */
        )
    }
}


export default LayOut