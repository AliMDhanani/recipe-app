import React from 'react'

const FoodGallery = ({imgsrc, pt}) => {
  return (
    <div className='food__image' style={{paddingTop: pt}}>
      <img src={imgsrc} alt="" />
    </div>
  )
}

export default FoodGallery