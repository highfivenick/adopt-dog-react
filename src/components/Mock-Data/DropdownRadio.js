//import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import { DogGrid } from './Dog-Grid';
import { dog } from './Mock-Dog'
import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";

export const DropdownRadio = ({ id, value, defaultVal, dropLabel, value1, value2, label, label1, label2, label3 }) => {
  //console.log('INDG')
  const [getDogData, setDogData] = useState(['default'])
  const [getTargetVal, setTargetVal] = useState('All')

  let stateCopy = useRef([])
  useEffect(() => {
    console.log('times run')
    const options = {
      headers: { 'x-api-key': process.env.DOG_API_KEY }
    };
    const fetchDogData = () => {
      axios.get(
        'https://api.thedogapi.com/v1/breeds', options
      )
        .then((data) => {
          const numberArr = []

          for (let i = 0; i < 24; i++) numberArr.push(Math.round(Math.random() * 171))

          let copyDogDataArr = numberArr.map(el => data.data[el])

          copyDogDataArr = copyDogDataArr.map(el => {
            const { firstName, sex, age } = dog();
            return {...el, age, sex, name: firstName}
           // let stateCopy = useRef([...copyDogDataArr])
          })
          setDogData([...copyDogDataArr])
          stateCopy.current = [...copyDogDataArr]
        })
    }
    //reset state each time
    fetchDogData()
  }, [])
  //console.log('rsvrsvwrfd', dogInfoArr)


  const sortLoHi = (arr) => {
    return arr.sort((a, b) => {
      return a.age - b.age
    })
  }

  const sortHiLo = (arr) => {
    return arr.sort((a, b) => {
      return b.age - a.age
    })
  }

  const filterFemale = (arr) => {
    return arr.filter(el => el.sex === 'female')
  }

  const filterMale = (arr) => {
    return arr.filter(el => el.sex === 'male')
  }

  const handleSort = (event) => {
    const selectedValue = event.target.value
    setTargetVal(event.target.value)
    if (selectedValue === 'Age up') {
      setDogData(sortLoHi(getDogData))
    } else if (selectedValue === 'Age down') {
      setDogData(sortHiLo(getDogData))
    } else if (selectedValue === 'All'){
      setDogData([...stateCopy.current])
    }
  }

  // useEffect((event) => {
  //   handleSort(event)
  // }, [getDogData]) 
  
  // console.log('copy', stateCopy)

  // console.log('ffffff', getDogData)

  const handleFilter = (event) => {
    const selectedValue = event.target.value
    setTargetVal(event.target.value)
    if (selectedValue === 'Female') {
      setDogData(filterFemale(getDogData))
    } else if (selectedValue === 'Male') {
      setDogData(filterMale(getDogData))
    } else if (selectedValue === 'All'){
      setDogData([...stateCopy.current])
    }
  }

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id={id}>{dropLabel}</InputLabel>
          <Select
            id={id}
            value={getTargetVal}
            labelId={dropLabel}
            onChange={handleSort}
          >
            <MenuItem value={defaultVal}>
              <em>{defaultVal}</em>
            </MenuItem>
            <MenuItem value={value1}>{value1}</MenuItem>
            <MenuItem value={value2}>{value2}</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel id="">{label}</FormLabel>
          <RadioGroup
            aria-labelledby=""
            defaultValue={label3}
            name=""
            row
            onChange={handleFilter}
          >
            <FormControlLabel value={label1} control={<Radio />} label={label1} />
            <FormControlLabel value={label2} control={<Radio />} label={label2} />
            <FormControlLabel value={label3} control={<Radio />} label={label3} />
          </RadioGroup>
        </FormControl>

      </div>
      <div>
        <DogGrid dogInfoArr={getDogData} />
      </div>
    </>
  )
}






//import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Select from '@mui/material/Select';
// import { DogGrid } from './Dog-Grid';
// import { dog } from './Mock-Dog'
// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// export const DropdownRadio = ({ id, value, defaultVal, dropLabel, value1, value2, label, label1, label2, label3 }) => {
//   console.log('INDG')
//   const [getDogData, setDogData] = useState([])
//   const [getTargetVal, setTargetVal] = useState('All')

//   useEffect(() => {
//     const options = {
//       headers: { 'x-api-key': process.env.DOG_API_KEY }
//     };
//     const fetchDogData = () => {
//       axios.get(
//         'https://api.thedogapi.com/v1/breeds', options
//       )
//         .then((data) => {
//           const numberArr = []

//           for (let i = 0; i < 24; i++) numberArr.push(Math.round(Math.random() * 171))

//           let copyDogDataArr = numberArr.map(el => data.data[el])
//           copyDogDataArr = copyDogDataArr.forEach(el => {
//             const { firstName, sex, age } = dog();
//             el.age = age
//             el.name = firstName
//             el.sex = sex
//             setDogData([...copyDogDataArr])
//           })
//         })
//     }
//     //reset state each time
//     fetchDogData()
//   }, [])
//   //console.log('rsvrsvwrfd', dogInfoArr)
//   const stateCopy = getDogData
//   //move api logic and all that to sf - check
//   //access info in grid - sf pass down target as prop - + ogArr
//   //grid displays using map 

//   const sortLoHi = (arr) => {
//     arr.sort((a, b) => {
//       return a.age < b.age ? a : b
//     })
//   }

//   const handleChange = (event) => {
//     console.log(event.target.value, 'jfjvnef  ddd  d')
//     setTargetVal(event.target.value)
//     if (getTargetVal === { value1 }) {
//       setDogData(sortLoHi(getDogData))
//     } else if (getTargetVal === { value2 }) {
//       setDogData(getDogData.sort((a, b) => a.age > b.age))
//     } else {
//       setDogData([...stateCopy])
//     }
//       console.log('ffffff', getTargetVal, {value1})

//   }
//   //console.log('here, bruh', getDogData.map(el => el.age))

//   //console.log(Array.isArray(getDogData), getDogData, 'ayooooo', getDogData.sort((a, b) => a.age - b.age))
//   return (
//     <>
//       <div>
//         <FormControl sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel id={id}>{dropLabel}</InputLabel>
//           <Select
//             id={id}
//             value={getTargetVal}
//             labelId={dropLabel}
//             onChange={handleChange}
//           >
//             <MenuItem value={defaultVal}>
//               <em>{defaultVal}</em>
//             </MenuItem>
//             <MenuItem value={value1}>{value1}</MenuItem>
//             <MenuItem value={value2}>{value2}</MenuItem>
//           </Select>
//         </FormControl>
//       </div>
//       <div>
//         <FormControl>
//           <FormLabel id="">{label}</FormLabel>
//           <RadioGroup
//             aria-labelledby=""
//             defaultValue={label1}
//             name=""
//             row
//           >
//             <FormControlLabel value={label1} control={<Radio />} label={label1} />
//             <FormControlLabel value={label2} control={<Radio />} label={label2} />
//             <FormControlLabel value={label3} control={<Radio />} label={label3} />
//           </RadioGroup>
//         </FormControl>

//       </div>
//       <div>
//         <DogGrid dogInfoArr={getDogData} />
//       </div>
//     </>
//   )
// }
