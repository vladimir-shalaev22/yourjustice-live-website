import React, {useState} from 'react'

import {Icon, Select} from 'components'

import style from './Form.module.scss'

const staticContent = {
  developers: {
    icon: 'tag',
    text: 'Help us develop a high-level product with a big idea. \nWe will be happy to expand our team 😎'
  },
  investors: {
    icon: 'wallet',
    text: 'The future is on us.'
  },
  lawyers: {
    icon: 'bag',
    text: 'The future is on us.'
  }
}
const initialForm = {
  developers: {
    name: '',
    email: '',
    country: '',
    business: '',
    skills: '',
    about: '',
    interests: ''
  },
  investors: {
    name: '',
    email: '',
    country: '',
    business: '',
    about: ''
  },
  lawyers: {
    name: '',
    email: '',
    country: '',
    business: '',
    about: ''
  }
}
const initialError = {
  developers: {
    name: false,
    email: false,
    country: false,
    business: false,
    skills: false,
    about: false,
    interests: false
  },
  investors: {
    name: false,
    email: false,
    country: false,
    business: false,
    about: false
  },
  lawyers: {
    name: false,
    email: false,
    country: false,
    business: false,
    about: false
  }
}

export default function Form({type = 'developers', isOpen = false}) {
  const [fields, setFields] = useState(initialForm[type])
  const [errors, setErrors] = useState(initialError[type])
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    e.preventDefault()
    const name = e.target.name || e.target.getAttribute('name')
    const value = e.target.value || e.target.getAttribute('value')

    setFields({...fields, [name]: value})
    setErrors({...errors, [name]: false})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const isEmpty = Object.values(fields).some(elem => elem === '')
    if (isEmpty) {
      const newErrors = {}
      Object.keys(fields).forEach(item => {
        newErrors[item] = fields[item] === '' ? true : false
      })
      setErrors(newErrors)
      return
    }
    setFields(initialForm[type])
    setSuccess(true)
    console.log(fields)
  }

  return (
    <div className={`${style.wrapper} ${isOpen ? style.opened : ''}`}>
      {success
        ? <div className={style.success}>
          <img src={`/assets/images/form-success-${type}.png`} alt={type}/>
          <p>Your application has been successfully submitted!</p>
          <span>Thank you for your interest in this project!</span>
        </div>
        : <form action="#" onSubmit={handleSubmit}>
          <div className={`${style.inputWrap} ${errors.name ? style.error : ''}`}>
            <input name="name" type="text" placeholder="Name" onChange={handleChange} value={fields.name}/>
            <span className={style.errorText}>Enter first name.</span>
          </div>
          <div className={`${style.inputWrap} ${errors.email ? style.error : ''}`}>
            <input name="email" type="text" placeholder="Email" onChange={handleChange} value={fields.email}/>
            <span className={style.errorText}>Enter email address.</span>
          </div>
          <Select
            defaultValue="Where are you from"
            name="country"
            value={fields.country}
            onChange={handleChange}
            error={errors.country}
            errorText="Choose your country"
          />
          <Select
            defaultValue="Choose busines line"
            name="business"
            value={fields.business}
            onChange={handleChange}
            error={errors.business}
            errorText="Choose your busines line"
          />
          {type === 'developers' && <Select
            defaultValue="Choose skills"
            name="skills"
            value={fields.skills}
            onChange={handleChange}
            error={errors.skills}
            errorText="Choose your skills"
          />}
          <div className={`${style.textareaWrapper} ${errors.about ? style.error : ''}`}>
            <textarea name="about" placeholder="Tell us about your motivation" onChange={handleChange} value={fields.about}></textarea>
          </div>
          {type === 'developers' && <div className={`${style.textareaWrapper} ${errors.interests ? style.error : ''}`}>
            <textarea name="interests" placeholder="Tell us what would be interesting for you to do in our project?" onChange={handleChange} value={fields.interests}></textarea>
          </div>}
          <button className={style.button} formNoValidate><span>Send</span></button>
        </form>
      }
      <div className={style.right}>
        <Icon icon={staticContent[type].icon} className={style[staticContent[type].icon]} />
        <p>{staticContent[type].text}</p>
      </div>
    </div>
  )
}
