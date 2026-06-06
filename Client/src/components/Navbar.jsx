function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <h2>🚀 AI Resume Analyzer</h2>

      <button onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;