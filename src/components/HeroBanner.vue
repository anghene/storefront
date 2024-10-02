<template>
  <div class="hero-banner">
    <div class="carousel">
      <img :src="currentImage" alt="Promotional Image" class="carousel-image" />
    </div>
    <div class="promo-text">
      <h1>Welcome to Our Colorful Store!</h1>
      <p>Check out our latest deals and vibrant collections.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  data() {
    return {
      currentImage: 'https://picsum.photos/id/1025/600/300',
    };
  },
};
</script>

<style scoped>
.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8e44ad;
  padding: 50px;
  color: white;
  border-radius: 10px;
  margin: 20px;
}
.carousel-image {
  width: 400px;
  height: auto;
  border-radius: 10px;
}
.promo-text {
  margin-left: 30px;
}
.promo-text h1 {
  font-size: 36px;
}
.promo-text p {
  font-size: 18px;
}
</style>