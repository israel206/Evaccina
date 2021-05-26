import axios from 'axios';

// url da apiRest
const API_URL = 'http://localhost:8080/';

// class do service
class AppDataService{
  // Conexão para cadastro
  cadastrarPessoa(pessoa) {
    // requisição
    return axios.post(`${API_URL}pessoas`, pessoa)
  }
}

export default new AppDataService();