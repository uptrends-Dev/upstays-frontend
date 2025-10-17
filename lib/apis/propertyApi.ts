import axios from "axios";

// Get All Properties
export async function getAllProperies() {
  try {
    const url: string =
      "https://upstays-backend.vercel.app/api/property/getAllProperties";
    const res = await axios.get(url);
    // console.log(res);

    return res.data;
  } catch (error) {
    console.log(error);
    return "error ee";
  }
}
