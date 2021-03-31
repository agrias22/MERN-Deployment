import React, { useEffect, useState } from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
const UpdatePet = props =>{
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [errors, setErrors] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pet/' + props.id)
            .then(res =>{
                setName(res.data.pets.name)
                setType(res.data.pets.type)
                setDescription(res.data.pets.description)
                setSkill1(res.data.pets.skill1)
                setSkill2(res.data.pets.skill2)
                setSkill3(res.data.pets.skill3)
            })
    }, [])

    const updatePet = e =>{
        e.preventDefault();
        if(name.length > 3 && type.length > 3 && description.length > 3){    
            axios.put('http://localhost:8000/api/edit/' + props.id,{
                name
            })
                .then(res => console.log(res))
            navigate('/')
        }
        else{
            setErrors('Name, Type and Description must be at least 3 characters long')
        }
    }

    return(
        <div>
            <h1>Pet Shelter</h1>
            <Link to='/'>Back to Home</Link>
            <h3>Edit  </h3>
            <form onSubmit={updatePet}>
                {errors}
                <label>Pet Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Pet Type:</label>
                <input type='text' value={type} onChange={(e) => setType(e.target.value)}/>
                <label>Description:</label>
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label>Skill :</label>
                <input type='text' value={skill1} onChange={(e) => setSkill1(e.target.value)}/>
                <label>Skill :</label>
                <input type='text' value={skill2} onChange={(e) => setSkill2(e.target.value)}/>
                <label>Skill :</label>
                <input type='text' value={skill3} onChange={(e) => setSkill3(e.target.value)}/>
                <button type='submit'>Update Pet</button>
            </form>
        </div>
    )
}
export default UpdatePet