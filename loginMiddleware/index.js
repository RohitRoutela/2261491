const { setToken, Log } = require("./logMiddleware");

// Set your valid token
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyb2hpdHJvdXRlbGEyMjAxMTI0MjdAZ2VodS5hYy5pbiIsImV4cCI6MTc1MjU2MjA3NCwiaWF0IjoxNzUyNTYxMTc0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2QwMWE0OWYtMGY4ZS00N2QwLWI1M2YtNGVhYTU4MDMwM2MyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicm9oaXQgcm91dGVsYSIsInN1YiI6IjRiNDRiYWM5LTcwMDAtNDExNi1hOTU5LTg2MWM5OWE5YzVkZSJ9LCJlbWFpbCI6InJvaGl0cm91dGVsYTIyMDExMjQyN0BnZWh1LmFjLmluIiwibmFtZSI6InJvaGl0IHJvdXRlbGEiLCJyb2xsTm8iOiIyMjYxNDkxIiwiYWNjZXNzQ29kZSI6IlFBaERVciIsImNsaWVudElEIjoiNGI0NGJhYzktNzAwMC00MTE2LWE5NTktODYxYzk5YTljNWRlIiwiY2xpZW50U2VjcmV0IjoiYVpDTndBY1pCZ3FIcmpiWSJ9.T42EZiNhcVTnQw_4wZzoeGgIUzo_xkMVg3n6LRvFxw8";
setToken(token);

// Now use valid frontend package names only
Log("frontend", "error", "axios", "Failed to fetch data from API");
Log("frontend", "info", "react", "Component mounted successfully");
Log("frontend", "warn", "redux", "Missing reducer for action type XYZ");