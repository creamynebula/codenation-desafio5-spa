import React from "react";

const Contact = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => (
        <article className="contact" key={contact.id}>
          <span className="contact__avatar">
            <img src={`${contact.avatar}`} alt="avatar do contato" />
          </span>
          <span className="contact__data">{contact.name}</span>
          <span className="contact__data">{contact.phone}</span>
          <span className="contact__data">{contact.country}</span>
          <span className="contact__data">
            {new Date(contact.admissionDate).toLocaleDateString()}{" "}
          </span>
          <span className="contact__data">{contact.company}</span>
          <span className="contact__data">{contact.department}</span>
        </article>
      ))}
    </>
  );
};

export default Contact;
