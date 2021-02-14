import {Row, Col, Typography, Button} from 'antd';
import {CardCustom} from '../../../component';
import './profile.scss'

const {Title} = Typography;

const Profile = () => {
    return (
        <Row>
            <Col span={24}>
                <CardCustom style={{height: '60vh', marginTop: '15vh'}}>
                    <Row justify={'space-around'} align={'middle'} style={{marginTop: '15vh'}}>
                        <Col span={16}>
                            <Title>Hello, <h3 style={{display: 'inline'}}>Nama</h3></Title>
                            <Button type={'primary'} shape={'round'}>Edit</Button>
                        </Col>
                        <Col span={6}>
                            <Row justify={'center'} align={'middle'}>
                                <Col span={12}>
                                    <div className="pictProfile" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardCustom>
            </Col>
        </Row>
    )
};

export default Profile;
