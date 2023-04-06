import { useState, useEffect } from "react";

const useFetch = async ()=>{

const [data, setData]=useState(null)
const [loading, setLoading]=useState(false)
const [error, setError]=useState(false)


    useEffect( ()=>{
        const fetchData = async () => {
          try{ 
            const res = await axios.get('http://localhost:1337/api/products?populate=*&[filters][type][$eq]=' + props.types, {
              headers:{
              Authorization: "bearer" + "50845b022392af04b8c43911f613e89c0e7cdc9378a9516a3a0664c928e3f87f81488515d33f9c6e85d7400e32ded5259b9827a3cea9a99d07f5d66e5e2dd1d7e4e1937ed88a63eeab319d137883b4f24f1ee849d16f5d5168becc263a8571b4589968c40cf6f6bd802514e9db35a9b6c96e5f8c62344a06cf0e638b55695cab",
            }
           
          } );
        console.log(res.data.data)
      setData(res.data.data)
      
      }
          catch(err){
            console.log(err)
          }
        }
        fetchData()
      },[])

}

// useEffect( ()=>{
//     const fetchData = async () => {
//       try{ 
//         const res = await axios.get('http://localhost:1337/api/products?populate=*&[filters][type][$eq]=' + props.types, {
//           headers:{
//           Authorization: "bearer" + "50845b022392af04b8c43911f613e89c0e7cdc9378a9516a3a0664c928e3f87f81488515d33f9c6e85d7400e32ded5259b9827a3cea9a99d07f5d66e5e2dd1d7e4e1937ed88a63eeab319d137883b4f24f1ee849d16f5d5168becc263a8571b4589968c40cf6f6bd802514e9db35a9b6c96e5f8c62344a06cf0e638b55695cab",
//         }
       
//       } );
//     console.log(res.data.data)
//   setData(res.data.data)
  
//   }
//       catch(err){
//         console.log(err)
//       }
//     }
//     fetchData()
//   },[])