import React from 'react'
import './Form.css'

function Form() {

  return (
    <div>
    {/* <div class="circle-1"></div>
    <div class="circle-2"></div> */}
    <div class="formMain">
        <div class="headLine">
            <div class="title">
                <h1>STUDENT PORT</h1>
            </div>
            
        </div>
        <div class="custom-container">
            <div class="form">
                    <form> 
                        <div class="form-div">
                          <div class="form-left">
                            <div class="form-group">
                              <label for="formGroupExampleInput">Student name</label>
                              <input required type="text" class="form-control" id="formGroupExampleInput" />
                            </div>
                            <div class="form-group">
                              <label for="formGroupExampleInput">Father name</label>
                              <input required type="text" class="form-control" id="formGroupExampleInput" />
                            </div>
                            <div class="form-group">
                              <label for="formGroupExampleInput">Register number</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" />
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlTextarea1">Address</label>
                              <textarea required class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Date of birth</label>
                              <input required type="date" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Phone number</label>
                              <input required type="number" class="form-control" id="exampleInputPassword1" />
                            </div> 
                          </div>
                          
                          <div class="form-right">
                            <div class="form-group">
                              <label for="exampleInputPassword1">Whatsapp number</label>
                              <input required type="number" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Text book</label>
                              <select class="form-select" id="inputGroupSelect02">
                                <option>Not received</option>
                                <option>Received</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Certificate</label>
                              <select class="form-select" id="inputGroupSelect02">
                                <option>Not received</option>
                                <option>Received</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Exam</label>
                              <select required class="form-select" id="inputGroupSelect02">
                                <option>Not Attented</option>
                                <option>Attented</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Have we contacted you ?</label>
                              <select required class="form-select" id="inputGroupSelect02">
                                <option>No</option>
                                <option>Yes</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Year</label>
                              <select required class="form-select" id="inputGroupSelect02">
                                <option value={2019} >2019</option>
                                <option value={2021} >2021</option>
                                <option value={2023} >2023</option>
                                <option value={2023} >2024</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Subject</label>
                              <select requiredclass="form-select" id="inputGroupSelect02">
                                <option value="Arebic">Arabic</option>
                                <option value="Urdu">Urdu</option>
                              </select>
                            </div>
                            <div className='form-group'><button type="submit" class="submitBtn">Submit</button></div>
                          </div>
                        </div>
                      </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Form