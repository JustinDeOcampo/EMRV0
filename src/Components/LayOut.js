import React from 'react'
import { Layout, Button, Steps, message  } from 'antd';
import FormDev from "../FormComponents/FormDev";
import FormSym from "../FormComponents/FormSym";
import FormSubmit from "../FormComponents/FormSubmit";

const { Header, Footer } = Layout;



/*this file handles the overall layout of the website*/

class LayOut extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            current: 0,
        };
    }

    render() {
        return (
            <div>

                {/*header styling*/}
                <Header style={{ zIndex: 1, width: '100%', height: '85px'}}>
                    <h1 style = {{color: 'white'}}>Melmed Center</h1>
                </Header>
                <div style = {{paddingLeft: '20px'}}>
                    <FormDev/>
                    <FormSym/>
                    <FormSubmit/>
                </div>
                <Footer style={{textAlign: 'center'}}>4848 E. Cactus Rd. Ste. #940, Scottsdale, AZ 85254 | Phone (480) 443-0050 | Fax (480) 443-4018 | Toll Free 877-587-1770</Footer>
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