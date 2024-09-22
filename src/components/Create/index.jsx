import {Component} from 'react'
import './index.css'

class Create extends Component{

  state = {
    name : '',
    email : '',
    age : ""
  }

  getName = (event) => {
    this.setState({name : event.target.value})
  }

  getEmail = (event) => {
    this.setState({email : event.target.value})
  }

  getAge = (event) => {
    this.setState({age : event.target.value})
  }

  submitForm = async(event) => {
    event.preventDefault()
    const {name , age, email} = this.state 
    const userDetails = {name , age, email}

    const response = await fetch("https://useractions-7.onrender.com/" , {
      method : "POST",
      body : JSON.stringify(userDetails),
      headers : {
        "content-Type" : "application/json", 
      },
    });
    const result = await response.json();
    if (!response.ok){
      console.log(result.error)
    }

    if (response.ok){
      console.log(result)
      this.setState({name : '', email : '' , age : ''})
    }
  }

  render(){
    const {name , email, age} = this.state
    return(
      <div className='totalContainer'>
        <h1 className='heading'>Enter Details</h1>
        <form className='formContainer' onSubmit = {this.submitForm}>
          <div className="mb-3">
            <label for="exampleInputPassword1" className=" heading form-label ">Name</label>
            <input type="text" className="form-control form-input" id="exampleInputPassword1" placeholder='Enter Name' onChange={this.getName}  value = {name}/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" value = {email}>Email address</label>
            <input type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter  EmailId'onChange={this.getEmail}/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label" onChange={this.getAge} value = {age}>Age</label>
            <input type="text" className="form-control form-input" id="exampleInputPassword1" placeholder='Enter Age'/>
          </div>
          
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    )
  }
}


export default Create
