import {Component} from 'react'
import UserDetails from '../UserDetails/index'
import './index.css'

class Read extends Component{
    state = {
        usersdata : []
    }

    componentDidMount(){
        this.getUserDetails()
    }

    getUserDetails = async() => {
        const response = await fetch('http://localhost:5000/');
        const result = await response.json()

        if (response.ok){
            
            const data = result.map(eachEle => ({
                name : eachEle.name,
                email : eachEle.email,
                age : eachEle.age,
                id : eachEle._id
            }))
            this.setState({usersdata : data})
            
        }
        if (!response.ok){
            console.log(result.error)
        }
    }

    deleteClicked = async (id) => {
        const response = await fetch(`https://useractions-7.onrender.com/${id}` , {
            method : "DELETE"
        });
        const result = await response.json();
        this.getUserDetails()
        console.log(result)
    }

    render(){
         const {usersdata} = this.state;
         console.log(usersdata)
        
        return(
            <div>
                <div>
                    <h1 className="heading">All Posts</h1>
                <ul className='ulContainer'>
                    {
                        usersdata.map(eachdata => (
                            <UserDetails key = {eachdata.id} userDetrailsEle = {eachdata} deleteClicked = {this.deleteClicked}/>
                        ))
                    }
                </ul>
               
                </div>
            </div>
        )
    }
}

export default Read
