import { useContext, useMemo, useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../../App'
import { FormStyle } from '../../../assets/styles/Announce/styleForm'
import CategoryContainer from './CategoryContainer'
// import axios from 'axios'
// import { v4 as uuid } from 'uuid'

export const CategoryContext = createContext('')

export default function Form() {
  const { userData } = useContext(User)
  const author = userData.username
  const userPhone = userData.phone ? userData.phone : false
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [active, setActive] = useState('')
  // const [file, setFile] = useState(null)
  const [image, setImage] = useState('')
  let [price, setPrice] = useState('')
  let [cep, setCep] = useState('')
  const [hidePhone, setHidePhone] = useState(false)
  const [category, setCategory] = useState('')

  const [error, setError] = useState('')
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const navigate = useNavigate()

  const value = useMemo(() => {
    return { category, setCategory, error, setError, active, setActive }
  }, [category, error, active])

  const getAddress = async () => {
    if (cep) {
      const response = await fetch(`https://ws.apicep.com/cep/${cep}.json`)
      const data = await response.json()
      return data
    }
  }

  // const saveFile = e => {
  //   e.preventDefault()

  //   const file = e.target.files[0]
  //   setFile(file)

  //   const fileExtension = file.type.split('/')[1]
  //   const formData = new FormData()
  //   formData.append('file', file)

  //   axios
  //     .post(`https://dvx-site.herokuapp.com/api/ads/upload/${id}`, formData)
  //     .then(() => setImage(id + '.' + fileExtension))
  // }

  const handlePrice = e => {
    if (!isNaN(e.target.value)) {
      setPrice(e.target.value)
    }
  }

  const handleCep = async e => {
    setCep(e.target.value)

    if (cep.length == 5 && e.which !== 8) {
      setCep((cep += '-'))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const sub_category = active

    setTimeout(() => {
      setLoadingSubmit(false)
    }, 4000)

    setLoadingSubmit(true)

    if (cep == '') {
      setError('localization')
      return
    }

    const address = await getAddress()

    if (title == '') {
      setError('title')
      return
    }
    if (category == null) {
      setError('category')
      return
    }
    if (price == '') {
      setError('price')
      return
    }
    if (address && address.district == null) {
      setError('localization')
      return
    }

    setError(null)

    const ads = {
      id,
      price,
      description,
      address,
      title,
      hidePhone,
      category,
      sub_category,
      author,
      image
    }

    fetch('https://dvx-site.herokuapp.com/api/ads/announce', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(ads)
    }).then(() => navigate('/'))
  }

  function handleClickCheckbox(e) {
    if (e.target.checked) {
      setHidePhone(true)
      return
    }
    setHidePhone(false)
  }

  // useEffect(() => setId(uuid()), [])

  return (
    <CategoryContext.Provider value={value}>
      <FormStyle onSubmit={e => handleSubmit(e)} autoComplete="off" noValidate>
        <h2>What are you announcing?</h2>

        <div className="form-container" id="title">
          {error === 'title' && (
            <span className="error">Fill out this field</span>
          )}
          <input
            className={error === 'title' ? 'title error' : 'title'}
            type="text"
            maxLength="65"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          ></input>

          <textarea
            type="textarea"
            className="description h-52"
            maxLength="600"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          ></textarea>

          <h4 className="category-container__title" id="category">
            Category
          </h4>
          {error === 'category' && (
            <span className="error">Select a category</span>
          )}
          <CategoryContainer category={category} />

          <div className="form-bottom">
            <h4 id="price">Price</h4>
            {error === 'price' && <span className="error">Enter a price</span>}
            <input
              className={error === 'price' ? 'price error' : 'price'}
              type="text"
              id="price"
              maxLength="7"
              value={price}
              onChange={e => handlePrice(e)}
              placeholder="Price ($)"
            />

            <div className="add-photo">
              <h4>Photos</h4>
              <div className="image-container">
                <label>
                  <input
                    type="file"
                    name="image"
                    accept=".jpg, .jpeg, .png, .gif"
                    onChange={e => saveFile(e)}
                    multiple
                    hidden
                  />
                  <span className="box-icon">
                    <svg
                      width="35"
                      height="30"
                      viewBox="0 0 35 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>1FFAE400-6B99-4EF8-B44C-D5574BC9003C</title>
                      <path
                        d="M3.502 3.4h5.11L12.02.09h10.222l3.407 3.31h5.111c1.882 0 3.408 1.481 3.408 3.309v19.856c0 1.828-1.526 3.31-3.408 3.31H3.502c-1.882 0-3.408-1.482-3.408-3.31V6.709c0-1.828 1.526-3.31 3.408-3.31zM17.13 8.364c-4.705 0-8.518 3.704-8.518 8.273 0 4.57 3.813 8.273 8.518 8.273 4.704 0 8.518-3.704 8.518-8.273 0-4.57-3.814-8.273-8.518-8.273zm0 3.309c2.823 0 5.11 2.222 5.11 4.964 0 2.741-2.287 4.964-5.11 4.964-2.823 0-5.111-2.223-5.111-4.964 0-2.742 2.288-4.964 5.11-4.964z"
                        fill="#9027B0"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="box-title">
                    <strong>Add photos</strong>
                  </span>
                  <span className="box-format">JPG, JPEG and PNG only</span>
                  {image && <span className="box-format">Photo added</span>}
                </label>
              </div>
            </div>

            <h4>Localization</h4>
            {error === 'localization' && (
              <span className="error">Address invalid</span>
            )}

            <input
              className="localization"
              type="text"
              value={cep}
              autoComplete="on"
              maxLength="9"
              onKeyDown={e => handleCep(e)}
              onChange={e => setCep(e.target.value)}
              placeholder="CEP"
            />

            {userPhone && (
              <div>
                <h4>Contact</h4>
                <div className="contact">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>B0A8F6A5-92F3-4017-A866-5D8B3E0A910C</title>
                    <path
                      d="M9.24 18.5c5.103 0 9.24-4.142 9.24-9.25C18.48 4.14 14.343 0 9.24 0 4.137 0 0 4.141 0 9.25c0 5.108 4.137 9.25 9.24 9.25zm1.06-6.133l-.069-.073c-1.621-.917-2.933-2.36-3.735-4.109h.149a1.65 1.65 0 0 0 1.518-1.003l-1.86-2.978-.67.02a6.44 6.44 0 0 0-1.43 1.162 8.725 8.725 0 0 0-.003.24c0 4.959 3.732 9.003 8.412 9.22.092-.006.168 0 .244 0 .081 0 .161-.003.24-.004a6.453 6.453 0 0 0 1.16-1.431l.024-.824-2.656-1.809c-.746.15-1.31.802-1.323 1.59z"
                      fill="#9027B0"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span>(47) 9 9999-9999</span>
                </div>
                <div>
                  <input
                    className="hide-phone-checkbox"
                    type="checkbox"
                    onChange={e => handleClickCheckbox(e)}
                    name="hide-phone"
                  ></input>
                  <label
                    htmlFor="hide-phone"
                    onClick={e => handleClickCheckbox(e)}
                  >
                    Hide my phone in this ad
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        <a
          href={`#${error}`}
          className="submit-link flex flex-col"
          style={{ color: 'red', fontSize: '1.8rem' }}
        >
          {loadingSubmit ? (
            <button className="sendSubmit brightness-75 opacity-90" disabled>
              Send ad
            </button>
          ) : (
            <button className="sendSubmit">Send ad</button>
          )}
        </a>
      </FormStyle>
    </CategoryContext.Provider>
  )
}
