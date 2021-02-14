import {Card} from 'antd';
import './cardCustom.scss';

const CardCustom = (props) => {
    return (
        <Card className="cardCustom" style={props.style}>
            {props.children}
        </Card>
    )
}

export default CardCustom;
