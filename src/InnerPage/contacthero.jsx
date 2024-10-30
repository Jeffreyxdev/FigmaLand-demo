import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button';

import { useState } from 'react';
import img from '../assets/image2.png'
const ContactForm = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [text, setText] = useState(undefined);

  const onSubmit = (event) => {
    if(event){
      event.preventDefault();//for preventing page default refresh
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
    }
  };

  return (
    <section style={{display:'flex', flexDirection:'row',justifyContent:'space-between',margin:'0 auto',marginLeft:'30px'}}>
        <div>
          <div style={{display:'flex',flexDirection:'column',gap:'24px',maxWidth:'410px',padding:'10px'}}>
              <div style={{display:'flex',gap:'10px',fontWeight:'600px',}}>
                  <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='20px'/>}/>
                  <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='20px'/>}/>
              </div>
              <Button isOutline='true' text='VIA EMAIL FROM' icon={<HiMail fontSize='20px'/>}/>
          </div>
          <form 
          onSubmit={onSubmit}
            style={{maxHeight:'400px',marginLeft:'10px'}}>
            <div style={{display:'flex',flexDirection:'column',width:'420px',position:'relative'}}>
             
              <input style={{height:'35px',border:'1px solid #ffff', marginTop:'15px',paddingLeft:'30px', borderRadius:'20px'}} type="text" name='name' placeholder='Enter your Name'/>
            </div>

            <div style={{display:'flex',flexDirection:'column',width:'420px',position:'relative'}}>
              
              <input style={{height:'35px',border:'1px solid #ffff', marginTop:'15px',paddingLeft:'30px',borderRadius:'20px'}} type="text" name='email' placeholder='abc@example.com'/>
            </div>

            <div style={{display:'flex',flexDirection:'column',width:'420px',position:'relative'}}>
              
              <textarea style={{height:'100px', paddingTop:'10px',paddingLeft:'20px',marginTop:'15px', borderRadius:'20px'}}type="text" name='text' placeholder='Discription'/>
            </div>
            <div style={{marginLeft:'70px'}}>
              <Button text='SUBMIT'/>
            </div>
            <p>
              {`Name: ${name}`} <br/> {`Email: ${email}`} <br/> {`Text: ${text}`}
            </p>
          </form>
          </div>
        <div style={{height:'430px',width:'450px',marginRight:'80px'}}>
          <img src={img} alt="image" />
        </div>
    </section>
    
  )
}

export default ContactForm;