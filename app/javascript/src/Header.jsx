import React from "react";

export default function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div className="container">
        <a class="navbar-brand" href="/">
          URL Shortner
        </a>

        <div class="d-flex align-items-center justify-content-between">
          <p>
            <a class='text-white' href="/">Home</a>
          </p>

          <p class="ml-3">
            <a class='text-white' href="/reports/new">Get Report To Your Email</a>
          </p>
        </div>
      </div>
    </nav>
  );
}
