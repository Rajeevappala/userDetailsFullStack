
import './index.css'
const UserDetails = (props) => {
    const {userDetrailsEle , deleteClicked} = props 
    const {name , email , age , id} = userDetrailsEle

    const clickedDeleteButton = () => {
        deleteClicked(id)
    }

    return(
        <li className='listEle'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{age}</p>
            <div>
                <button type="button" className='btn btn-primary button' onClick = {clickedDeleteButton}>Delete</button>
                
            </div>
        </li>
    )
}
    
        

export default UserDetails