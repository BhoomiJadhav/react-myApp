import { Component } from "react";

class LoginPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${this.state.username}, Password: ${this.state.password}`);
  };

  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/1600x900/?nature,water)",
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
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Login Page</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChange}
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
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
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
          <p style={{ marginTop: "15px" }}>
            Entered Username: {this.state.username}
          </p>
          <p>Entered Password: {this.state.password}</p>
        </div>
      </div>
    );
  }
}

export default LoginPage1;
