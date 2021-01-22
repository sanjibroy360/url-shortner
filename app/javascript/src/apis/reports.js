import axios from "axios";

const sendReport = (payload) => axios.post("/reports", payload);

const reportsApi = {
  sendReport,
};

export default reportsApi;
