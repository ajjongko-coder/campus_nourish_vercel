<template>
  <div class="container">
    <header>
      <h1>Welcome to the Home Page</h1>
      <p>Please log in to access the content.</p>
    </header>

    <section class="auth-section">
      <p>Login or Register to get started.</p>
      <div class="auth-buttons">
        <router-link to="/login" class="btn">Login</router-link>
        <router-link to="/register" class="btn">Register</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and container */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: 100vh; /* Full viewport height */
  margin: 0; /* Removes default margin */
}

/* Main container */
.container {
  text-align: center;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  box-sizing: border-box; /* Ensure padding is included in width/height */
}

/* Header styling */
header h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #4caf50;
}

header p {
  font-size: 1.2em;
  color: #555;
}

/* Authentication section */
.auth-section p {
  font-size: 1.1em;
  margin: 20px 0;
}

/* Button styles */
.auth-buttons .btn {
  text-decoration: none;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 1.1em;
  transition: background-color 0.3s;
}

.auth-buttons .btn:hover {
  background-color: #45a049;
}
</style>
