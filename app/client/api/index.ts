import axios from 'axios';
const localStorage = require('local-storage');

export async function fetchLists() {
  return await axios.get(`${API}/lists`);
}

export async function login(email: string, password: string) {
  const result = await axios.post(`${AUTH}/login`, { email, password });
  if (result && result.data && result.data.success) {
    localStorage.set('token', result.data.token);
  }
  return result;
}

export async function loadUser(token: string) {
  const result = await axios.post(`${AUTH}/token`, { token });
  return result;
}

const API = '/api';
const AUTH = '/AUTH';