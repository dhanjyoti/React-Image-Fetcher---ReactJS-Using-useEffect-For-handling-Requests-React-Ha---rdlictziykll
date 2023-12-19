import React, { useEffect, useRef } from 'react'

const useDebounce = (callback, timeout=200, deps=[]) => {
    const ref = useRef(null)
  useEffect(()=> {
    if(ref.current){
        clearTimeout(ref.current)
        ref.current = null
    }
    if(!callback){
        return
    }
     
    ref.current = setTimeout(()=>{
        if(callback){

            callback()
        }
    }, timeout)

    return ()=> {
        clearTimeout(ref.current)
    }
  }, deps)
}

export default useDebounce