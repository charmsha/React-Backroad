import React from 'react'
import Title from './title'
import {tours} from '../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <div>
        <section class="section" id="tours">
     

      <Title Title='featured' subTitle='tours'/>

      <div class="section-center featured-center">

        {tours.map((tour)=>{

          return(
              <Tour key={tour.id} {...tour}/>
          )

        })}

       
      </div>
    </section>
    </div>
  )
}

export default Tours
