import {Line} from 'react-chartjs-2'
import { Filler } from "chart.js";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {useState} from "react";
import {Box} from "@mui/material";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const options = {
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y :{
            display:false
        },
        x:{
            display: false
        }
    }
};

const Chart = () => {
    const [data, setData] = useState({
        labels:['','','','','','','','','','','','','','','','','','','','','','','','','',''],
        datasets: [
            {
                label: 'data',
                data:[10,7,4,15,12,17,13,25,22,29,40,37,47,43,59,60,55,62,69,43,59,60,75,62,75,80],
                borderColor: '#E94560',
                backgroundColor: '#FFE1E6',
                fill: true,
                tension:0.4,
                pointBackgroundColor:'#E94560',
                borderWidth:1
            },
        ],
    });
    return(
        <Box p={1}>
            <Line data={data} options={options}/>
        </Box>
    )
}

export default Chart