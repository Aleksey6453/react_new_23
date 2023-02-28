import React from 'react'

interface ITest {
    gnom: string
}

const Test = ({gnom}: ITest) => {
  return (
    <div>
       <h2>Hallow gnom {gnom} </h2>
    </div>
  )
}

export default Test


