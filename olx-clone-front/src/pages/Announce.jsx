import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { User } from '../App'
import Form from '../components/Announce/Form/Form'
import Navbar from '../components/Announce/Navbar/Navbar'

export default function Announce() {
  const { userData } = useContext(User)

  return (
    <div className="Announce overflow-auto">
      {userData && (
        <div>
          <Navbar />
          <Form />
        </div>
      )}
      {!userData && (
        <section className="log-message container rounded-lg shadow-md max-w-[44rem] mx-auto bg-white py-12 px-20 mt-8 sm:mt-12 md:mt-24">
          <div className="mb-2 p-4 text-center ">
            <Link to="/">
              <img
                src="../assets/olx-logo.png"
                className="w-[6rem] mx-auto  mb-9"
              />
            </Link>
            <h1 className="font-semibold text-3xl mb-10 sm:px-20">
              You must be logged to add a new ads
            </h1>
            <h2 className="text-center text-purple-700 ">
              <Link to="/login">Access your account here</Link>
            </h2>
          </div>
          <div className="text-2xl">
            Do not have an account?
            <Link to="/register" className="text-purple-600 font-bold">
              {' '}
              Register
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
