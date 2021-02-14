import {useState} from 'react';
import {Switch, Route, Link, withRouter} from 'react-router-dom';
import {Row, Col, Layout, Typography} from 'antd';
import { FaHome } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import Home from "../../pages/App/Home";
import './style.scss'
import Produk from "../../pages/App/Produk";
import Pelanggan from "../../pages/App/Pelanggan";
import Analistik from "../../pages/App/Analistik";
import Profile from "../../pages/User/Profile";

const {Sider} = Layout;
const {Title} = Typography;

const AppStackNavigator = (props) => {
    const [collapse, setCollapse] = useState(true);
    let {pathname} = props.location;

    const route = [
        {
            label: 'Home',
            route: '/app',
            icon: <FaHome />
        },
        {
            label: 'Produk',
            route: '/app/product',
            icon: <FaThList />
        },
        {
            label: 'Pelanggan',
            route: '/app/cust',
            icon: <FaUsers />
        },
        {
            label: 'Analistik',
            route: '/app/analytic',
            icon: <FaChartArea />
        }
    ]

    return (
        <Row className="appContainer">
            <Col span={24}>
                <Layout>
                    <Sider
                        collapsible
                        theme={'light'}
                        breakpoint={'xl'}
                        onBreakpoint={() => setCollapse(!collapse)} //collapse if below breakpoint
                        collapsedWidth={0}
                        width={250}
                        collapsed={collapse}
                        onCollapse={() => setCollapse(!collapse)}
                    >
                        <Row>
                            <Col span={24} className="contentWrapper">
                                <Row id="top" justify={'center'} align={'middle'}>
                                    <Col span={18} align={'middle'}>
                                        <div className="profilePict"/>
                                    </Col>
                                    <Col span={18} align={'middle'}>
                                        <Link to="/user/profile">
                                            <div className="textStyle">NAMA</div>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row id="navi" justify={'center'} align={'middle'}>
                                    {route.map((v, i) => (
                                        <Col span={18} key={i} className={pathname === v.route ? "navList active" : "navList"}>
                                            <Link to={v.route}>
                                                <Row className="navigation">
                                                    <Col span={4} className="icon">{v.icon}</Col>
                                                    <Col span={20} className="text">{v.label}</Col>
                                                </Row>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Sider>
                    <Layout style={{minHeight: '100vh' ,padding: '10px 30px'}}>
                        <Title>{route.map(v => v.route === pathname ? v.label : null)}</Title>
                        <Switch>
                            <Route exact path="/app">
                                <Home />
                            </Route>
                            <Route path="/app/product">
                                <Produk />
                            </Route>
                            <Route path="/app/cust">
                                <Pelanggan />
                            </Route>
                            <Route path="/app/analytic">
                                <Analistik />
                            </Route>
                            <Route path="/user/profile">
                                <Profile />
                            </Route>
                        </Switch>
                    </Layout>
                </Layout>
            </Col>
        </Row>
    )
}

export default withRouter(AppStackNavigator);
