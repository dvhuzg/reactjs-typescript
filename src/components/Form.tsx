import React, { useState } from 'react'
import '../css/Form.css'
import { IState as Props } from '../App'

interface IProps{
  people:Props['people'],
  setPeople:React.Dispatch<React.SetStateAction<Props['people']>>
}
const Form = ({people, setPeople}:IProps):JSX.Element => {
  const [inputData, setInputData] = useState({name:'', age:'', bio:''});

  const onChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>):void =>{
    setInputData ({...inputData,[e.target.name]:e.target.value});
  }
  const onSubmit = (e :React.FormEvent<HTMLFormElement>):void =>{
    e.preventDefault();
    setPeople([...people, {
      name:inputData.name,
      age:Number(inputData.age),
      bio:inputData.bio
    }]);
    console.log(inputData.name, inputData.age, inputData.bio);
    setInputData({name:'', age:'', bio:''})
    
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <h1>Form</h1>
      <input type="text" name="name" id="name" placeholder='Name' onChange={onChange}/>
      <input type="number" name="age" id="age" placeholder='Age' onChange={onChange}/>
      <textarea name="bio" id="bio" placeholder='Bio Description' onChange={onChange}></textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form