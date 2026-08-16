import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
    const [posts, setposts ] = useState([]);
    const [loading, setloading] = useState(true);
    async function fetchdata() {
        setloading(true);
        try {
            let output = await fetch(API_URL);
            let data = await output.json();
            setposts(data);
        }
        catch (error) {
            console.log("error aa gya ji");
        }
        setloading(false);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (

        <div className="w-full flex justify-center">
        <div className="w-[80%] min-h-[100vh] flex items-center justify-center">
            {
                loading ? <Spinner/>
                : posts.length > 0
                 ? (              
                 <div className="w-[100%] flex flex-wrap justify-center gap-5  m-4 mt-12"> 
                    {
                        posts.map((post)=>(
                          <Product key={post.id} post = {post} />
                        ))
                    }
                </div>
                ) : <p>Post not found</p>
            }
         
        </div >
        </div>
    )
}