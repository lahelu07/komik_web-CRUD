import React, { useState, useEffect } from "react";

function KomikForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    nama: "",
    author: "",
    genre: "",
    tahun_terbit: "",
    publisher: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi input
    if (
      !form.nama ||
      !form.author ||
      !form.genre ||
      !form.tahun_terbit ||
      !form.publisher
    ) {
      alert("Semua field harus diisi!");
      return;
    }

    const data = {
      ...form,
      tahun_terbit: parseInt(form.tahun_terbit, 10), // Konversi ke integer
    };

    onSubmit(data);
    setForm({
      nama: "",
      author: "",
      genre: "",
      tahun_terbit: "",
      publisher: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama"
          className="border px-3 py-2 w-full"
        />
        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
          className="border px-3 py-2 w-full"
        />
        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="border px-3 py-2 w-full"
        />
        <input
          name="tahun_terbit"
          value={form.tahun_terbit}
          onChange={handleChange}
          placeholder="Tahun Terbit"
          className="border px-3 py-2 w-full"
        />
        <input
          name="publisher"
          value={form.publisher}
          onChange={handleChange}
          placeholder="Publisher"
          className="border px-3 py-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {form.id ? "Update" : "Submit"}
      </button>
    </form>
  );
}

export default KomikForm;
