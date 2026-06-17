import { useState } from "react";
import COC from "../../assets/img/COC.png";
import COA from "../../assets/img/COA.jpg";
import LOC from "../../assets/img/LOC.jpg";
import ECertificate from "../../assets/img/E-Certificate.jpg";
import { useDarkMode } from "../../context/DarkmodeProvider";

function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { darkMode } = useDarkMode();

  const certifications = [
    {
      name: "Certificate of Completion Issued by the organization",
      issuer: "The Umonics Method ",
      img: COC,
    },
    {
      name: "Certificate of Participation Issued by SLU Data Privacy Office",
      issuer: "SLU Data Privacy Office",
      img: COA,
    },
    {
      name: "Letter of Completion",
      issuer: "The Umonics Method ",
      img: LOC,
    },
    {
      name: "E-Certificate",
      issuer: "SLU Data Privacy Office",
      img: ECertificate,
    },
  ];

  return (
    <div
      className={`${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      } flex-1 shadow-[0_0_6px_rgba(0,0,0,0.25)] border p-6 rounded-md flex flex-col gap-4`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            darkMode ? "bg-red-400" : "bg-red-500"
          }`}
        />
        <strong className="text-base tracking-tight">Certifications</strong>
      </div>

      <div className="flex flex-col p-2 gap-3 h-57 overflow-y-auto">
        {certifications.map((cert, index) => (
          <div
            onClick={() => setSelectedImg(cert.img)}
            key={index}
            className={`cursor-pointer rounded-lg p-4 pr-10 relative border ${
              darkMode
                ? "bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-gray-200"
                : "bg-orange-50 hover:bg-orange-100 border border-orange-200 text-gray-800"
            }`}
          >
            <strong className="text-sm">{cert.name}</strong>
            <p
              className={`text-[12px] font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {cert.issuer}
            </p>
            {cert.img && (
              <button
                title="View Certificate"
                className="absolute top-3 right-3 text-gray-400 cursor-pointer text-lg"
              >
                <i className="bi bi-arrows-angle-expand" />
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={selectedImg}
            className="w-[80%] h-[80%] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Certifications;
