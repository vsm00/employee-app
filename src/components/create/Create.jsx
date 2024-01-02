import React from 'react'
import './Create.css'


function Create(){
    return (
        <>
        <div>
        <form id='form'>
        <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Name</label>
                <input  class="form-control" type="text"  name='name' placeholder='enter your name here'/>
        </div>
        
        <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Designation</label>
                <input  class="form-control" type="text"  name='designation' placeholder='enter your designation here'/>
        </div>
        <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Location</label>
                <input  class="form-control" type="text"  name='location' placeholder='enter your location here'/>
        </div>
        <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Salary</label>
                <input  class="form-control" type="text"  name='salary' placeholder='enter your salary here'/>
        </div>
        <div class="mb-3">
            <button type="button" class="btn btn-outline-primary">Submit</button>
            </div>
        </form>
        </div>
        </> 
    )
}
export default Create