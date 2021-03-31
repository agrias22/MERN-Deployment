import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const CreatePet = props =>{
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [errors, setErrors] = useState([]);
    const [uniqe, setUniqe] = useState([]);
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allpets')
            .then(res => setUniqe(res.data.pets))
            .catch(err => console.log("Error: ", err))
    }, [])
    
    const namePets = uniqe.map(p => p.name)
    console.log(namePets)
    const onSubmitHandler = e =>{
        e.preventDefault();
        if(namePets.includes(name) == false){    
            axios.post('http://localhost:8000/api/pets',{
                name,
                type,
                description,
                skill1,
                skill2,
                skill3
            })
            .then(res =>{
                console.log('Response: ', res);
                navigate('/')
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
        }
        else{    
            errors.push("Name is already taken")
            navigate('/pets/new')
        }
    }
    return(
        <div>
            <h1>Pet Shelter</h1>
            <Link to='/'>Back to home</Link>
            <h3>Know A pet needing a home?</h3>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err,index) => <p key={index}>{err}</p>)}
                <label>Pet Name:</label>
                <input type='text' onChange={e => setName(e.target.value)}/>
                <label>Pet Type:</label>
                <input type='text' onChange={e => setType(e.target.value)}/>
                <label>Description:</label>
                <input type='text' onChange={e => setDescription(e.target.value)}/>
                <label>Skills (Optional)</label>
                <label>Skill 1:</label>
                <input type='text' onChange={e => setSkill1(e.target.value)}/>
                <label>Skill 2:</label>
                <input type='text' onChange={e => setSkill2(e.target.value)}/>
                <label>Skill 3:</label>
                <input type='text' onChange={e => setSkill3(e.target.value)}/>
                <button type='submit'>Add Pet</button>
            </form>
        </div>
    )
}
export default CreatePet