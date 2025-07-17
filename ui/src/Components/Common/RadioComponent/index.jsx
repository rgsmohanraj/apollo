// import "./style.scss";
// import { Form, Radio } from 'antd';

// const RadioComponent = ({ checked, onChange,disabled, label ,value,name}) => {
//     return (<>
//             <Radio
//                 className={`radio`}
//                 checked={checked}
//                 onChange={onChange}
//                 disabled={disabled}
//             />
//     </>)
// }

// export default RadioComponent;




import {Form} from 'react-bootstrap';
import "./style.scss";
 
const SwitchComponent = ({label,id,checked,type,disabled,value,onChange,name}) => {
    return (
        <Form.Group className={!label ? " ":"d-flex mb-3 switch"}>
            {type !== "radio"&&<Form.Label className="color-tooltip-bg fw-600 fs-14 lh-28 me-2">{label}</Form.Label>}
            <Form.Check
                disabled={disabled}
                type={type}
                id={id}
                className={"radio"}
                name={name}
                label={type === "radio"&& label &&<span className="">{label}</span>}
                value={value}
                checked={checked}
                onChange={onChange}
            />
        </Form.Group>
    );
}
 
export default SwitchComponent;