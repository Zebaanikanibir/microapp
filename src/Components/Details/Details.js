import React, { useState } from 'react'
import Link from '../Link/Link'
import './Details.css';
const Details = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  
  function openModal(user) {

   
    
    setIsOpen(true);
  }

  
  function closeModal() {
    setIsOpen(false);
  }






    const {title,owner,creation_date,link} = props.ques
  return (
    
      
        <tr className="click" onClick={() =>openModal(props.ques)}>
     
     <td>{owner.display_name}</td>
     <td>{title}</td>
     <td>{creation_date}</td>
     <Link modalIsOpen={modalIsOpen} questionLink={link} closeModal={closeModal}></Link>
   </tr>
      
   
    
  )
}

export default Details
