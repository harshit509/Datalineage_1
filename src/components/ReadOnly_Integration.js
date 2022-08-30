import React from "react";

const ReadOnly_Integration = ({ contact,handleEditClick,handleDeleteClick}) => {
  return (
    <tr>
              <td>{contact.ID}</td>
            <td>{contact.Application1}</td>
              <td>{contact.Application2}</td>
              <td>{contact.Direction}</td>
              <td>{contact.Type_Of_Data_Involved}</td>
              <td>{contact.Notes}</td>
            
              <td>  <button type="button" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
              
        <button type="button" onClick={() => handleDeleteClick(contact.ID)}>
          Delete
        </button>

        </td>

            </tr>
  );
};

export default ReadOnly_Integration;