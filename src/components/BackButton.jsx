import { Link } from 'react-router-dom';
import '../styles/backbutton.css'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function BackButton(){
    return(
        <>
        <div className='back-container'>
            <ul className='back-ul'>
                <Link to="/">
                    <div className='back-item'>
                        <MdKeyboardDoubleArrowLeft />
                    </div>
                </Link>
            </ul>
        </div>
        </>
    )
}