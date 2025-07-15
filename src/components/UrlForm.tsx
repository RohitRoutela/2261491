import React, { useState } from "react";
import { saveUrl } from "../utils/api";
import { ShortUrl } from "../types";
import { Button, TextField, Stack } from "@mui/material";
import { v4 as uuid } from "uuid";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [expiry, setExpiry] = useState("30");
  const [shortCode, setShortCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^https?:\/\/.+$/.test(url)) {
      alert("Invalid URL. Must start with http:// or https://");
      return;
    }

    const newUrl: ShortUrl = {
      id: uuid(),
      originalUrl: url,
      shortUrl: shortCode || Math.random().toString(36).substring(2, 8),
      expiry,
      clicks: 0,
      createdAt: new Date().toISOString(),
    };

    saveUrl(newUrl);
    alert(`Shortened URL: /${newUrl.shortUrl}`);
    setUrl("");
    setExpiry("30");
    setShortCode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField label="Original URL" value={url} onChange={(e) => setUrl(e.target.value)} fullWidth />
        <TextField label="Expiry (Minutes)" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
        <TextField label="Optional Short Code" value={shortCode} onChange={(e) => setShortCode(e.target.value)} />
        <Button type="submit" variant="contained">Shorten URL</Button>
      </Stack>
    </form>
  );
};

export default UrlForm;
