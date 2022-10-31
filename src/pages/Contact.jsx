import Footer from '../components/Footer.jsx'
import Form from '../components/Form.jsx'
import Header from '../components/Header.jsx'

const Contact = () => {
  return (
    <>
    <Header/>

    <Form/>
    <p className='form__contact'>Another form of contact is by calling or sending a message to the number <span className='form__contact--bold'>345678431</span></p>
    <Footer/>
  </>
  )
}

export default Contact