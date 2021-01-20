import axios from "axios";

const generateShortendUrl = (payload) => axios.post("/urls", payload);
const pinUrl = (slug, payload) => axios.patch(`/urls/${slug}`, payload);
const visitSiteUsingShortenedUrl = (slug) => axios.patch(`/urls/${slug}`);

const urlsApi = { generateShortendUrl, pinUrl, visitSiteUsingShortenedUrl };

export default urlsApi;
