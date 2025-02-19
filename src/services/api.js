import axios from "axios";

const apiFB = axios.create({
    baseURL: import.meta.env.VITE_FB_API_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_FB_ACCESS_TOKEN}`,
    },
});

const apiBFF = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001"
    },
  });

export const uploadMedia = async (file) => {
    const formData = new FormData();
    formData.append("messaging_product", "whatsapp");
    formData.append("file", file);

    try {
        const response = await apiFB.post(
            `/${import.meta.env.FB_PHONE_NUMBER}/media`, 
            formData
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao enviar arquivo:", error);
        throw error;
    }
};

export const sendMarketingMessage = async (payload) => {
    console.log('payload: ', payload);
    
    try {
        const response = await apiBFF.post("/message/marketing", payload);
    
        return response.data;
      } catch (error) {
        console.error("Error sending marketing message:", error);
        throw error;
      }
}
