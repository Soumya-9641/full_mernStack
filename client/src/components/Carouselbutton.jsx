import React from 'react'
import {left,right} from "../assets"
const Carouselbutton = ({ handleClickPrev, handleClicknext }) => {
  return (
    <div>

        <button className='' src={left} side="prev" onClick={handleClickPrev} />
      <button src={right} side="next" onClick={handleClicknext} />

    </div>
  )
}

export default Carouselbutton