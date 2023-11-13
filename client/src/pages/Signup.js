import { Link } from 'react-router-dom'
import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className="sign-up-container">
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div
          className="sign-up-buttons"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <button
              disabled={isLoading}
            >
              Sign up
            </button>
            {error && <div className="error">{error}</div>}
          </div>
          <div>
            <button disabled={isLoading}>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "40%",
                }}
              >
                Switch to Login
              </Link>
            </button>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Signup