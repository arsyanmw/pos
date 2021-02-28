import {useState} from 'react';
import {
    Row,
    Col,
    Table,
    Button,
    Space,
    Modal,
    Form,
    Input
} from 'antd';
import './pelanggan.scss';

const Pelanggan = () => {
    const [isVisible, setIsVisible] = useState(false);

    const columns = [
        {
            title: 'Nama',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            width: '60%'
        },
        {
            title: 'Opsi',
            dataIndex: 'option',
            render: () => (
                <Space size={"middle"}>
                    <p className="anchor" style={{color: 'blue'}}>View</p>
                    <p className="anchor" style={{color: 'orange'}}>Edit</p>
                    <p className="anchor" style={{color: 'red'}}>Delete</p>
                </Space>
            ),
        }
    ];

    const data = [
        {
            key: 1,
            name: 'Refa'
        },
        {
            key: 2,
            name: 'Riski (iki)'
        },
    ];

    return (
        <Row>
            <Col span={24}>
                <Row justify={'end'}>
                    <Col flex={0}>
                        <Button className="btnAdd" onClick={() => setIsVisible(!isVisible)}>Tambah Transaksi</Button>
                    </Col>

                    <Modal
                        footer={null}
                        visible={isVisible}
                        onOk={() => setIsVisible(!isVisible)}
                        onCancel={() => setIsVisible(!isVisible)}
                    >
                        <Row justify={"space-between"} style={{marginTop: 25}}>
                            <Col span={24} style={{padding: 10}}>
                                <Form>
                                    <Row justify={'space-between'}>
                                        <Col span={24}>
                                            <Form.Item
                                                label={"Nama"}
                                                name={"customerName"}
                                                rules={[{required: true, message: 'Isi dulu namanya!'}]}
                                            >
                                                <Input placeholder={"Nama"} />
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
            </Col>
            <Col span={24} style={{marginTop: 20}}>
                <Table columns={columns} dataSource={data} />
            </Col>
        </Row>
    )
}

export default Pelanggan;
