import React from 'react'
import { Layout, message  } from 'antd';
import FormDev from "../FormComponents/FormDev";
import FormSym from "../FormComponents/FormSym";
import FormSubmit from "../FormComponents/FormSubmit";

const { Header, Footer, Content } = Layout;



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
          <div id="form-content-to-pdf">
            <Layout>
                {/*header styling*/}
                <Header style={{ zIndex: 1, width: '100%', height: '85px'}}>
                    <h1 style = {{color: 'white'}}>Melmed Center</h1>
                </Header>
              <Content>
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                  <div style = {{paddingLeft: '20px'}}>
                      <FormDev/>
                      <FormSym/>
                  </div>
                  <FormSubmit/>
                </div>
              </Content>
              <Footer style={{textAlign: 'center'}}>4848 E. Cactus Rd. Ste. #940, Scottsdale, AZ 85254 | Phone (480) 443-0050 | Fax (480) 443-4018 | Toll Free 877-587-1770</Footer>
            </Layout>
          </div>
        )
    }
}


export default LayOut