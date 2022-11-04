import React from 'react'

const Main = (props) => {
  return (
   <>
   <div className="full row FlexJCC p1">
<table className="full">
    <thead>
        <tr>
            {
            Object.entries(props.data[0]).map(([key,value])=>{
return <th>{key}</th>
            } )
            }
        </tr>
    </thead>
</table>
   </div>
   </>
  )
}

export default Main