import React from "react";

const ReadOnlyRow = ({ contact,handleEditClick,handleDeleteClick}) => {
  return (
    <tr>
              <td>{contact.ID}</td>
              <td>{contact.Internal_Purchased}</td>
              <td>{contact.Portfolio}</td>
              <td>{contact.Sub_App_Area}</td>
              <td>{contact.App_Acronym}</td>
              <td>{contact.App_Name}</td>
              <td>{contact.Notes}</td>
              <td> <button type="button" onClick={(event) => handleEditClick(event, contact)}>Edit</button>    
               <button type="button" onClick={() => handleDeleteClick(contact.ID)}>Delete </button>
              

        </td>

            </tr>
  );
};

export default ReadOnlyRow;