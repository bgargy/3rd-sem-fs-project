import React, { useState } from "react";
import PageSection from "./PageSection";
import GradientBtn from "./GradientBtn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleLoginClick = async () => {
    // Reset previous states
    setIsLoginSuccessful(false);
    setLoginError("");

    // Validate username and password
    if (!username || !password) {
      setLoginError("Please enter both username and password.");
      return;
    }

    // Set loading state
    setIsLoggingIn(true);

    // Simulate API call (replace with actual authentication logic)
    try {
      // Replace this with actual authentication logic
      // const response = await authService.login(username, password);

      // Simulating a successful login after a short delay
      setTimeout(() => {
        setIsLoginSuccessful(true);
        setIsLoggingIn(false);
      }, 1000);
    } catch (error) {
      setLoginError("Invalid username or password. Please try again.");
      setIsLoggingIn(false);
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setIsLoggingIn(false);
    setLoginError("");
    setIsLoginSuccessful(false);
  };

  return (
    <PageSection name="login" title="Login" subtitle={``}>
      <div className="flex flex-col items-center justify-center mt-4">
        {!isLoginSuccessful ? (
          <>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <GradientBtn
              className="capitalize"
              title={isLoggingIn ? "Logging in..." : "Log in"}
              onClick={isLoggingIn ? null : handleLoginClick}
              disabled={isLoggingIn}
            />

            {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
          </>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-green-500 mt-2 mb-4">Login Successful!</p>
            <GradientBtn className="capitalize" title="Continue" onClick={resetForm} />
          </div>
        )}
      </div>
    </PageSection>
  );
};

export default Contact;
