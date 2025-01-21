import { useState, useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (username.length > 0 || password.length > 0) {
      if (username === "Bhoomi16" && password === "12345678") {
        setMessage("Login Successful");
      } else {
        setMessage("Invalid Username or Password");
      }
    } else {
      setMessage("");
    }
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(message);
  };

  return (
    <div
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/1900857.jpg)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          padding: "40px",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "rgba(19, 64, 101, 0.5)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#111", marginBottom: "20px" }}>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: "12px",
                width: "100%",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "12px",
                width: "100%",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "12px",
              width: "100%",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </form>
        {message && (
          <p
            style={{
              marginTop: "15px",
              color: message === "Login Successful" ? "green" : "red",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
