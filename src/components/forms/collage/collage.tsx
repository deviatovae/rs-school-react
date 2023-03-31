import React from 'react'
import './collage.scss'

export function Collage() {
  return (
    <div className="form-collage">
      <div className="form-collage__left">
        <img className="l-img1" src="/img/collage/left1.jpg" alt="" />
        <img className="l-img2" src="/img/collage/left2.jpg" alt="" />
        <img className="l-img3" src="/img/collage/left3.jpg" alt="" />
        <img className="l-img4" src="/img/collage/left4.jpg" alt="" />
      </div>
      <div className="form-collage__right">
        <img className="r-img1" src="/img/collage/right1.jpg" alt="" />
        <img className="r-img2" src="/img/collage/right2.jpg" alt="" />
        <img className="r-img3" src="/img/collage/right3.jpg" alt="" />
        <img className="r-img4" src="/img/collage/right4.jpg" alt="" />
      </div>
    </div>
  )
}
