import React,{useState} from 'react'
import "./menu.css"
import logo from '../../../img/logo.png'
import vector from '../../../img/Vector.png'
import ukraine from '../../../img/ukraine.png'
import russia from '../../../img/russia.png'
import uk from '../../../img/UK.png'
import arrow from '../../../img/arrow.png'
import arrowBottom from '../../../img/arrow_bottom.png'
import MySelect from './MySelect/MySelect';

export default function Menu(){
    //toogle className for animation
    const [isMenuOpen, setMenu] = useState("false");
    const [isSearchOpen, setSearch] = useState("false");
    

    const openMenu = () => {
        setMenu(!isMenuOpen);
      };
      const openSearchBox = () =>{
        setSearch(!isSearchOpen);
    }

    //prevent scroll when menu open
    if(!isMenuOpen){
        document.body.style.height= "100vh";
        document.body.style.overflowY= "hidden";
    }else{
        document.body.style.height= "auto";
        document.body.style.overflowY= "visible";
    }

    return(
    <>
        <div className="top-part-menu">
                 <div className="left-col">
                    <img className="logo" src={logo} alt={"logo"}  />
                 </div>

                 <div className="desctop-menu">
                    <div className="desc_menu-item active-item">
                        <span>
                        <span><a className="menu-link" href="#">Главная</a></span>
                        </span>
                    </div>
                    <div className="desc_menu-item ">
                        <span><a className="menu-link" href="#">Услуги</a></span>
                        <img className="arrow_bottom" src={arrowBottom}/>
                    </div>
                    <div className="desc_menu-item">
                    <span><a className="menu-link" href="#">Наши работы</a></span>
                    </div>
                    <div className="desc_menu-item">
                        <span><a className="menu-link" href="#">О нас</a></span>
                    </div>
                    <div className="desc_menu-item">
                        <span><a className="menu-link" href="#">Контакты</a></span>
                    </div>
                 </div>

                 <div className="right-col">
                    <img className="vector" src={vector} alt={"vector"} onClick={openSearchBox}
                     hidden={!isSearchOpen ? true : false} />

                    <form  className={`my-input-group ${!isSearchOpen ? "show-search" : ""}`}>
                        <input
                            type="text" 
                            className="form-control my-style-input"
                            placeholder="Поиск" 
                            />
                             
                        <div className="input-group-append">
                            <button 
                                type="submit"
                                className="btn btn-outline-secondary my-style-button"
                                id="button-addon2">
                            <img src={vector}/>
                            </button>
                        </div>
                    </form>
                    <MySelect languages={[
                        {id:1,img: russia, lng: "rissia"},
                        {id:0,img: ukraine, lng: "ukraine"},
                        {id:2,img: uk, lng: "uk"}
                        ]}/>

                    <div className={`container ${!isMenuOpen ? "open" : ""}`}  onClick={openMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                 </div>
        </div>
        <div className="opened-menu" hidden={isMenuOpen ? true : false} >
            <div className="menu-item flex-item">
                <span>Меню</span>
                <div className="flags">
                    <img className="flag" src={russia} />
                    <img className="flag" src={ukraine} />
                    <img className="flag" src={uk} />
                </div>
            </div>
            <div className="menu-item flex-item">
                <span>Услуги</span>
                <img src={arrow} />
            </div>
            <div className="menu-item">
               Наши работы
            </div>
            <div className="menu-item">
                О нас
            </div>
            <div className="menu-item">
                Контакты
            </div>
        </div>
    </>
    )
}