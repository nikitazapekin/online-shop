import axios from "axios";

const url = process.env.API_URL;
const port = process.env.API_PORT;

export const apiInstance = axios.create({
  baseURL: `${url}:${port}`,
});
export const shopApi = {
  async getProducts() {
    const { data } = await apiInstance.get("/tovars");
    return data;
  },
  async addProduct() {
    await apiInstance.post("/addProduct", {
      name: "124",
      id: "123",
    });
  },
};