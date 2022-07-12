import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="log-message container rounded-lg shadow-md max-w-[44rem] mx-auto bg-white py-12 px-20 mt-8 sm:mt-12 md:mt-24">
      <div className="mb-2 p-4 text-center ">
        <Link to="/">
          <img
            src="https://i.ibb.co/VQ09ND8/dvx-logo.png"
            className="w-[6rem] mx-auto  mb-9"
          />
        </Link>
        <h1 className="font-semibold text-3xl mb-2 sm:px-20">Error 404</h1>
        <h2 className="text-center mb-12">Page Not Found</h2>
        <Link to="/">
          <h2 className="text-center text-purple-700">Back to the home</h2>
        </Link>
      </div>
    </section>
  )
}
