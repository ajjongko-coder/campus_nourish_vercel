<template>
  <div class="home-page">
    <h1>Welcome to the Home Page</h1>
    <p v-if="user">Hello, {{ user.name }}!</p>
    <p v-else>Please log in to access the content.</p>

    <div v-if="user">
      <button @click="logout">Logout</button>
    </div>

    <div v-else>
      <p>
        <router-link to="/auth">Login or Register</router-link> to get started.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      user: null, // You would get the user data from an auth service or store
    };
  },
  mounted() {
    // Simulate checking for user authentication
    // For real-world apps, you might get this from a Vuex store or authentication API
    this.checkUserAuth();
  },
  methods: {
    checkUserAuth() {
      // Simulate an authenticated user, replace with actual logic
      this.user = { name: "John Doe" }; // For now, hardcoded as logged in
    },
    logout() {
      // Handle logout logic (e.g., remove token, clear session)
      console.log("Logging out...");
      this.user = null; // Reset user data
      this.$router.push("/"); // Redirect to home or login page
    },
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

button {
  background-color: #ff5c5c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff3333;
}

p {
  margin: 20px 0;
}

router-link {
  color: #007bff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
