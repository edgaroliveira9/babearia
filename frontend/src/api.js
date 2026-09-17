import axios from 'axios';

// O navegador acessa a API pela porta publicada no host (3000),
// já que quem faz a chamada é o browser, não o container do front.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

export default api;
