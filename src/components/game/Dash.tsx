import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Heading, VStack } from "@chakra-ui/react";
import Constants from "../../styles/Constants";
import User, {getAlgorithmString} from "../../truco/domain/model/User";
import Database from "../../truco/data/datasource/db";

interface IDashRequest {
     users: User[];
     canStart: boolean;
}

export default function Dash({users, canStart}: IDashRequest) {
    const formBackground = Constants.getFormBackground();
    const db = Database.getInstance();
    
    if (!users[0] || !canStart) {
        return <div></div>
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            }
        },
    };
    const labels = [''];
    const data = {
        labels,
        datasets: [
            {
                label: getAlgorithmString(users[0].algorithm),
                data: [db.globalScore[0]],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: getAlgorithmString(users[1].algorithm),
                data: [db.globalScore[1]],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <VStack alignItems={'start'} bg={formBackground} rounded={6} p={3} w={'full'}>
            <Heading size={'md'}>Dashboard</Heading>
            <Bar options={options} data={data} />
            </VStack>
            
        </>
    )
}