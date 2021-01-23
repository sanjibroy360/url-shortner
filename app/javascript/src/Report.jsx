import React, { useEffect, useState } from "react";
import { setAuthHeaders } from "apis/axios";
import reportsApi from "apis/reports";
import Loader from "components/Loader";

export default function Report() {
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setAuthHeaders();
  }, []);

  async function handleSubmit() {
    try {
      if (email.trim()) {
        var isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
          email
        );
        if (!isValidEmail) {
          return setErrorMsg("Invalid Email.");
        }
      }
      setLoading(true);
      const payload = {
        report: {
          email,
        },
      };
      let response = await reportsApi.sendReport(payload);
      window.location.href = "/";
    } catch (error) {
      setErrorMsg("Something went wrong.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  }

  function handleInput(email) {
    if (email) {
      setErrorMsg("");
      setEmail(email);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="content">
      <div class="input-group mb-2 w-50 mx-auto mt-5">
        <input
          value={email}
          type="text"
          class="form-control"
          placeholder="abcd@example.com"
          aria-label="Email"
          aria-describedby="basic-addon2"
          onChange={(e) => handleInput(e.target.value)}
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
      {errorMsg.trim() && (
        <p class="w-50 mx-auto text-danger">* {errorMsg.trim()}</p>
      )}
    </div>
  );
}
