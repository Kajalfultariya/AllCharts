import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

function Home() {
    const [cdata, setCdata] = useState([])
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        const response = await axios.get("http://localhost:3000/chartsData")
        console.log("all charts data")
        setCdata(response?.data)
    }

    return (
        <div className="container">

            <LineChart
                width={900}
                height={700}
                data={cdata}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />

            </LineChart>
        </div>
    )
}
export default Home; 