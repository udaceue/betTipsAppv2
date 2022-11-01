import React from 'react'
import contactUs from "../assets/photos/contactUs.png"
import FormFieldsGenerator from '../components/utils/FormFieldsGenerator';

const ContactModalForm = ({open, onClose}) => {
  if(!open) return null;
  return (
    <div className='modalOverlay' onClick={onClose}>
      <div className='modalContainer' onClick={ e=> e.stopPropagation() }>
        <p className='closeModal' onClick={onClose}>X</p>
        <img className='modalContactImage' src={contactUs} alt=""/>

        <form className="ui large form modalForm">
      <div className="ui stacked segment flexOne">
        <FormFieldsGenerator
          iconName="user icon"
          name="name"
          placeholder="Name:"
        />
        <FormFieldsGenerator
          iconName="user outline icon"
          name="surname"
          placeholder="Surname:"
        />

        <div className="field">
          <label className='textLabel'>Your Message:</label>
          <textarea></textarea>
        </div>

        <FormFieldsGenerator
          iconName="mail icon"
          name="email"
          placeholder="E-mail adress"
        />
        <FormFieldsGenerator
          iconName="home icon"
          name="city"
          placeholder="City"
        />
        <div className="ui fluid large teal submit button">Send Message</div>
      </div>

      <div className="ui error message" />
    </form>


        </div>
      </div>
   
  )
}

export default ContactModalForm