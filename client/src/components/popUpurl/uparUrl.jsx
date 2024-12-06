import React from 'react'
import './style.css';
import imgs from '../../imgs/arrayImagens';


function uparUrl() {
    return (
        <div className="popupUrl">
            <img src={imgs.TreinOffer} alt="" className='logo-trein'/>
            <div className="telinhaUrl">
                <button className='close-red'>X</button>
                <div className="inputs">
                    <input type="checkbox" name="" id="" />
                </div>          
            </div>
        </div>
    )
}

export default uparUrl