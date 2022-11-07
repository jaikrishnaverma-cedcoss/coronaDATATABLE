import React, { useState } from 'react'

const Main = (props) => {
    let [data,setData]=useState([...props.data])
    const sort=(column,e)=>{
        let sortKey=e.target.closest('th').id
         e=e.target.closest('th')
         var temp;
        console.log(sortKey) 
        function compareCountry( a, b ) {
            if ( a["Country/Region"] < b["Country/Region"] ){
              return -1;
            }
            if (a["Country/Region"] > b["Country/Region"] ){
              return 1;
            }
            return 0;
          }
    if(sortKey=='asc'){
        if(column=='Country')
        temp= data.sort((a, b) =>compareCountry(a,b))
        if(column=="Total Cases")
        temp= data.sort((a, b) =>a.TotalCases-b.TotalCases)
        if(column=="Total Deaths")
        temp= data.sort((a, b) =>a.TotalDeaths-b.TotalDeaths)
        if(column=="Total Recovery")
        temp= data.sort((a, b) =>a.TotalRecovered-b.TotalRecovered)
       e.setAttribute('id','desc')
       e.children[0].children[1].innerText='⇩';
    }
    else if(sortKey=='desc'){
        if(column=='Country')
        temp= data.sort((a, b) =>compareCountry(b,a))
        if(column=="Total Cases")
        temp= data.sort((a, b) =>b.TotalCases-a.TotalCases)
        if(column=="Total Deaths")
        temp= data.sort((a, b) =>b.TotalDeaths-a.TotalDeaths)
        if(column=="Total Recovery")
        temp= data.sort((a, b) =>b.TotalRecovered-a.TotalRecovered)
        e.children[0].children[1].innerText='⇧';
        e.setAttribute('id','asc')
    }
    e.classList.toggle("desc");
    setData([...temp])
}
  return (
   <>
   <div className="full row flexJCC p1">
<table className="full">
    <thead>
        <tr>
            {
            ["Country","Total Cases","Total Deaths","Total Recovery"].map((key)=>{
return <th onClick={(e)=>sort(key,e)} id="asc"><div className="row flexAIC flexSB"><p>{key}</p><span>⇧</span></div></th>
            } )
            }
        </tr>
    </thead>
    <tbody>
        {
            data.sort().map(x=>{
                return <tr>
                    <td>{x['Country/Region']}</td>
                    <td style={{color:"#008ad1"}}>{x['TotalCases']}</td>
                    <td style={{color:"rgb(239 0 125)"}}>{x['TotalDeaths']}</td>
                    <td style={{color:"rgb(193 136 6)"}}>{x['TotalRecovered']}</td>
                </tr>
            })
        }
    </tbody>
</table>
   </div>
   </>
  )
}

export default Main