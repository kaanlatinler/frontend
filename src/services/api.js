import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7007/v1/",
});

export async function CheckToken(token) {
  try {
    const { data } = await api.get("auth/check-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
}

export async function LoginUser(params) {
  try {
    const { data } = await api.post("auth/login", params);
    return data.data;
  } catch (error) {
    return error.message;
  }
}

export async function LoginOwner(data) {
  try {
    return await api.post("auth/owner-login", data);
  } catch (error) {
    return error.data.message;
  }
}

export async function GetOwnerByToken(token) {
  try {
    const { data } = await api.get("crud/owner/get-owner-by-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
}

export async function GetBusinessCount(token) {
  try {
    const { data } = await api.get("crud/business/get-business-count", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
}

export async function GetEmployeeCount(token) {
  try {
    const { data } = await api.get("crud/employee/get-employee-count", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
}

export async function AddBusiness(formData, token) {
  try {
    const { data } = await api.post("crud/business/create-business", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
}

export async function GetBusinesses(token) {
  try {
    const { data } = await api.get("business/get-all-businesses-from-token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
}
