import {useState} from "react";
import {
    Row,
    Col,
    Statistic,
    Button,
    Table,
    Modal,
    Form,
    Input,
    DatePicker,
    Select
} from 'antd';
import {CardCustom} from '../../../component';
import './home.scss';
import Axios from 'axios';

const {Option} = Select;

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [form, setForm] = useState({
        name: '',
        date: '',
        transType: '',
        phone: ''
    });
    const [price, setPrice] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const handleSearchPhoneProvider = (e = null, type = null) => {
        setIsLoading(true);
        const prefix = e == null ? form.phone.toString().slice(0,4) : e.toString().slice(0,4);
        console.log(form);

        Axios.get(`http://localhost:8000/api/price-${type == null ? 'credit' : type}/${prefix}`)
            .then(res => {
                setPrice(res.data.data);
                setIsLoading(false);
                console.log(res.data.data)
            })
            .catch(err => console.log(err))
    }

    const salesCard = [
        {
            title: 'Total Transaksi Pulsa',
            value: 8
        },
        {
            title: 'Total Transaksi Top Up',
            value: 12
        },
        {
            title: 'Total Transaksi Listrik',
            value: 5
        }
    ]

    // Count total transaction
    let sumTransaction = salesCard.reduce((a, b) => a + b.value, 0);

    // Data Table
    const columns = [
        {
            title: 'Nama',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Produk',
            dataIndex: 'product',
            sorter: (a, b) => a.product.length - b.product.length,
            filters: [
                {
                    text: 'Pulsa',
                    value: 'Pulsa'
                },
                {
                    text: 'Listrik',
                    value: 'Listrik'
                },
                {
                    text: 'Top Up',
                    value: 'Top Up'
                }
            ],
            onFilter: (value, record) => record.product.indexOf(value) === 0,
            sortDirections: ['descend', 'ascend'],
            width: '30%'
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            sorter: (a, b) => a.qty - b.qty,
            sortDirections: ['descend', 'ascend'],
        }
    ];

    const data = [
        {
            key: '1',
            name: 'Refa',
            product: 'Top Up',
            qty: 10000,
        },
        {
            key: '2',
            name: 'Refa',
            product: 'Listrik',
            qty: 20000,
        },
        {
            key: '3',
            name: 'Refa',
            product: 'Pulsa',
            qty: 10000,
        },
        {
            key: '4',
            name: 'Riski (iki)',
            product: 'Top Up',
            qty: 12000,
        },
    ];

    // Data Select
    const type = [
        {
            name: 'Top Up',
            key: 'topup'
        },
        {
            name: 'Pulsa',
            key: 'credit'
        },
        {
            name: 'Paket Data',
            key: 'paketData'
        },
        {
            name: 'Listrik',
            key: 'listrik'
        },
    ];

    return (
        <Row>
            <Col span={24}>
                <Row justify={'space-between'} gutter={[5, 5]}>
                    {salesCard.map((v, i) => (
                        <Col lg={5} sm={12} xs={24} key={i}>
                            <CardCustom>
                                <Statistic title={v.title} value={v.value} />
                            </CardCustom>
                        </Col>
                    ))}
                    <Col lg={5} sm={12} xs={24}>
                        <CardCustom>
                            <Statistic title={'Total Transaksi'} value={sumTransaction} />
                        </CardCustom>
                    </Col>
                </Row>

                <Row id="tableHome">
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
                                width={'70%'}
                            >
                                <Row justify={"space-between"} style={{marginTop: 25}}>
                                    <Col span={24} style={{padding: 10}}>
                                        <Form>
                                            <Row justify={'space-between'}>
                                                <Col lg={10} sm={24}>
                                                    <Form.Item
                                                        label={"Nama"}
                                                        name={"nama"}
                                                    >
                                                        <Input placeholder={"Nama"} />
                                                    </Form.Item>
                                                </Col>
                                                <Col lg={10} sm={24}>
                                                    <Form.Item
                                                        label={"Tanggal"}
                                                        name={"date"}
                                                        rules={[{required: true, message: 'Isi dulu tanggalnya!'}]}
                                                    >
                                                        <DatePicker style={{width: '100%'}}/>
                                                    </Form.Item>
                                                </Col>
                                                <Col lg={10} sm={24}>
                                                    <Form.Item
                                                        label={"Tipe Transaksi"}
                                                        name={"transactionType"}
                                                        rules={[{required: true, message: 'Isi dulu Tipenya!'}]}
                                                    >
                                                        <Select placeholder={'Pilih Tipe Transaksi'}
                                                                onChange={(e) => {
                                                                    setForm({
                                                                        ...form,
                                                                        transType: e
                                                                    });
                                                                    handleSearchPhoneProvider(null, e);
                                                                }}>
                                                            {type.map(t => (
                                                                <Option value={t.key} key={t.key}>{t.name}</Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                </Col>
                                                <Col lg={10} sm={24}>
                                                    <Form.Item
                                                        label={"Nomor Telepon"}
                                                        name={"phone"}
                                                        rules={[{required: true, message: 'Isi dulu nomornya!'}]}
                                                    >
                                                        <Input
                                                            placeholder={"Nomor Telepon"}
                                                            onChange={(e) => {
                                                                setForm({
                                                                    ...form,
                                                                    phone: e.target.value
                                                                });
                                                                handleSearchPhoneProvider(e.target.value, null);
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row justify={'space-between'}>
                                                <Col lg={10} sm={24}>
                                                    <Form.Item
                                                        label={"Qty"}
                                                        name={"transactionQty"}
                                                        rules={[{required: true, message: 'Isi dulu Harganya!'}]}
                                                    >
                                                        <Select
                                                            showSearch
                                                            optionFilterProp={'children'}
                                                            filterOption={(input, option) =>
                                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                            filterSort={(optionA, optionB) =>
                                                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                                            }
                                                            style={{width: '100%'}}
                                                            placeholder={'Pilih Qty'}
                                                            loading={isLoading}
                                                            disabled={isLoading}
                                                        >
                                                            {price && price.map(t => (
                                                                <Option key={t.partner_package.package.id}>{t.partner_package.package.name}</Option>
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
                    </Col>
                    <Col span={24} style={{marginTop: 20}}>
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Home;
