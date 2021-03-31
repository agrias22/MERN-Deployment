import React from 'react'
import {Link} from '@reach/router'

const AllPets = props =>{
    return(
        <div>
            <h1>Pet Shelter</h1>
            <Link to='pets/new'>Add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions Available</th>
                </tr>
                {props.pets.map((pet, index)=>{ return <tr key={index}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td><Link to={'/pets/' + pet._id}>Details</Link> | <Link to={'/pets/' + pet._id + '/edit'}>Edit</Link></td>
                </tr>})}
            </table>
        </div>
    )
}

export default AllPets;