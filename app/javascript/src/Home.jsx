import React, { useState, useEffect } from "react";
import InputUrl from "components/InputUrl";
import UrlList from "components/UrlList";

export default function Home({ urls }) {
  return (
    <div>
      <InputUrl />
      <UrlList urls={urls} />
    </div>
  );
}
