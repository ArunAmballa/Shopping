import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts,setPosts]=useState([])
  const [loading,setLoading]=useState(false);

  async function fetchData(){
    setLoading(true)
    try{
      const res=await fetch(API_URL);
      const data=await res.json()
      setPosts(data);

    }
    catch(err){
      console.log("Data Not recived from API");
      setPosts([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      {
         loading ? (<Spinner></Spinner>) :(
          <div>
            {
              posts.length >0 ? 
              (
                posts.map((post)=>{
                  return (<Product key={post.id} post={post}></Product>)
                })
              )
              :
              (<div><p>No Data Found</p></div>)
            }
          </div>
         )
      }

    </div>

  );
};

export default Home;
