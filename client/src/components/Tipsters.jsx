/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import ContactModalForm from "../forms/ContactModalForm"


// eslint-disable-next-line react/prop-types
function Tipsters({ items }) {

  const [openModal, setOpenModal] = useState(false)

  return (
    <section>
      <div className="ui fluid container">
      <ContactModalForm open = {openModal} onClose={()=>{setOpenModal(false)}}/>
        <div className="ui link cards">
          {items.map((tipster) => {
            const { id, name, desc, img, prof } = tipster;
            return (
              <div className="card" key={id}>
                <div className="image">
                  <img src={img} alt="tipster" />
                </div>
                <div className="content">
                  <div className="header">{name}</div>
                  <div className="meta">
                    <a>{prof}</a>
                  </div>
                  <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                  <div className="ui inverted green bottom attached button" onClick={()=>{setOpenModal(true)}}>
                    Contact Me
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    // end of the fluid contaier
  );
}

export default Tipsters;
