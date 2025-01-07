import React from "react";

function KomikList({ komik, onEdit, onDelete }) {
  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th className="border px-4 py-2">Nama</th>
          <th className="border px-4 py-2">Author</th>
          <th className="border px-4 py-2">Genre</th>
          <th className="border px-4 py-2">Tahun Terbit</th>
          <th className="border px-4 py-2">Publisher</th>
          <th className="border px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {komik.map((k) => (
          <tr key={k.id}>
            <td className="border px-4 py-2">{k.nama}</td>
            <td className="border px-4 py-2">{k.author}</td>
            <td className="border px-4 py-2">{k.genre}</td>
            <td className="border px-4 py-2">{k.tahun_terbit}</td>
            <td className="border px-4 py-2">{k.publisher}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(k)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(k.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default KomikList;
