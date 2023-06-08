import React from 'react'

const about = () => {
  const arr = [1,2,3]
  const newArr = arr.map( e => <p>hello {e}</p>)
  return (
    <>

    <div>about</div>
    <div>{newArr}</div>
    </>
  )
}

export default about