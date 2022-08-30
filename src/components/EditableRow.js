import React from "react";

const EditableRow = ({ handleEditFormChange, editFormData ,handleCancelClick}) => {
    return (
        <>
        <tr>

        
       <td> <input type="number" name="ID" required="required" placeholder='Enter ID' value={editFormData.ID} onChange={handleEditFormChange} /></td>    
     <td>       <input type="text" name="Internal_Purchased" required="required" placeholder='Enter Internal/Purchased' value={editFormData.Internal_Purchased} onChange={handleEditFormChange} /></td>
         <td>   <input type="text" name="Portfolio" required="required" placeholder='Enter Portfolio' value={editFormData.Portfolio} onChange={handleEditFormChange} /></td>
           <td> <input type="text" name="Sub_App_Area" required="required" placeholder='Enter Sub-APP-AREA' value={editFormData.Sub_App_Area} onChange={handleEditFormChange} /></td>
           <td> <input type="text" name="App_Acronym" required="required" placeholder='App_Acronym' value={editFormData.App_Acronym} onChange={handleEditFormChange} /></td>
           <td> <input type="text" name="App_Name" required="required" placeholder='Enter App Name' value={editFormData.App_Name} onChange={handleEditFormChange} /></td>
            <td><input type="text" name="Notes" required="required" placeholder='Enter Notes' value={editFormData.Notes} onChange={handleEditFormChange} /></td>
           
            <td><button type="Submit"> Save </button></td>
            <td><button type ="Submit" onClick={handleCancelClick}>Cancel</button></td>
          
            
            </tr>

        </>

    )

}

export default EditableRow;