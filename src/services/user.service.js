import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "test/all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "test/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "test/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "test/admin", { headers: authHeader() });
};

// Servicios de Farmacia
const getMedicamentos = () => {
  return axios.get(API_URL + "medicamentos");
};

const getMedicamento = (id) => {
  return axios.get(API_URL + `medicamentos/${id}`);
};

const createMedicamento = (data) => {
  return axios.post(API_URL + "medicamentos", data, { headers: authHeader() });
};

const updateMedicamento = (id, data) => {
  return axios.put(API_URL + `medicamentos/${id}`, data, { headers: authHeader() });
};

const deleteMedicamento = (id) => {
  return axios.delete(API_URL + `medicamentos/${id}`, { headers: authHeader() });
};

const getLaboratorios = () => {
  return axios.get(API_URL + "laboratorios");
};

const createOrdenCompra = (detalles) => {
  return axios.post(API_URL + "ordenes", { detalles }, { headers: authHeader() });
};

const getOrdenes = () => {
  return axios.get(API_URL + "ordenes", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getMedicamentos,
  getMedicamento,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento,
  getLaboratorios,
  createOrdenCompra,
  getOrdenes
};

export default UserService;