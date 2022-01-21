import React from "react";
import style from './Contract.module.css';
import HtmlEditor, { Toolbar, Item } from "devextreme-react/html-editor";
import { useState } from "react/cjs/react.development";


const attribute = [
    {id: 1, lable: "Ho_va_ten", entity_id: 1},
    {id: 2, lable: "Email", entity_id: 1},
    {id: 3, lable: "Phone", entity_id: 1},
];
const Contract = React.forwardRef((props, ref) => {

    const htmlEditor=props.inputRef;// Nhận ref từ prop của cha

    const [hoten, setHoTen] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleClick = (item) => {
        item = '{{'+item+'}}';
        // console.log(item);
        console.log(htmlEditor.current.instance);
        htmlEditor.current.instance.insertText(
        htmlEditor.current.instance.getSelection().index,
            item,
            {
              bold: true,
              color: "green",
            }
          );
    }

    const handleHoTen = (e) => {
        setHoTen(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    return (
        <div className={style.container} style={{display: 'flex'}}>
            <HtmlEditor>
            <Toolbar>
            <Item>
                <ul>
                {attribute.map((key, index)=> {
                    return (
                        <>
                            <li onClick={() => handleClick(attribute[index].lable)}
                                style={{
                                    border: '1px solid black', 
                                    width: '400px', listStyleType: 'none', 
                                    padding: '10px', cursor: 'pointer'
                                }} 
                                key={index}>{attribute[index].lable}
                            </li>
                        </>
                    );
                })}
            </ul>
            </Item>
            </Toolbar>
            </HtmlEditor>
            <div style={{marginTop: '20px'}}>
                <input style={{height: '35px'}} value={hoten} onChange={(e) => handleHoTen(e)} type="text" placeholder="Nhập họ và tên"></input>
                <input style={{height: '35px'}} value={email} onChange={(e) => handleEmail(e)} type="text" placeholder="Nhập email"></input>
                <input style={{height: '35px'}} value={phone} onChange={(e) => handlePhone(e)} type="text" placeholder="Nhập số điện thoại"></input>
            </div>
        </div>
    );
});
export default Contract;