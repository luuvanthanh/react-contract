import React from "react";
import style from './Contract.module.css';

function Contract() {
    return (
        <div className={style.container}>
            <div className="header">
                <h2 className={style.tieudetop}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                <h3 className={style.tieudetop}>Độc lập - Tự do - Hạnh phúc</h3>
                <div className={style.tieude}>
                    <div className={style.tieudetrai}>
                        <div className={style.tieudetraitop}>
                            <label className={style.tendv}>Tên đơn vị:</label>
                            <input className={style.tieudeten} placeholder="Nhập tên đơn vị ......"></input>
                        </div>
                        <div className={style.tieudetraibottom}>
                            <label className={style.tendv}>Sổ:</label>
                            <input className={style.tieudeten} placeholder="Nhập sổ ......"></input>
                        </div>
                    </div>
                    <div className={style.tieudephai}>
                        <p>Đà Nẵng,</p>
                        <p>ngày</p>
                        <input placeholder="ngày .."></input>
                        <p>tháng</p>
                        <input placeholder="tháng .."></input>
                        <p>năm</p>
                        <input placeholder="năm .."></input>
                    </div>
                </div>
            </div>
            <div className={style.main}>
                <h2 className={style.mainhopdong}>HỢP ĐỒNG LAO ĐỘNG</h2>
                <p className={style.maininformation}>
                    (Ban hàng kèm theo TT số 21/2003/TT - BLĐTBXH ngày 22/09/2003 của Bộ Lao Động - 
                    Thương binh và Xã hội)
                </p>
            </div>
            <div className="footer">

            </div>
        </div>
    );
}

export default Contract;