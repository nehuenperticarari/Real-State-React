import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import img from '../assets/headerImg.jpg'
const Us = () => {
  return (
    <>
    <Header/>

    <main className='container about text-center'>
      <h2 className="about__title">Learn more <span>about us</span></h2>

      <div className="about__content">
        <div className="about__image">
          <img src={img} alt="imagen about" />
        </div>

        <div className="about__text">

            <p>Every day is taco ipsum tuesday. Carne asada on corn tortillas. Give me tacos, or give me death. Add in a few el Pastor with guac and diced onions. 50 cent tacos! I’ll take 30. It’s raining tacos, from out of the sky, tacos, don’t even ask why. </p>
            <blockquote>Excellent taste</blockquote>
            <p>Tacos al pastor made with adobada meat. Can you put some peppers and onions on that? Tacos, again? This will be 5 times this week and it’s only Tuesday. If you were a taco, would you eat yourself? Give me all the tacos, immediately. 50 cent tacos! I’ll take 30. Shrimp tacos are tasty tacos!</p>
        
        </div>

      </div>
    </main>
    
    <Footer/>
  </>
  )
}

export default Us