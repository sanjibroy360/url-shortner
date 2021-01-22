import React, { useEffect, useState } from "react";
import { setAuthHeaders } from "apis/axios";
import reportsApi from "apis/reports";

export default function Report() {
  let [email, setEmail] = useState("");

  useEffect(() => {
    setAuthHeaders();
  }, []);

  async function handleSubmit() {
    try {
      const payload = {
        report: {
          email,
        },
      };
      let response = await reportsApi.sendReport(payload);
      console.log(response, "Report response");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="input-group mb-3 w-50 mx-auto mt-4">
      <input
        value={email}
        type="text"
        class="form-control"
        placeholder="abcd@example.com"
        aria-label="Email"
        aria-describedby="basic-addon2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div class="input-group-append">
        <button
          type="button"
          class="btn btn-primary"
          id="basic-addon2"
          onClick={handleSubmit}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
