<template>
  <div>
    <div class="container">
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
      <div class="confetti"></div>
    </div>
    <h1>Soccer Quiz</h1>
    <h3>Winner</h3>
    <div class="winnerbox">
      <p class="winner">{{winner}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winner: localStorage.getItem("username")
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 0%;
  font-weight: bolder;
  color: whitesmoke;
  text-shadow: 5px 5px 3px black;
  font-family: "Lobster", cursive;
  font-size: 700%;
}

h3 {
  text-align: center;
  margin-bottom: 0%;
  font-weight: bolder;
  color: yellow;
  text-shadow: 5px 5px 3px black;
  font-family: "Lobster", cursive;
  font-size: 400%;
}

.winnerbox {
  width: 350px;
  height: 50px;
  position: absolute;
  top: 43%;
  left: 50%;
  background-color: azure;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  border-radius: 20px;
  box-shadow: 5 5px 3px yellow;
  word-wrap: break-word;
  cursor: pointer;
}

p.winner {
  text-align: center;
  font-size: xx-large;
  font-weight: bolder;
  font-family: "Lobster", cursive;
  color: blue;
}

container {
  width: 100%;
  height: 100%;
}

.confetti {
  width: 15px;
  height: 15px;
  background-color: #f2d74e;
  position: absolute;
  left: 50%;
  animation: confetti 5s ease-in-out -2s infinite;
  transform-origin: left top;
}

.confetti:nth-child(1) {
  background-color: #f2d74e;
  left: 10%;
  animation-delay: 0;
}

.confetti:nth-child(2) {
  background-color: #95c3de;
  left: 20%;
  animation-delay: -5s;
}

.confetti:nth-child(3) {
  background-color: #ff9a91;
  left: 30%;
  animation-delay: -3s;
}

.confetti:nth-child(4) {
  background-color: #f2d74e;
  left: 40%;
  animation-delay: -2.5s;
}

.confetti:nth-child(5) {
  background-color: #95c3de;
  left: 50%;
  animation-delay: -4s;
}

.confetti:nth-child(6) {
  background-color: #ff9a91;
  left: 60%;
  animation-delay: -6s;
}

.confetti:nth-child(7) {
  background-color: #f2d74e;
  left: 70%;
  animation-delay: -1.5s;
}

.confetti:nth-child(8) {
  background-color: #95c3de;
  left: 80%;
  animation-delay: -2s;
}

.confetti:nth-child(9) {
  background-color: #ff9a91;
  left: 90%;
  animation-delay: -3.5s;
}

.confetti:nth-child(10) {
  background-color: #f2d74e;
  left: 100%;
  animation-delay: -2.5s;
}

@keyframes confetti {
  0% {
    transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
  }
  25% {
    transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
  }
  50% {
    transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
  }
  75% {
    transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
  }
  100% {
    transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
  }
}
</style>