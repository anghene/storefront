<template>
  <div class="success-container">
    <h1>Thank you for your purchase!</h1>
    <p>We hope you enjoy your new item.</p>
    <div v-if="gifUrl" class="gif-container">
      <img :src="gifUrl" alt="Success Gif" />
    </div>
    <button class="home-button" @click="goHome">Back to Home</button>
  </div>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {
      gifUrl: "", // Holds the URL for the Giphy image
    };
  },
  mounted() {
    this.fetchRandomGif(); // Fetch a random gif when the component is mounted
  },
  methods: {
    // Fetch a random optimistic gif from Giphy API using the environment variable
    fetchRandomGif() {
      const apiKey = process.env.VUE_APP_GIPHY_API_KEY;
      const searchQuery = "optimistic";
      const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchQuery}&rating=g`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.gifUrl = data.data.images.original.url;
        })
        .catch(error => {
          console.error("Error fetching gif:", error);
          this.gifUrl = ""; // Fallback to an empty state
        });
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.success-container {
  text-align: center;
  margin-top: 50px;
}
.gif-container img {
  width: 400px;
  height: auto;
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.home-button {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #27ae60;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.home-button:hover {
  background-color: #1e8449;
}
</style>
