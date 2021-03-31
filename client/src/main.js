import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router } from '@reach/router'
import AllPets from './components/allpets'
import CreatePet from './components/createpet'
import PetDetails from './components/petdetails'
import UpdatePet from './components/updatepet'
const Main = () => {
    const [ pets, setPets ] = useState([]);
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allpets')
            .then(res => setPets(res.data.pets))
            .catch(err => console.log("Error: ", err))
    }, [])

    const adoptPet = (id) =>{
        setPets(pets.filter(pets => pets._id !== id))
    }
    

    return (
        <div>
            <Router>
                <AllPets path='/' pets = {pets}/>
                <CreatePet path='/pets/new'/>
                <PetDetails path='pets/:id' adoptPet={adoptPet}/>
                <UpdatePet path='pets/:id/edit' />
            </Router>
        </div>
    )
}

export default Main