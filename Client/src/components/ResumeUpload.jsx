import { useState } from "react";
import API from "../services/api";
import Dashboard from "./Dashboard";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {

    if (!file) {
      alert("Please upload resume");
      return;
    }

    if (!jobDescription) {
      alert("Please enter Job Description");
      return;
    }

   const formData = new FormData();

formData.append(
  "resume",
  file
);

    formData.append(
      "jobDescription",
      jobDescription
    );

    try {

      const response =
        await API.post(
          "/analysis/analyze",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data"
            }
          }
        );

      console.log(
        response.data
      );

      setResult(
        response.data
      );

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        error.message
      );

    }
  };

  return (
    <div className="uploadBox">

      <h2>
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <textarea
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(
            e.target.value
          )
        }
      />

      <button
        onClick={analyzeResume}
      >
        Analyze Resume
      </button>

      {result && (
        <Dashboard
          result={result}
        />
      )}

    </div>
  );
}

export default ResumeUpload;