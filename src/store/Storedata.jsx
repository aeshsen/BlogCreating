import React, { createContext, useReducer } from 'react'
export const Recivedata  = createContext({
    datalists: [],
    adddata : () =>{},
    deletedata : () =>{},
});

const Updatecurrentdata =(currentval , action) =>{
    let newarr;
    if(action.Type ==="Add"){
        newarr = [ action.payload, ...currentval];
    }
    else if(action.Type ==="Delete"){
        newarr = currentval.filter(lists => lists.id !== action.payload.userid )
    }
    return newarr;
    
     
}

function Storedata({children}) {
    const [datalists, dispatchdata] = useReducer(Updatecurrentdata,[]);
    const adddata =(Tname,Tdesc,Ttags,id) =>{
          dispatchdata({
            Type:"Add",
            payload:{
                userid : id,
                Tittle : Tname,
                Decription : Tdesc,
                HashTags : Ttags ,
            }
        })
    }
    const deletedata =({postid}) =>{
        dispatchdata({
            Type: "Delete",
            payload:{
                userid:postid
            }
        })
    }
    

  
  return (
   <Recivedata.Provider value={{datalists,adddata,deletedata }}>
   {children}
    </Recivedata.Provider>
  )
}

export default Storedata
