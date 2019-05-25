import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI || `https://onboarding-k8db.cccsuk.co.uk/`
});
