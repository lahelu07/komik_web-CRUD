import React from "react";

const KomikDeleteModal = ({ komikId, onDeleteConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold">Hapus Komik</h2>
        <p>Apakah Anda yakin ingin menghapus komik ini?</p>
        <div className="mt-4 space-x-2">
          <button
            onClick={() => onDeleteConfirm(komikId)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Hapus
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default KomikDeleteModal;
