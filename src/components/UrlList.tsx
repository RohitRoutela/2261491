import React from "react";
import { getUrls } from "../utils/api";
import { List, ListItem, ListItemText } from "@mui/material";

const UrlList = () => {
  const urls = getUrls();
  return (
    <List>
      {urls.map((url) => (
        <ListItem key={url.id}>
          <ListItemText primary={`/${url.shortUrl} → ${url.originalUrl} (Expiry: ${url.expiry} mins)`} />
        </ListItem>
      ))}
    </List>
  );
};

export default UrlList;
