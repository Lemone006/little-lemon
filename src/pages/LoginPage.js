function LoginPage() {
  return (
    <section className="login-page">

      <div className="container">

        <h1>Login</h1>

        <form className="login-form">

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            required
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            type="password"
            id="password"
            required
          />

          <button
            className="primary-btn"
            type="submit"
          >
            Login
          </button>

        </form>

      </div>

    </section>
  );
}

export default LoginPage;