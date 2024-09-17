import Title from "./title"
import { services } from "../data"
import Service from "./service"

const Services = () => {
  return (
    <div>
       <section className="section services" id="services">
        <Title title='our' subTitle='services'/>
        
      <div className="section-center services-center">

        {services.map ((service) => {
            return <Service key={service.id} {...service}/>
        })}
      </div>
    </section>

    </div>
  )
}

export default Services
