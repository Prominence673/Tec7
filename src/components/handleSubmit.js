import axios from 'axios';

export default async function handleSubmit(e, { dire, datos, tipo }) {
  e.preventDefault();
  try {
    const response = await axios.post(dire, datos, {
      headers: { 'Content-Type': tipo }
    });
    return response.data;
  } catch (error) {
    console.error("Error al enviar datos:", error);
  }
}