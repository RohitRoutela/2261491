// logMiddleware.js

const https = require("https");

// ✅ Node 18+ includes fetch natively.
// If you're on Node <18, uncomment the next line:
// const fetch = require("node-fetch");

let token = ""; // 🔐 Set this using setToken()

/**
 * Sets the Bearer Token to be used in API requests
 */
function setToken(bearerToken) {
  token = bearerToken;
}

/**
 * Sends a log to the AffordMed logging server
 * @param {string} stack - "frontend" or "backend"
 * @param {string} level - "debug", "info", "warn", "error", or "fatal"
 * @param {string} packageName - "controller", "handler", "middleware", etc.
 * @param {string} message - Log message
 */
async function Log(stack, level, packageName, message) {
  if (!token) {
    console.error("❌ Error: Bearer token not set. Use setToken() before logging.");
    return;
  }

  const payload = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message: message
  };

  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Failed to send log:", result);
    } else {
      console.log("✅ Log sent:", result);
    }

  } catch (error) {
    console.error("❌ Log Error:", error.message);
  }
}

module.exports = { Log, setToken };