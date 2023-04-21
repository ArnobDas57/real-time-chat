import Add from "../assets/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Talkative</span>
            <span className="register">Register</span>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{display: "none"}} type="file" id="file" />
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;
