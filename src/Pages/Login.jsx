import { Link } from "react-router-dom";

function Login(){
    return(
      <div className="text-center mt-[180px]">
      <h2 style={{fontSize:'30px', marginBottom:'15px', fontFamily:'sans-serif'}}>Sign in to us</h2>
      <form action="/home">
          <p>
            
              <input style={{width:'15rem',padding:'.3rem',borderRadius:'13px',outline:'none',border:'none',textAlign:'center'}} type="text" name="first_name" required  placeholder="Username or Email"/>
          </p><br />
          <p>
              <input style={{width:'15rem',padding:'.3rem',borderRadius:'13px',outline:'none',border:'none',textAlign:'center', marginTop:'2px'}} type="password" name="password" required placeholder="Password" />
          </p>
          <p>
              <button id="sub_btn" type="submit" style={{ width: '15vw'}}>Login</button>
          </p>
      </form><br />
      <footer>
              <label>Password</label>
              <Link to="/forget-password"><label className="right-label" style={{color:'red'}}> Forget password?</label></Link>
              <br/>
          <p style={{marginTop:'6px'}}>First time? <Link to="/register" style={{color:'red',  }}>Create an account</Link>.</p>
          <p style={{color:'#02897A', marginTop:'10px'}}><Link to="/" >Back to Homepage</Link>.</p>
      </footer>
  </div>

    )
}

export default  Login;
