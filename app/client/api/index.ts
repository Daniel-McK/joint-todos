import axios from 'axios';

export async function fetchLists() {
  return await axios.get(`${API}/lists`);
}

export async function login(email: string, password: string) {
  return await axios.post(`${AUTH}/login`, { email, password });
}

const API = '/api';
const AUTH = '/AUTH';