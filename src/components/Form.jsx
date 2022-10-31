import { useState } from "react"
import useEstate from "../hook/useEstate.jsx"
import Alert from "./Alert.jsx"


const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [alert, setAlert] = useState({
        msg: '',
        error: null
    })

    const {sendData} = useEstate()


    const handleSubmit = (e) => {
        e.preventDefault()
        //prevent to send void data to the db
        if([name, email, text].includes('')){
            setAlert({msg: 'error: Complete All the fields', error: true });
            return
        }else if(name.length < 5 || email.length < 5 || text.length < 5){
            setAlert({msg: 'error: Min 5 characters', error: true });
            return
        }
        const data = {
            name,
            email,
            text
        }
        
        sendData(data);
        //clean al the field
        setEmail('')
        setName('')
        setText('')
        //create a alert for the user
        setAlert({msg: 'your question has been sent successfully', error: false });

        setTimeout(() => {
            setAlert({})
        }, 3000);
    }
    
    const {msg} = alert
  return (
    <form className='form container' onSubmit={handleSubmit}>
        <h1 className='form__title container'>Contact <span>with us</span></h1>
        {msg && <Alert alert={alert}/>}
        <div className='form__entries'>
            <label className='form__label' htmlFor="name">Name:</label>
            <input id='name' placeholder='Enter your Name' className='form__input' type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className='form__entries'>
            <label  className='form__label' htmlFor="email">Email:</label>
            <input id='email' placeholder='Enter your Email' className='form__input' type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            <label className='form__label' htmlFor="text">Messages:</label>
            <textarea id='text' rows={8} placeholder='Enter your message' className='form__textarea'
            value={text}
            onChange={(e) => setText(e.target.value)}
            ></textarea>
        </div>

        <input className='form__btn' type="submit" value={'Send'} />
    </form>
  )
}

export default Form