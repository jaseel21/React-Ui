import React from 'react'
import './Form.css'

function Form() {
  return (
    <div>
    {/* <div class="circle-1"></div>
    <div class="circle-2"></div> */}
    <div class="">
        <div class="headLine">
            <div class="title">
                <p><b>STUDENT PORT</b></p>
            </div>
            
        </div>
        <div class="custom-container">
            <div class="form">
                <div>
                    <form> 
                        <div class="form-div">
                          <div class="form-left">
                            <div class="form-group">
                              <label for="formGroupExampleInput">Student name</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" required="required"/>
                            </div>
                            <div class="form-group">
                              <label for="formGroupExampleInput">Father name</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" required="required"/>
                            </div>
                            <div class="form-group">
                              <label for="formGroupExampleInput">Register number</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" required="required"/>
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlTextarea1">Address</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" required="required" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Date of birth</label>
                              <input type="date" class="form-control" id="exampleInputPassword1" required="required"/>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Phone number</label>
                              <input type="number" class="form-control" id="exampleInputPassword1" required="required"/>
                            </div> 
                          </div>
                          
                          <div class="form-right">
                            <div class="form-group">
                              <label for="exampleInputPassword1">Whatsapp number</label>
                              <input type="number" class="form-control" id="exampleInputPassword1" required="required"/>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Year</label>
                              <select class="form-select" id="inputGroupSelect02" required="required">
                                <option selected>Choose...</option>
                                <option value="1">1st Year</option>
                                <option value="2">2nd Year</option>
                                <option value="3">3rd Year</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Text book</label>
                              <select class="form-select" id="inputGroupSelect02" required="required">
                                <option selected>Not received</option>
                                <option value="1">Received</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Certificate</label>
                              <select class="form-select" id="inputGroupSelect02" required="required">
                                <option selected>Not received</option>
                                <option value="1">Received</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Exam</label>
                              <select class="form-select" id="inputGroupSelect02" required="required">
                                <option selected>Not Attented</option>
                                <option value="1">Attented</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Have we contacted you ?</label>
                              <select class="form-select" id="inputGroupSelect02" required="required">
                                <option selected>No</option>
                                <option value="1">Yes</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputGroupSelect02">Subject</label>
                              <select class="form-select" id="inputGroupSelect02" required="required">
                                <option selected>Arabic</option>
                                <option value="1">Urdu</option>
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
    </div>
  )
}

export default Form