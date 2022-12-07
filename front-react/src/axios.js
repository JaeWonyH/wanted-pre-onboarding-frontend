import axios from 'axios';

axios.defaults.baseURL = "https://pre-onboarding-selection-task.shop";

export const signup = (data) => {
    return axios.post('/auth/signup',{data}
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  };
