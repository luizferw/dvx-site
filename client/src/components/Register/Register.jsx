import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosInstance as axios } from '../../../libs/axios'
import { User } from '../../App'

export default function Register() {
  const { setLogged, setUserData } = useContext(User)
  const [users, setUsers] = useState('')

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(true)

  const [active, setActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    if (showPassword) {
      setShowPassword(false)
      return
    }
    setShowPassword(true)
    return
  }

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    function verifyBlankSpaces() {
      if (username == '') {
        setError('nickname')
        return false
      } else if (email == '') {
        setError('email')

        return false
      } else if (password == '') {
        setError('password')

        return false
      } else if (username && email && password) {
        setError(null)
        return true
      }
    }

    function verifyEmail() {
      users.forEach(user => {
        if (user.email === email) {
          setError('emailExists')
          return false
        } else {
          setError(false)
        }
      })
    }

    verifyBlankSpaces()
    verifyEmail()

    if (!error) {
      registerUser()
    }

    function registerUser() {
      const registerUser = {
        username,
        email,
        password
      }

      axios
        .post('/users/register', {
          data: registerUser
        })
        .then(() => {
          setLogged(true)
          setUserData(registerUser)
          navigate('/')
        })
    }
  }

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get('/users')
      const users = response.data
      setUsers(users)
    }

    getUsers()
  }, [])

  return (
    <div className="register">
      <section className="container rounded-lg shadow-md max-w-[44rem] mx-auto px-10 bg-white py-12 sm:mt-12 sm:px-20 md:mt-24">
        <div className="mb-8 p-4 text-center">
          <Link to="/">
            <img
              src="https://i.ibb.co/VQ09ND8/dvx-logo.png"
              className="w-[6rem] mx-auto  mb-9"
            />
          </Link>
          <h1 className="font-semibold text-3xl mb-4">
            Create your account. It is free!
          </h1>
        </div>
        <form
          onSubmit={e => handleSubmit(e)}
          className="form-register text-left flex gap-5 flex-col py-10 border-y border-opacity-20 border-b-slate-400"
        >
          <label className="nickname">
            <span className="flex gap-2 items-center mb-2">
              <h3 className="font-bold text-2xl">Nickname</h3>
              <span className="text-lg opacity-60">
                Will appear in your ads
              </span>
            </span>
            <input
              onFocus={() => setActive(false)}
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              className={`border border-slate-300 rounded-md py-4 px-6 w-full focus:outline-none focus:border-black ${
                error === 'nickname' ? 'border-red-500' : null
              } `}
              placeholder="Example: John S."
            ></input>
            {error === 'nickname' && (
              <span className="text-lg text-red-500">Fill out this field</span>
            )}
          </label>

          <label className="email ">
            <span className="inline-block mb-2">
              <h3 className="font-bold text-2xl">E-mail</h3>
            </span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="john@email.com"
              onFocus={() => setActive(false)}
              className={`border border-slate-300 rounded-md py-4 px-6 w-full focus:outline-none focus:border-black ${
                error === 'email' ? 'border-red-500' : null
              }`}
            ></input>
            {error === 'email' && (
              <span className="text-lg text-red-500">Fill out this field</span>
            )}
            {error === 'emailExists' && (
              <span className="text-lg text-red-500">Email already exists</span>
            )}
          </label>

          <label className="password ">
            <span className="inline-block mb-2">
              <h3 className="font-bold text-2xl">Password</h3>
            </span>
            <div
              className={`input-password flex w-full border rounded-md border-slate-300 ${
                active ? 'border-black' : null
              } ${error === 'password' ? 'border-red-500' : null}`}
            >
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="rounded-md py-4 px-6 w-full relative focus:outline-none"
                onFocus={() => setActive(true)}
              ></input>
              <svg
                className={`relative top-6 right-5 cursor-pointer opacity-30 transition-all ${
                  showPassword ? 'opacity-100' : null
                } `}
                onClick={() => handleShowPassword()}
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#4A4A4A"
                  d="M1.57626969,8.56207062 C1.96456746,9.16330588 2.42323893,9.76484223 2.94810194,10.3246961 C4.42455447,11.8995788 6.11698456,12.8333333 8,12.8333333 C9.88301544,12.8333333 11.5754455,11.8995788 13.0518981,10.3246961 C13.5767611,9.76484223 14.0354325,9.16330588 14.4237303,8.56207062 C14.5551755,8.35854262 14.6690083,8.16958874 14.7648469,8 C14.6690083,7.83041126 14.5551755,7.64145738 14.4237303,7.43792938 C14.0354325,6.83669412 13.5767611,6.23515777 13.0518981,5.6753039 C11.5754455,4.1004212 9.88301544,3.16666667 8,3.16666667 C6.11698456,3.16666667 4.42455447,4.1004212 2.94810194,5.6753039 C2.42323893,6.23515777 1.96456746,6.83669412 1.57626969,7.43792938 C1.44482452,7.64145738 1.33099169,7.83041126 1.23515306,8 C1.33099169,8.16958874 1.44482452,8.35854262 1.57626969,8.56207062 Z M0.219453071,7.7763932 C0.243827414,7.72764452 0.288957872,7.64235861 0.354576815,7.52570271 C0.461967629,7.33478571 0.589262775,7.12296659 0.736230311,6.89540395 C1.15522421,6.24663921 1.64967774,5.59817556 2.21856473,4.99136277 C3.8671122,3.23291213 5.79968211,2.16666667 8,2.16666667 C10.2003179,2.16666667 12.1328878,3.23291213 13.7814353,4.99136277 C14.3503223,5.59817556 14.8447758,6.24663921 15.2637697,6.89540395 C15.4107372,7.12296659 15.5380324,7.33478571 15.6454232,7.52570271 C15.7110421,7.64235861 15.7561726,7.72764452 15.7805469,7.7763932 C15.8509288,7.91715695 15.8509288,8.08284305 15.7805469,8.2236068 C15.7561726,8.27235548 15.7110421,8.35764139 15.6454232,8.47429729 C15.5380324,8.66521429 15.4107372,8.87703341 15.2637697,9.10459605 C14.8447758,9.75336079 14.3503223,10.4018244 13.7814353,11.0086372 C12.1328878,12.7670879 10.2003179,13.8333333 8,13.8333333 C5.79968211,13.8333333 3.8671122,12.7670879 2.21856473,11.0086372 C1.64967774,10.4018244 1.15522421,9.75336079 0.736230311,9.10459605 C0.589262775,8.87703341 0.461967629,8.66521429 0.354576815,8.47429729 C0.288957872,8.35764139 0.243827414,8.27235548 0.219453071,8.2236068 C0.149071198,8.08284305 0.149071198,7.91715695 0.219453071,7.7763932 Z M8,10.5 C6.61928813,10.5 5.5,9.38071187 5.5,8 C5.5,6.61928813 6.61928813,5.5 8,5.5 C9.38071187,5.5 10.5,6.61928813 10.5,8 C10.5,9.38071187 9.38071187,10.5 8,10.5 Z M8,9.5 C8.82842712,9.5 9.5,8.82842712 9.5,8 C9.5,7.17157288 8.82842712,6.5 8,6.5 C7.17157288,6.5 6.5,7.17157288 6.5,8 C6.5,8.82842712 7.17157288,9.5 8,9.5 Z"
                ></path>
              </svg>
            </div>
            {error === 'password' && (
              <span className="text-lg text-red-500">Fill out this field</span>
            )}
          </label>

          <button
            type="submit"
            className="submit-register mt-4 py-5 text-[1.55rem] bg-orange-400 text-white rounded-full hover:opacity-90"
          >
            Register
          </button>
        </form>
        <div className="pt-6 text-2xl">
          Have an account?
          <Link to="/login" className="text-purple-600 font-bold">
            {' '}
            Login
          </Link>
        </div>
      </section>
      <footer className="py-10 text-lg opacity-60">
        By continuing, you agree to Terms of Use and Privacy Policy.
      </footer>
    </div>
  )
}
