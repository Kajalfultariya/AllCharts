import React, { useEffect,useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  
} from 'recharts';
import axios from 'axios';

export default function Example()  {
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
     
        <ComposedChart
          width={900}
          height={500}
          data={cdata}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 50,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="blockTime" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="slot" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
          <Scatter dataKey="slot" fill="red" />
        </ComposedChart>
    
    );
  
}
