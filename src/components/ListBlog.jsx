import React, { useContext } from 'react'
import { Recivedata } from '../store/Storedata';


  

function ListBlog({formdata}) {
  const {deletedata} = useContext(Recivedata)

  return (
    <div className='itembox'>
        <h1> {formdata.Tittle} </h1>
       <div>
        <p>{formdata.Decription}</p>
        
        <div className='tagscontainer'>
          <span>{formdata.HashTags}</span>

        </div>
       
       </div>
       <button onClick={()=>deletedata(formdata.userid)}  > Delete Post </button>

        
      
    </div>
  )
}

export default ListBlog
