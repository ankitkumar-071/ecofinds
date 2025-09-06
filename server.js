const http = require("http");
const fs = require("fs");
const path = require("path");

const DB_FILE = "users.json";
let users = [];
if (fs.existsSync(DB_FILE)) {
  users = JSON.parse(fs.readFileSync(DB_FILE));
}

function send(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(JSON.stringify(data));
}

function hashPassword(password) {
  return Buffer.from(password).toString("base64");
}

const server = http.createServer((req, res) => {
  // ✅ Serve signup.html at /
  if (req.method === "GET" && (req.url === "/" || req.url === "/signup.html")) {
    const filePath = path.join(__dirname, "signup.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

  // ✅ Serve login.html at /login.html
  else if (req.method === "GET" && req.url === "/login.html") {
    const filePath = path.join(__dirname, "login.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

  // ✅ Serve dashboard.html at /dashboard.html
  else if (req.method === "GET" && req.url === "/dashboard.html") {
    const filePath = path.join(__dirname, "dashboard.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

  // ✅ Signup API - Fixed to handle 'fullname' field
  else if (req.method === "POST" && req.url === "/signup") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const { fullname, email, password } = JSON.parse(body);

      if (users.find((u) => u.email === email)) {
        return send(res, 400, { message: "❌ User already exists" });
      }

      const user = { displayName: fullname, email, password: hashPassword(password) };
      users.push(user);
      fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));

      send(res, 201, { message: "✅ User registered successfully! You can now login." });
    });
  }

  // ✅ Login API
  else if (req.method === "POST" && req.url === "/login") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const { email, password } = JSON.parse(body);

      const user = users.find((u) => u.email === email);
      if (!user) return send(res, 400, { message: "❌ User not found" });

      if (user.password !== hashPassword(password)) {
        return send(res, 400, { message: "❌ Invalid password" });
      }

      send(res, 200, {
        message: "✅ Login successful",
        user: { displayName: user.displayName, email: user.email },
      });
    });
  }

  // ❌ Unknown route
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

server.listen(5000, () =>
  console.log("🚀 Server running at http://localhost:5000/")
);
