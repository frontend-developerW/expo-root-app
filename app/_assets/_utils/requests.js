import axios from "axios";
import { updateLoader } from "../../_redux/actions/user";
const base_url = "https://ebook.firstcoders.site/api";

export const getRequest = async (url, dispatch) => {
  try {
    dispatch(updateLoader(true));
    const response = await axios.get(`${base_url}${url}`, {
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(updateLoader(false));
    return response.data;
  } catch (error) {
    dispatch(updateLoader(false));
    return error;
  }
};

export const postRequest = async (url, data = {}, dispatch) => {
  try {
    dispatch(updateLoader(true));
    const response = await axios.post(`${base_url}${url}`, data, {
      headers: {
        // 'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(updateLoader(false));
    return response.data;
  } catch (error) {
    dispatch(updateLoader(false));
    return error;
  }
};

export const putRequest = async (url, data = {}, dispatch) => {
  try {
    dispatch(updateLoader(true));
    const response = await axios.put(`${base_url}${url}`, data, {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(updateLoader(false));
    return response.data;
  } catch (error) {
    dispatch(updateLoader(false));
    return error;
  }
};

export const deleteRequest = async (url, dispatch) => {
  try {
    dispatch(updateLoader(true));
    const response = await axios.delete(`${base_url}${url}`, {
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(updateLoader(false));
    return response.data;
  } catch (error) {
    dispatch(updateLoader(false));
    return error;
  }
};
