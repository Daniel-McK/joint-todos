import axios from 'axios';

export async function fetchLists() {
  return await axios.get('/api/lists');
}