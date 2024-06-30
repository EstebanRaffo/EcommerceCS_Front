import axios from "axios";
const InstanceDatosMedicosAxios = axios.create({ baseURL: "https://localhost:7168/api/Venta" });
const headerConfig = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    authorization: "Bearer" + window.localStorage.getItem("access_token"),
  },
};

export const getVentas = (param) => {
  return InstanceDatosMedicosAxios.get(`/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const postVenta = (param) => {
  let productos = param.param1.map((e) => {
    return {
      ...e,
      Descripcion: e.descripciones
    }
  });
  const data = JSON.stringify(productos);
  return InstanceDatosMedicosAxios.post(`/${param.param2}`, data, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

