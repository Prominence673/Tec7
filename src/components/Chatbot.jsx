import '../styles/chatbot.css';
import robotImg from '../assets/robot.jpg';
import personaImg from '../assets/mono-pensando.jpg';
import { SiGooglegemini } from "react-icons/si";
import { IoMdClose, IoMdRefresh, IoMdOpen} from "react-icons/io";
import { useState /*, useRef, useEffect */} from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import handleSubmit from '../components/handleSubmit';

function Modal({fullDateTime}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
 /* const modalRef = useRef(null);*/

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
/*
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
*/ 
  return (
    <>
        {!isModalVisible && (
        <div className='chatbox-close'>
                <div className='chat-header-close'>
                    <div className='chat-header-left'>
                        <span className='chat-icon'><SiGooglegemini/></span>
                        <h3 className="chat-title">Gemini</h3>
                    </div>
                    <div className='chat-header-right'>
                        <button className='icon-button'><IoMdRefresh/></button>
                        <button className='icon-button' onClick={openModal}><IoMdOpen/></button>
                    </div>
                </div>
        </div>
        )}
      {isModalVisible && (
        <div className="chatbox" /*ref={modalRef}*/ >
            <div className='chat-header'>
                <div className='chat-header-left'>
                    <span className='chat-icon'><SiGooglegemini/></span>
                    <h3 className="chat-title">Gemini</h3>
                </div>
                <div className='chat-header-right'>
                    <button className='icon-button'><IoMdRefresh/></button>
                    <button className='icon-button' onClick={closeModal}><IoMdClose/></button>
                </div>
            </div>
            <FormMessage fullDateTime={fullDateTime}/>
        </div>
        )}
    </>
  );
}
function FormMessage({ fullDateTime }) {
    const [chatInput, setChatInput] = useState("");
    const [chatHistory, setChatHistory] = useState([
        {
            id: Date.now(),
            role: "bot",
            parts: "Hola! ¿En qué puedo ayudarte?",
            date: fullDateTime
        }
    ]);
    const [loading, setLoading] = useState(false);
    let dire = "/api/model/AI/aplication";
    let tipo = 'application/json';
    const eventSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        const newMessage = { 
            id: Date.now(),
            role: "user",
            parts: chatInput,
            date: fullDateTime
        };

        setChatHistory(prev => [...prev, newMessage]);
        setChatInput("");
        setLoading(true);

        try {
            const respuesta = await handleSubmit(e,{ dire, datos: newMessage.parts, tipo });
            if (respuesta) {
                const botMessage = {
                    id: Date.now() + 1, 
                    role: "bot",
                    parts: respuesta,
                    date: fullDateTime
                };
                setChatHistory(prev => [...prev, botMessage]);
            }
        } finally {
            setLoading(false); 
        }
    };

    return (
        <form className="chat-form-container" onSubmit={eventSubmit}>
            <div className='chat-date'><p>{fullDateTime}</p></div>
            <div className="chatlogs">
                {chatHistory.map(msg => (
                    <div key={msg.id} className="chat-container">
                        {msg.role === "user" ? (
                            <div className="chat-user">
                                <div className="message-container" id="ccuser">
                                    <p className="chat-message">{msg.parts}</p>
                                </div>
                                <div className="user-photo">
                                    <img src={personaImg} alt="usuario" />
                                </div>
                            </div>
                        ) : (
                            <div className="chat-bot">
                                <div className="user-photo">
                                    <img src={robotImg} alt="robot" />
                                </div>
                                <div className="message-container">
                                    <p className="chat-message">{msg.parts}</p>
                                </div>
                            </div>
                        )}
                        <div className="chat-date"><p>{msg.date}</p></div>
                    </div>
                ))}
            </div>

            <div className="chat-form">
                <input
                    type="text"
                    name="chat"
                    placeholder={loading ? 'Generando respuesta' : 'Preguntame lo que sea'}
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    autoComplete='off'
                    disabled={loading}
                    required
                />
                <button><FaRegPaperPlane /></button>
            </div>
        </form>
    );
}
function MessageForm(){
    const date = new Date();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    const dateString = `${day}/${month}/${year}`;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
    const fullDateTime = `${dateString} - ${timeString}`;
    return(
        <>
            <Modal fullDateTime = {fullDateTime}/>
        </>
    )
};



export default function Chatbot() {
    return (
        <>
        <MessageForm/>
        </>
    );
}