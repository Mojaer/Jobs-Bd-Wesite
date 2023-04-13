import React from 'react';
import './Statistics.css'
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import Footer from '../../Footer/Footer';

const assignments = [
    { name: "Assignment 1", number: 58 },
    { name: "Assignment 2", number: 60 },
    { name: "Assignment 3", number: 60 },
    { name: "Assignment 4", number: 60 },
    { name: "Assignment 5", number: 50 },
    { name: "Assignment 6", number: 30 },
    { name: "Assignment 7", number: 50 },
    { name: "Assignment 8", number: 56 }
];

const COLORS = ['#191a19', '#283aff', '#348a25', '#ff2828'];

const Statistics = () => {
    return (
        <>
            <div className='statistics'>
                <div><h3><b>Statistics of assignment numbers</b></h3> </div>
                <div className='item' >
                    <PieChart width={1000} height={400} >
                        <Pie
                            dataKey="number"
                            isAnimationActive={true}
                            data={assignments}
                            cx={200}
                            cy={200}
                            outerRadius={160}
                            fill="#8884d8"
                            label
                        >
                            {assignments.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
            <Footer></Footer>

        </>

    );
};

export default Statistics;