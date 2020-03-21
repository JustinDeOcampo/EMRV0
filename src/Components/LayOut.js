import React from 'react'
import { Layout, Tabs, Button } from 'antd';
import FormDev from "../FormComponents/FormDev";
import FormSym from "../FormComponents/FormSym";

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const operations = <Button>Export File</Button>;





class LayOut extends React.Component {
    render() {
        return (
            <Layout>

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
        )
    }
}


export default LayOut