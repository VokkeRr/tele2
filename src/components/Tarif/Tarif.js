
import React from 'react'

export default function Tarif({ tele }) {
    return (
        <div className="main">
            <ul className="main-block">
                {tele.hitsale &&
                    <div className="hitSale">
                        <div className="hit">
                            {tele.hit}
                        </div>
                        <div className="sale" >
                            {tele.sale}
                        </div>
                    </div>}
                <li className="main-block-item-1">
                    <div className="title" >{tele.title}</div>
                </li>
                <li className="main-block-item-2">
                    {tele.titleText}
                    <div className="price">
                        {tele.price}
                    </div>
                </li>
                <li className="main-block-item-3">
                    <div className="dollar">
                        {tele.ruble}
                    </div>
                    <div className="month">
                        {tele.month}
                    </div>
                </li>
                <li className="main-block-item-11"></li>
                <li className="main-block-item-4">
                    <div className="trafic" >
                        {tele.trafic}
                        {tele.mb}
                        {tele.gb}
                    </div>
                </li>
                <li className="main-block-item-5">
                    {tele.withoutlimitStatus && <div className="withoutlimit" >{tele.withoutlimit}</div>}
                </li>
                <li className="main-block-item-6">
                    <div className="social" >
                        {tele.socialStatus && tele.social.map(o => <img className="imgSocial" src={o} alt="social-icon" />)}
                    </div>
                    <h4>{tele.internetOutSide}</h4>
                </li>
                <li className="main-block-item-7">
                    {tele.timeMinStatus &&
                        <div className="time" >
                            {tele.time}{" "}
                            {tele.min}
                        </div>
                    }
                </li>
                <li className="main-block-item-8">
                    {tele.messageCountAndSmS &&
                        <div className="messageCount" >
                            {tele.messageCount}{" "}
                            {tele.sms}
                        </div>
                    }
                </li>
                <li className="main-block-item-9">
                    <div className="butBtn">
                        {tele.buyButton}
                    </div>
                </li>
                <li className="main-block-item-10">
                    <div className="text" >
                        {tele.text}
                    </div>
                </li>
            </ul>
        </div >
    )
}



