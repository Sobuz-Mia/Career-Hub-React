import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const JobCategory = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('/data/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    // console.log(categories);
    return (
        <div className="my-24">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Job Category List</h2>
                <p className="my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    categories.map(card=> <CategoryCard card ={card} key={card.id}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCategory;