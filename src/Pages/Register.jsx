
import { Link } from 'react-router-dom'

import '../App.css'

 function SignUpPage() {

    return (
        <div className="text-center mt-[150px]">
            <h2 style={{fontSize:'40px', fontFamily:'sans-serif'}}>Join Us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <br/>
                    <input style={{width:'15rem',padding:'.3rem',borderRadius:'13px',outline:'none',border:'none',textAlign:'center'}} type="text" name="first_name" required placeholder='Username' />
                </p>
                <p>
                    <br/>
                    <input style={{width:'15rem',padding:'.3rem',borderRadius:'13px',outline:'none',border:'none',textAlign:'center'}} type="email" name="email" required  placeholder='Email'/>
                </p>
                <p>
                    <br/>
                    <input style={{width:'15rem',padding:'.3rem',borderRadius:'13px',outline:'none',border:'none',textAlign:'center'}} type="password" name="password" required  placeholder='Password'/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form><br />
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}

export default  SignUpPage;