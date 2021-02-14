import {useState} from "react";
import {
    Row,
    Col,
    Tabs,
    Table,
    Button,
    Modal,
    Form,
    Select
} from 'antd';
import { CgSmartphone } from "react-icons/cg";
import { IoFlashOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import './produk.scss';

const {TabPane} = Tabs;
// const {Column} = Table;
const {Option} = Select;

const Produk = () => {
    const [isVisible, setIsVisible] = useState(false);

    const category = [
        {
            key: 1,
            name: 'pulsa',
            title: 'Pulsa',
            desc: 'Pulsa',
            icon: <CgSmartphone style={{color: '#037E8C'}} />
        },
        {
            key: 2,
            name: 'listrik',
            title: 'Listrik',
            desc: 'Listrik',
            icon: <IoFlashOutline style={{color: '#7EC544'}} />
        },
        {
            key: 3,
            name: 'top_up',
            title: 'Top Up',
            desc: 'Top Up',
            icon: <IoGameControllerOutline style={{color: '#2748AO'}} />
        }
    ];

    const [tab, setTab] = useState(category[0]);

    const columns = [
        {
            title: 'Nama Produk',
            dataIndex: 'product_name',
            sorter: (a, b) => a.product_name.length - b.product_name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            sorter: (a, b) => a.qty - b.qty,
            filters: [
                {
                    text: 'Pulsa',
                    value: 'pulsa'
                },
                {
                    text: 'Listrik',
                    value: 'listrik'
                },
                {
                    text: 'Top Up',
                    value: 'top_up'
                }
            ],
            onFilter: (value, record) => record.type.indexOf(value) === 0,
            sortDirections: ['descend', 'ascend'],
            width: '30%'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.qty - b.qty,
            sortDirections: ['descend', 'ascend'],
        }
    ];

    // Data Select
    const type = ['Top Up', 'Pulsa', 'Listrik'];

    const data = [
        {
            key: '1',
            product_name: 'Top Up FF',
            qty: 10000,
            price: 8000,
            type: 'top_up'
        },
        {
            key: '2',
            product_name: 'Pulsa XL',
            qty: 12000,
            price: 10000,
            type: 'pulsa'
        },
        {
            key: '3',
            product_name: 'Listrik',
            qty: 22000,
            price: 20000,
            type: 'listrik'
        },
        {
            key: '4',
            product_name: 'Top Up FF',
            qty: 10000,
            price: 8000,
            type: 'top_up'
        },

    ];

    return (
        <Row>
            <Col span={24}>
                <Tabs activeKey={`${tab.key}`} onChange={(e) => {
                    let cat = category.filter(value => value.key == e)[0]
                    return setTab(cat)
                }}>
                    {category.map((v) => (
                        <TabPane
                            key={v.key}
                            tab={
                                <Row>
                                    <Col span={10}>{v.icon}</Col>
                                    <Col span={10}>{v.title}</Col>
                                </Row>
                            }
                        >
                            <Row>
                                <Col span={24}>
                                    <Row justify={"end"}>
                                        <Col flex={0}>
                                            <Button className="btnAdd" onClick={() => setIsVisible(!isVisible)}>Tambah Transaksi</Button>
                                        </Col>

                                        <Modal
                                            footer={null}
                                            visible={isVisible}
                                            onOk={() => setIsVisible(!isVisible)}
                                            onCancel={() => setIsVisible(!isVisible)}
                                            width={'70%'}
                                        >
                                            <Row justify={"space-between"} style={{marginTop: 25}}>
                                                <Col span={24} style={{padding: 10}}>
                                                    <Form>
                                                        <Row justify={'space-between'}>
                                                            <Col lg={10} sm={24}>
                                                                <Form.Item
                                                                    label={"Nama Produk"}
                                                                    name={"productName"}
                                                                    rules={[{required: true, message: 'Isi dulu nama produknya!'}]}
                                                                >
                                                                    <Select defaultValue={type[0]}>
                                                                        {type.map(t => (
                                                                            <Option key={t}>{t}</Option>
                                                                        ))}
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col lg={10} sm={24}>
                                                                <Form.Item
                                                                    label={"Qty"}
                                                                    name={"qty"}
                                                                    rules={[{required: true, message: 'Isi dulu qty nya!'}]}
                                                                >
                                                                    <Select defaultValue={type[0]}>
                                                                        {type.map(t => (
                                                                            <Option key={t}>{t}</Option>
                                                                        ))}
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col lg={10} sm={24}>
                                                                <Form.Item
                                                                    label={"Qty"}
                                                                    name={"transactionQty"}
                                                                    rules={[{required: true, message: 'Isi dulu Harganya!'}]}
                                                                >
                                                                    <Select defaultValue={type[0]} style={{width: '100%'}}>
                                                                        {type.map(t => (
                                                                            <Option key={t}>{t}</Option>
                                                                        ))}
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                        <Form.Item>
                                                            <Button type={"primary"} htmlType={"submit"}>Kirim</Button>
                                                        </Form.Item>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </Modal>
                                    </Row>
                                    <Row style={{marginTop: 20}}>
                                        <Col span={24}>
                                            <Table columns={columns} dataSource={data.filter(v => {
                                                return v.type === tab.name
                                            })}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </TabPane>
                    ))}
                </Tabs>
            </Col>
        </Row>
    )
}

export default Produk;
