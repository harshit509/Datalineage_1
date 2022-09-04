import React, { useState, Fragment } from 'react';
import { nanoid } from "nanoid";
import './AppMaster.css';
import data from './mock-data.json';
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from './EditableRow';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Navbar from './horizontalNav/Navbar';

const AppMaster = () => {
//adding hook
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    ID: "",
    Internal_Purchased: "",
    Portfolio: "",
    Sub_App_Area: "",
    App_Acronym: " ",
    App_Name: "",
    Notes: " "

  });
  const [editFormData, setEditFormData] = useState({
    ID: "",
    Internal_Purchased: "",
    Portfolio: "",
    Sub_App_Area: "",
    App_Acronym: " ",
    App_Name: "",
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
      Internal_Purchased: addFormData.Internal_Purchased,
      Portfolio: addFormData.Portfolio,
      Sub_App_Area: addFormData.Sub_App_Area,
      App_Acronym: addFormData.App_Acronym,
      App_Name: addFormData.App_Name,
      Notes: addFormData.Notes
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  //handle edit form
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      ID: editContactId,
      Internal_Purchased: editFormData.Internal_Purchased,
      Portfolio: editFormData.Portfolio,

      Sub_App_Area: editFormData.Sub_App_Area,
      App_Acronym: editFormData.App_Acronym,
      App_Name: editFormData.App_Name,
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
      Internal_Purchased: contact.Internal_Purchased,
      Portfolio: contact.Portfolio,

      Sub_App_Area: contact.Sub_App_Area,
      App_Acronym: contact.App_Acronym,
      App_Name: contact.App_Name,
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
      <div className="block">
      <Navbar/>
      </div>
      <div className='block1'>
      <form onSubmit={handleAddFormSubmit} >
        <input type="number" name="ID" required="required" placeholder='Enter ID' onChange={handleAddFormChange} />
        <input type="text" name="Internal_Purchased" required="required" placeholder='Enter Internal/Purchased' onChange={handleAddFormChange} />
        <input type="text" name="Portfolio" required="required" placeholder='Enter Portfolio' onChange={handleAddFormChange} />
        <input type="text" name="Sub_App_Area" required="required" placeholder='Enter Sub-Application' onChange={handleAddFormChange} />
        <input type="text" name="App_Acronym" required="required" placeholder='Application_Acronym' onChange={handleAddFormChange} />
        <input type="text" name="App_Name" required="required" placeholder='Enter Application Name' onChange={handleAddFormChange} />
        <input type="text" name="Notes" required="required" placeholder='Enter Notes' onChange={handleAddFormChange} />

        <button type="Submit">ADD</button>
      </form >
      <form onSubmit={handleEditFormSubmit}>
        <table id="emp-table">
          <thead >
            <tr>
              <th>Id</th>
              <th>Internal/Purchased</th>
              <th>Portfolio</th>
              <th>SubArea</th>
              <th>Application/Acronyms</th>
              <th>Application Name</th>
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
    </div>
  )
}

export default AppMaster;