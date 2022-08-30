import React, { useState, Fragment } from 'react';
// import { nanoid } from "nanoid";

import data from './mock-data_integration.json';
import ReadOnlyRow from "./ReadOnly_Integration";
import EditableRow from './EditableRow_Integration';
 import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const Integrations = () => {
//adding hook
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    ID: "",
    Application1: "",
    Application2: "",
     Direction: "",
    Type_Of_Data_Involved: " ",
    Notes: " "

  });
  const [editFormData, setEditFormData] = useState({
    ID: "",
    Application1: "",
    Application2: "",
     Direction: "",
    Type_Of_Data_Involved: " ",
    Notes: " "

  });

//edit hook
  const [editContactId, setEditContactId] = useState();

  //adding  change
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
//edit form change
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  //add form submit
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      ID: addFormData.ID,
      Application1: addFormData.Application1,
      Application2: addFormData.Application2,
      Direction: addFormData.Direction,
      Type_Of_Data_Involved: addFormData.Type_Of_Data_Involved,
      Notes: addFormData.Notes
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  //handle edit form
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      ID: editedContact,
      Application1: editFormData.Application1,
      Application2: editFormData.Application2,

      Direction: editFormData.Direction,
      Type_Of_Data_Involved: editFormData.Type_Of_Data_Involved,

      Notes: editFormData.Notes
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.ID === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);

  }
//handle edit click
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.ID);

    const formValues = {
      ID: contact.ID,
      Application1: contact.Application1,
      Application2: contact.Application2,

      Direction: contact.Direction,
      Type_Of_Data_Involved: contact.Type_Of_Data_Involved,
  
      Notes: contact.Notes
    };
    setEditFormData(formValues);
  }

  //handle Cancel Click
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  //handle delete click

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.ID === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };


  return (


    <div className="app-container">
      <form onSubmit={handleAddFormSubmit} >
        <input type="number" name="ID" required="required" placeholder='Enter ID' onChange={handleAddFormChange} />
        <input type="text" name="Application1" required="required" placeholder='Enter Application1' onChange={handleAddFormChange} />
        <input type="text" name="Application2" required="required" placeholder='Enter Application2' onChange={handleAddFormChange} />
        <input type="text" name="Direction" required="required" placeholder='Enter Direction' onChange={handleAddFormChange} />
        <input type="text" name="Type_Of_Data_Involved" required="required" placeholder='Type_Of_Data_Involved' onChange={handleAddFormChange} />

        <input type="text" name="Notes" required="required" placeholder='Enter Notes' onChange={handleAddFormChange} />

        <button type="Submit">ADD</button>
      </form >
      <form onSubmit={handleEditFormSubmit}>
        <table id ="emp-table">
          <thead >
            <tr>
              <th>Id</th>
              <th>Application1</th>
              <th>Application2</th>
              <th>Direction</th>
              <th>Type_Of_Data_Involved</th>
               <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.ID ? (<EditableRow editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />) :

                  (<ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                  )}
              </Fragment>
            ))}
          </tbody>
        </table>

      </form>
      <ReactHTMLTableToExcel className="btn btn-info"
      table ="emp-table"
      finename= "Emp excel Table"
      sheet ="sheet"
      buttonText="Export"
      />
      

    </div>
  )
}

export default Integrations;