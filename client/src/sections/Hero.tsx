import  barberbackground  from "../assets/barberbackground.jpg"

export const Hero = () => {
    return (
        <section className="w-full h-screen mt-20 lg:mt-0">
         <img 
           src={barberbackground}
           alt="Hero section image"
           className="w-screen h-full object-cover object-center"
         /> 
      </section>
   )
}
