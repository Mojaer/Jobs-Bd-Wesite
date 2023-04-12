import React, { useEffect, useState } from 'react';
import './CategoryList.css'
import Category from './Category/Category';

const CategoryList = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch('/Category_list.json')
            const data = await response.json()
            setCategories(data.job_categories)
        }

        dataFetch()
    }, [])


    return (
        <div className='categoryList text-center mt-5'>
            <h1>Job CategoryList</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='d-md-flex align-items-center justify-content-between mt-5'>
                {
                    categories.map((category => <Category
                        category={category}
                        key={category.id}></Category>))
                }

            </div>
        </div>
    );
};

export default CategoryList;