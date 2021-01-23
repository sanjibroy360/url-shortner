import React, { useState } from "react";
import urlsApi from "apis/urls";

export default function InputUrl() {
  let [url, setUrl] = useState("");

  async function handleSubmit() {
    try {
      if (url.trim()) {
        const payload = {
          urls: {
            original_url: url,
          },
        };
        let response = await urlsApi.generateShortendUrl(payload);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUrl("");
    }
  }

  return (
    <div class="input-group w-50 mx-auto my-5">
      <input
        value={url}
        type="text"
        class="form-control"
        placeholder="Enter URL"
        aria-label="URL"
        aria-describedby="basic-addon2"
        onChange={(e) => setUrl(e.target.value)}
      />
      <div class="input-group-append">
        <button
          type="button"
          class="btn btn-primary"
          id="basic-addon2"
          onClick={handleSubmit}
        >
          Shorten
        </button>
      </div>
    </div>
  );
}
