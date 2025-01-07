import React, { useState, useEffect } from "react";
import KomikForm from "./components/KomikForm";
import KomikList from "./components/KomikList";
import axios from "axios";

function App() {
  const [komik, setKomik] = useState([]);
  const [editKomik, setEditKomik] = useState(null);

  useEffect(() => {
    fetchKomik();
  }, []);

  const fetchKomik = async () => {
    try {
      const response = await axios.get("http://localhost:8081/komik", {
        withCredentials: true,
      });
      setKomik(response.data);
    } catch (error) {
      console.error(
        "Error fetching komik:",
        error.response?.data || error.message
      );
    }
  };

  const handleAddOrUpdate = async (data) => {
    try {
      console.log("Data yang dikirim:", data);
      if (data.id) {
        await axios.put(`http://localhost:8081/komik/${data.id}`, data, {
          withCredentials: true,
        });
      } else {
        await axios.post("http://localhost:8081/komik", data, {
          withCredentials: true,
        });
      }
      fetchKomik();
      setEditKomik(null);
    } catch (error) {
      console.error(
        "Error mengirim data:",
        error.response?.data || error.message
      );
      alert("Gagal mengirim data ke server.");
    }
  };

  const handleEdit = (komik) => {
    setEditKomik(komik);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/komik/${id}`, {
        withCredentials: true,
      });
      fetchKomik();
    } catch (error) {
      console.error(
        "Error menghapus komik:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Komik</h1>
      <KomikForm onSubmit={handleAddOrUpdate} initialData={editKomik} />
      <KomikList komik={komik} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
