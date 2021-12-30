import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Icon, Select } from 'components'

import style from './Form.module.scss'

import { dataTabs, formTranslation } from './data'
import sendForm from 'utils/sendForm'

const initialForm = {
  developers: {
    name: '',
    email: '',
    country: '',
    business: '',
    skills: '',
    about: '',
    interests: '',
  },
  investors: {
    name: '',
    email: '',
    country: '',
    business: '',
    about: '',
  },
  lawyers: {
    name: '',
    email: '',
    country: '',
    business: '',
    about: '',
  },
}
const initialError = {
  developers: {
    name: false,
    email: false,
    country: false,
    business: false,
    skills: false,
    about: false,
    interests: false,
  },
  investors: {
    name: false,
    email: false,
    country: false,
    business: false,
    about: false,
  },
  lawyers: {
    name: false,
    email: false,
    country: false,
    business: false,
    about: false,
  },
}

export default function Form({ type = 'developers', isOpen = false }) {
  const [fields, setFields] = useState(initialForm[type])
  const [errors, setErrors] = useState(initialError[type])
  const [status, setStatus] = useState('none')
  const { locale } = useRouter()

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value

    setFields({ ...fields, [name]: value })
    setErrors({ ...errors, [name]: false })
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
    setStatus('sending')
    sendForm(fields).then(() => setStatus('success'))
  }

  return (
    <div className={`${style.wrapper} ${isOpen ? style.opened : ''}`}>
      <div className={`${style.success} ${status === 'success' ? style.visible : ''}`}>
        <img src={`/assets/images/form-success-${type}.png`} alt={type} />
        <p>{formTranslation.success.title[locale]}</p>
        <span>{formTranslation.success.text[locale]}</span>
      </div>
      <div className={`${style.sending} ${status === 'sending' ? style.visible : ''}`}>
        <div className={style.spinner}>
          <div className={style.spinnerBlock}>
            <div></div><div><div></div></div>
          </div>
        </div>
        <p>Ваше сообщение отправляется.<br/>Пожалуйста, немного подождите.</p>
      </div>
      <form action="#" className={status === 'none' ? style.visible : ''} onSubmit={handleSubmit}>
        <div
          className={`${style.inputWrap} ${errors.name ? style.error : ''}`}
        >
          <input
            name="name"
            type="text"
            placeholder={formTranslation.name.placeholder[locale]}
            onChange={handleChange}
            value={fields.name}
          />
          <span className={style.errorText}>
            {formTranslation.name.error[locale]}
          </span>
        </div>
        <div
          className={`${style.inputWrap} ${errors.email ? style.error : ''}`}
        >
          <input
            name="email"
            type="text"
            placeholder={formTranslation.email.placeholder[locale]}
            onChange={handleChange}
            value={fields.email}
          />
          <span className={style.errorText}>
            {formTranslation.email.error[locale]}
          </span>
        </div>
        <Select
          defaultValue={formTranslation.name.placeholder[locale]}
          name="country"
          value={fields.country}
          onChange={handleChange}
          error={errors.country}
          errorText={formTranslation.country.error[locale]}
        />
        <Select
          defaultValue={formTranslation.business.placeholder[locale]}
          name="business"
          value={fields.business}
          onChange={handleChange}
          error={errors.business}
          errorText={formTranslation.business.error[locale]}
        />
        {type === 'developers' && (
          <Select
            defaultValue={formTranslation.skills.placeholder[locale]}
            name="skills"
            value={fields.skills}
            onChange={handleChange}
            error={errors.skills}
            errorText={formTranslation.skills.error[locale]}
          />
        )}
        <div
          className={`${style.textareaWrapper} ${
                errors.about ? style.error : ''
              }`}
        >
          <textarea
            name="about"
            placeholder={formTranslation.about.placeholder[locale]}
            onChange={handleChange}
            value={fields.about}
          ></textarea>
        </div>
        {type === 'developers' && (
          <div
            className={`${style.textareaWrapper} ${
                      errors.interests ? style.error : ''
                    }`}
          >
            <textarea
              name="interests"
              placeholder={formTranslation.interests.placeholder[locale]}
              onChange={handleChange}
              value={fields.interests}
            ></textarea>
          </div>
        )}
        <button className={style.button} formNoValidate>
          <span>{formTranslation.button[locale]}</span>
        </button>
      </form>
      <div className={style.right}>
        <Icon
          icon={dataTabs[type].icon}
          className={style[dataTabs[type].icon]}
        />
        <p>{dataTabs[type].text[locale]}</p>
      </div>
    </div>
              )
            }
