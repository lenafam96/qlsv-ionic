import axios from "axios";
import { useState } from "react";

const [data, setData] = useState(null);

async function updateData(data: any) {
  const response = await axios.post(`http://example.com/api/data`, data);
  const updatedData = response.data;
  setData(updatedData);
}

export { data, updateData };
