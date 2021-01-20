import React, { useState, useEffect } from "react";
import InputUrl from "components/InputUrl";
import { setAuthHeaders } from "apis/axios.js";
import UrlList from "components/UrlList";

export default function App({urls}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthHeaders(setLoading);
  }, [urls]);

  return (
    <div>
      <InputUrl />
      <UrlList urls={urls} />
    </div>
  );
}
