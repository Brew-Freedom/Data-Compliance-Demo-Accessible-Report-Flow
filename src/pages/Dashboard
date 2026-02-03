import { useState } from "react";
import DatasetReviewModal from "../components/DatasetReviewModal";
import Button from "../components/Button";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-4">Datasets</h1>

      <div className="bg-white border rounded-lg p-4 flex justify-between items-center">
        <div>
          <p className="font-medium">The People’s Speech – Supervised</p>
          <p className="text-sm text-gray-500">Audio · CC-BY / CC-BY-SA</p>
        </div>
        <Button onClick={() => setOpen(true)}>Review</Button>
      </div>

      {open && <DatasetReviewModal onClose={() => setOpen(false)} />}
    </div>
  );
}
