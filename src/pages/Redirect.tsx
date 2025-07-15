import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUrlByShortCode } from "../utils/api";

const RedirectPage = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const found = getUrlByShortCode(shortcode!);
    if (found) {
      window.location.href = found.originalUrl;
    } else {
      alert("Invalid short code");
      navigate("/");
    }
  }, [shortcode, navigate]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
