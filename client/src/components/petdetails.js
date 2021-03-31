import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, navigate} from '@reach/router'

const PetDetails = props =>{
    const [usePet, setUsePet] = useState();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pet/' + props.id)
            .then(res =>{
                setUsePet(res.data.pets)
            })
    }, [])
    

    const axiosDelete = (petId) =>{
        axios.delete('http://localhost:8000/api/delete/' + petId)
            .then(res =>{
                props.adoptPet(petId)
                navigate('/')
            })
    }
    if(usePet){    
        return(
            <div>
                <div className='seperate'>    
                    <h1>Pet Shelter</h1>
                    <Link to='/'>Back to Home</Link>
                </div>
                <div className='seperate'>    
                    <h2>Details about: {usePet.name} </h2>
                    <button className='adoptPet' onClick={(e) => {axiosDelete(usePet._id)}}>Adopt Pet</button>
                </div>
                <h3>Pet Type: {usePet.type}</h3>
                <h3>Description: {usePet.description}</h3>
                <h3>Skills: {usePet.skill1} {usePet.skill2} {usePet.skill3}</h3>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}
export default PetDetails