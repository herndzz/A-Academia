// import axios from "axios";

// Funções de Busca
async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3333/atividades/');

        // Verifica se a resposta foi bem-sucedida (código de status 2xx)
        if (response.status === 200) {
            console.log('Dados recebidos:', response.data);
        } else {
            console.error('Erro na requisição:', response.statusText);
        }
    } catch (error) {
        console.error('Erro na requisição:', error.message);
    }
}

fetchData()






