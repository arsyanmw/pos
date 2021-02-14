import {Row, Col, Statistic} from 'antd';
import {
    Area,
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {CardCustom} from '../../../component';

const Analistik = () => {
    const data = [
        {
            date: 'Senin', topUp: 12000, pulsa: 12000, listrik: 0
        },
        {
            date: 'Selasa', topUp: 10000, pulsa: 7000, listrik: 22000
        },
        {
            date: 'Rabu', topUp: 22000, pulsa: 0, listrik: 0
        },
        {
            date: 'Kamis', topUp: 10000, pulsa: 12000, listrik: 0
        },
        {
            date: 'Jumat', topUp: 10000, pulsa: 7000, listrik: 52000
        },
        {
            date: 'Sabtu', topUp: 22000, pulsa: 19000, listrik: 22000
        },
        {
            date: 'Minggu', topUp: 0, pulsa: 12000, listrik: 0
        }
    ];

    let sumTopUp = data.reduce((a, b) => a + b.topUp, 0);
    let sumPulsa = data.reduce((a, b) => a + b.pulsa, 0);
    let sumlistrik = data.reduce((a, b) => a + b.listrik, 0);
    let sumSale = sumTopUp + sumPulsa + sumlistrik;

    return (
        <Row>
            <Col span={24}>
                <Row justify={'space-between'}>
                    <Col lg={18} xs={24} style={{marginBottom: 20}}>
                        <CardCustom>
                            <h2>Data Mingguan</h2>
                            <ResponsiveContainer width="100%" height={400}>
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="topUp" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FA4F2E" stopOpacity={0.9}/>
                                            <stop offset="95%" stopColor="#D82474" stopOpacity={0.1}/>
                                        </linearGradient>
                                        <linearGradient id="pulsa" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#4CA9DF" stopOpacity={0.9}/>
                                            <stop offset="95%" stopColor="#292E91" stopOpacity={0.1}/>
                                        </linearGradient>
                                        <linearGradient id="listrik" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FFAE00" stopOpacity={0.9}/>
                                            <stop offset="95%" stopColor="#F9E866" stopOpacity={0.1}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey={'date'} />
                                    <YAxis />
                                    <Tooltip separator={' : Rp. '} labelStyle={{fontWeight: 800}} />
                                    <Legend layout={'vertical'} iconType={"square"} verticalAlign={"middle"} />
                                    <Area name={"Top Up"} type={"monotone"} dataKey={'topUp'} stroke={"#FA4F2E"} fillOpacity={1} fill={"url(#topUp)"} />
                                    <Area name={"Pulsa"} type={"monotone"} dataKey={'pulsa'} stroke={"#4CA9DF"} fillOpacity={1} fill={"url(#pulsa)"} />
                                    <Area name={"Listrik"} type={"monotone"} dataKey={'listrik'} stroke={"#F9E866"} fillOpacity={1} fill={"url(#listrik)"} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardCustom>
                    </Col>
                    <Col lg={5} xs={24}>
                        <Row>
                            <Col span={24}>
                                <CardCustom>
                                    <Statistic
                                        title={'Top Up'}
                                        prefix={'Rp. '}
                                        valueStyle={{color: '#FA4F2E'}}
                                        value={sumTopUp}
                                    />
                                </CardCustom>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 13}}>
                            <Col span={24}>
                                <CardCustom>
                                    <Statistic
                                        title={'Pulsa'}
                                        prefix={'Rp. '}
                                        valueStyle={{color: '#4CA9DF'}}
                                        value={sumPulsa}
                                    />
                                </CardCustom>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 13}}>
                            <Col span={24}>
                                <CardCustom>
                                    <Statistic
                                        title={'Listrik'}
                                        prefix={'Rp. '}
                                        valueStyle={{color: '#E9941A'}}
                                        value={sumlistrik}
                                    />
                                </CardCustom>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 13}}>
                            <Col span={24}>
                                <CardCustom>
                                    <Statistic
                                        title={'Total Penjualan'}
                                        prefix={'Rp. '}
                                        value={sumSale}
                                    />
                                </CardCustom>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Analistik;
