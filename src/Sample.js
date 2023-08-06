import React,{useState,useEffect} from "react";
import axios from "axios";
export default function Sample(){
    const[data,setData]=useState([]);
    const[open,setOpen]=useState(false)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
             setData(res.data)
        })
        // .then((data)=>{
        //     setData(data)
        // })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    const handle=()=>{
        setOpen(!open)
    }
    return(
        <div>
            <button onClick={handle}>{open?"close":"open"}</button>
            {open &&(
    <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                   {data.map((x)=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>{x.body}</td>

                    </tr>
                   ))}
                </tbody>
            </table>
            )}
        

        </div>
        
    )
}