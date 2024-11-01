import { Link } from 'react-router-dom'

import '../App.css'

 function ForgetPasswordPage() {
    return (
        <div className="text-center mt-[150px]">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/login">
                <p>
                    <br/>
                    <input style={{width:'15rem',padding:'.3rem',borderRadius:'13px',outline:'none',border:'none',textAlign:'center'}}  type="email" name="email" required placeholder="Email address"/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p> <br />

        
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
export default  ForgetPasswordPage;