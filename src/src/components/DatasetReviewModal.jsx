import { useState } from "react";
import Button from "./Button";
import Badge from "./Badge";
import Checkbox from "./Checkbox";

export default function DatasetReviewModal({ onClose }) {
  const [checks, setChecks] = useState({
    attribution: false,
    license: false,
    provenance: false,
  });

  const allChecked = Object.values(checks).every(Boolean);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[760px] p-6 space-y-6">

        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">Dataset Review</h2>
            <p className="text-sm text-gray-500">
              The People’s Speech – Supervised
            </p>
          </div>
          <Badge>Attribution Required</Badge>
        </div>

        {/* Snapshot */}
        <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>Modality:</strong> Audio (Speech)</div>
          <div><strong>Use Case:</strong> ASR</div>
          <div><strong>Labeling:</strong> Fully Transcribed</div>
          <div><strong>Size:</strong> ~30,000 hours</div>
          <div><strong>Source:</strong> Internet Archive</div>
          <div><strong>Updated:</strong> Jan 2025</div>
        </div>

        {/* Compliance */}
        <div className="space-y-3">
          <h3 className="font-medium">Licensing & Compliance</h3>
          <p className="text-sm text-yellow-800 bg-yellow-50 p-3 rounded-md">
            Commercial use is allowed, but attribution is required.
          </p>

          <Checkbox
            label="Attribution statement attached"
            checked={checks.attribution}
            onChange={() =>
              setChecks({ ...checks, attribution: !checks.attribution })
            }
          />
          <Checkbox
            label="License compatibility verified"
            checked={checks.license}
            onChange={() =>
              setChecks({ ...checks, license: !checks.license })
            }
          />
          <Checkbox
            label="Source provenance documented"
            checked={checks.provenance}
            onChange={() =>
              setChecks({ ...checks, provenance: !checks.provenance })
            }
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between pt-4 border-t">
          <Button variant="secondary">Send to Legal</Button>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={!allChecked}>
              Approve for Training
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

