import React from 'react'
import { Col, Select, Divider, Input, Row} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

let index = 0;

{/*
    <DropDownComp
        label = ""
    />
*/}
{/*1. Figure out how to turn this component into one
where you can add a new item,
 2. search for existing items
 */}

class DropDownComp extends React.Component {
    state = {
        items: [],
        name: '',
    };
    onNameChange = event => {
        this.setState({
            name: event.target.value,
        });
    };
    addItem = () => {
        console.log('addItem');
        const { items, name } = this.state;
        this.setState({
            items: [...items, name || `New item ${index++}`],
            name: '',
        });
    };
    render() {
        const { items, name } = this.state;
        const {myProp} = this.props;
        return (
            <div style = {{paddingLeft: '10px'}}>
                <Col >
                    <Row>
                        <label> {this.props.label} </label>
                    </Row>
                    <Select
                        style={{ width: '275px', paddingTop:'8px'}}
                        placeholder="Click here"
                        dropdownRender={menu => (
                            <div>
                                {/*rendering menu*/}
                                {menu}

                                <Divider style={{ margin: '4px 0' }} />
                                {/*button for adding item*/}
                                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                    <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
                                    <a
                                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                        onClick={this.addItem}
                                    >
                                        <PlusOutlined /> Add item
                                    </a>
                                </div>

                            </div>
                        )}
                    >
                        {items.map(item => (
                            <Option key={item}>{item}</Option>
                        ))}
                    </Select>
                </Col>
            </div>
        )
    }
}

export default DropDownComp