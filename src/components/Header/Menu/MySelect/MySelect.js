import React,{useState} from 'react'
import './mySelect.css'
import arrowBottom from '../../../../img/arrow_bottom.png'

export default function MySelect({languages}){


    const [openedSelect, setValue] = useState("false")
    const [lngs, setLngs] = useState(languages)

    const toogleSelect = () => {
        setValue(!openedSelect)
    }
    const changeLng = (lang) => {
        const arr = lngs.filter(lng => {
            return lng.id!= lang.id
        })
        const selected = lngs.filter(lng => {
            return lng.id == lang.id
        })
        setLngs(selected.concat(arr))
        toogleSelect()
    }

    return(
        <div className={`my-select ${!openedSelect ? "grey" : ""}`}>
            
            <div className="selected" onClick={toogleSelect}>
                <img key={lngs[0].id} className="select-img" src={lngs[0].img}></img>
                <img className="arrow" src={arrowBottom}></img>
            </div>
            <div className={`dropdown ${openedSelect ? "closed" : ""}`}>
                {lngs.slice(1).map((language) => {
                    return <img key={language.id} className="select-img" src={language.img} onClick={()=>changeLng(language)}></img>
                })}
            </div>
            
        </div>
    )
}