import React from "react";

export default function Loader() {
  return (
    <div class="content d-flex justify-content-center align-items-center h-100">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
