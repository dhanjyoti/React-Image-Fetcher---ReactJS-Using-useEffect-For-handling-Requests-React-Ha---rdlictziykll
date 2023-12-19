import React, { useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
import useDebounce from './useDebounce';

const fetchImage = async ({id}) => {
    return await(await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)).json()
}

const App = () => {
    const [value, setValue] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)

    useDebounce(async ()=>{
        if(value){
          let res =  await fetchImage({id:value})
          setImage(res)
          setLoading(false)
        }
    }, 300, [value])

  return (
    <div>
        Id number: <input type='number' min={1} max={5000} value={value} onChange={(e)=>{
            setImage(null)
            setValue(e.target.value)
            setLoading(true)
            }}/>
        {image && <PhotoFrame {...image}/>}
        {loading && <Loader />}
    </div>
  )
}


export default App;
