import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import handleChecksession from '@/components/handleChecksession';

export default function Dashboard(){
    const navigate = useNavigate();
    useEffect(() => {
        const handleCheck = async () => {
        const response = await handleChecksession();
        if (!response.loggedIn) {
            navigate('/');
        }
        };
        handleCheck();
    }, [navigate]);
    return(
        <>
        <h1>Dashboard</h1>
        </>
    )
}