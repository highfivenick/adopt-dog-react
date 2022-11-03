//import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import { DogGrid } from './Dog-Grid';
import { dog } from './Mock-Dog'
import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";

export const DropdownRadio = ({ id, defaultVal, dropLabel, value1, value2, label, label1, label2, label3 }) => {
  const [getDogData, setDogData] = useState(['default'])
  const [getTargetVal, setTargetVal] = useState('Age ↕︎')
  let stateCopy = useRef([])
  useEffect(() => {
    const options = {
      headers: { 'x-api-key': process.env.DOG_API_KEY }
    };
    const fetchDogData = () => {
      axios.get(
        'https://api.thedogapi.com/v1/breeds', options
      )
        .then((data) => {
          const numberArr = []

          while (numberArr.length < 24) {
            let randomNum = Math.round(Math.random() * 171)
            if(!numberArr.includes(randomNum)){
              numberArr.push(randomNum)
            }
          }
          
          let copyDogDataArr = numberArr.map(el => data.data[el])

          copyDogDataArr = copyDogDataArr.map(el => {
            const { firstName, sex, age } = dog();
            return {...el, age, sex, name: firstName}
          })
          copyDogDataArr.forEach(el => {
           return el.sex === 'female' ? el.sex = 'Female' : el.sex = 'Male'
          })

          setDogData([...copyDogDataArr])
          stateCopy.current = [...copyDogDataArr]
        })
    }
    fetchDogData()
  }, [])

  const sortAgeLoHi = (arr) => {
    return arr.sort((a, b) => {
      return a.age - b.age
    })
  }

  const sortAgeHiLo = (arr) => {
    return arr.sort((a, b) => {
      return b.age - a.age
    })
  }

  const filterFemale = (arr) => {
    return arr.filter(el => el.sex === 'Female')
  }

  const filterMale = (arr) => {
    return arr.filter(el => el.sex === 'Male')
  }

  const handleAgeSort = (event) => {
    const selectedValue = event.target.value
    setTargetVal(event.target.value)
    if (selectedValue === 'Age ↑') {
      setDogData(sortAgeLoHi(getDogData))
      console.log('val', 'Age ↑', selectedValue )
    } else if (selectedValue === 'Age ↓') {
      setDogData(sortAgeHiLo(getDogData))
    } else if (selectedValue === 'Age ↕︎'){
      setDogData([...stateCopy.current])
    }
  }

  const handleFilter = (event) => {
    const selectedValue = event.target.value
    if (selectedValue === 'Female') {
      setDogData(filterFemale([...stateCopy.current]))
    } else if (selectedValue === 'Male') {
      setDogData(filterMale([...stateCopy.current]))
    } else if (selectedValue === 'All'){
      setDogData([...stateCopy.current])
    }
  }

  return (
    <div className='background-image'>
      <div style={{textAlign: 'center',
                   marginTop: '3vh',
                   backgroundColor: '#ddf3ffbd'
                   }}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id={id}>'{dropLabel}'</InputLabel>
          <Select
            id={id}
            value={getTargetVal}
            label={dropLabel}
            onChange={handleAgeSort}
            style={{backgroundColor: '#fafafa'}}
          >
            <MenuItem value={defaultVal}>
              <em>{defaultVal}</em>
            </MenuItem>
            <MenuItem value={value1}>{value1}</MenuItem>
            <MenuItem value={value2}>{value2}</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{textAlign: 'center',
                   marginBottom: '1vh',
                   backgroundColor: '#ddf3ffa3'
                   }}>
        <FormControl>
          <FormLabel id="">{label}</FormLabel>
          <RadioGroup
            aria-labelledby=""
            defaultValue={label3}
            name=""
            row
            onChange={handleFilter}
          >
            <FormControlLabel value={label3} control={<Radio />} label={label3} />
            <FormControlLabel value={label1} control={<Radio />} label={label1} />
            <FormControlLabel value={label2} control={<Radio />} label={label2} />
          </RadioGroup>
        </FormControl>

      </div>
      <div>
        <DogGrid dogInfoArr={getDogData} />
      </div>
    </div>
  )
}
