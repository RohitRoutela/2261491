import React from "react";
import { getUrls } from "../utils/api";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const Statistics = () => {
  const urls = getUrls();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Short URL</TableCell>
          <TableCell>Original URL</TableCell>
          <TableCell>Clicks</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Expiry (Minutes)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {urls.map((url) => (
          <TableRow key={url.id}>
            <TableCell>/{url.shortUrl}</TableCell>
            <TableCell>{url.originalUrl}</TableCell>
            <TableCell>{url.clicks}</TableCell>
            <TableCell>{new Date(url.createdAt).toLocaleString()}</TableCell>
            <TableCell>{url.expiry}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Statistics;
