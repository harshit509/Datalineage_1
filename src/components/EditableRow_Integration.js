import React from "react";

const EditableRow_Integration= ({ handleEditFormChange, editFormData ,handleCancelClick}) => {
    return (
        <>
        <tr>
       <td> <input type="number" name="ID" required="required" placeholder='Enter ID' value={editFormData.ID} onChange={handleEditFormChange} /></td>    
     <td>       <input type="text" name="Application1" required="required" placeholder='Enter Application1' value={editFormData.Application1} onChange={handleEditFormChange} /></td>
         <td>   <input type="text" name="Application2" required="required" placeholder='Enter Application2' value={editFormData.Application2} onChange={handleEditFormChange} /></td>
           <td> <input type="text" name="Direction" required="required" placeholder='Enter Direction' value={editFormData.Direction} onChange={handleEditFormChange} /></td>
           <td> <input type="text" name="Type_Of_Data_Involved" required="required" placeholder='Type_Of_Data_Involved' value={editFormData.Type_Of_Data_Involved} onChange={handleEditFormChange} /></td>
          
            <td><input type="text" name="Notes" required="required" placeholder='Enter Notes' value={editFormData.Notes} onChange={handleEditFormChange} /></td>
            <td><button type="Submit"> Save </button></td>
            <td><button type ="Submit" onClick={handleCancelClick}>Cancel</button></td>
            </tr>

        </>

    )

}

export default EditableRow_Integration;