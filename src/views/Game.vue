<template>
  <div>NAVBAR FOR EXAMPLE</div>
  <RouterView @startGame="startGame" @guessed="guessed" v-model="data" />
  <div id="userPanel">
    <div class="square"></div>
    <img class="pfp" src="https://picsum.photos/200" alt="profile picture" />

    <div class="arrow-up"></div>
    <div class="arrow-down"></div>
    <div class="arrow-left"></div>
    <div class="arrow-right"></div>

    <div class="userInfo">
      <div class="userName">
        <span>Dzibak</span>
      </div>
      <div class="userScore">
        <span>{{ data.score }} points</span>
      </div>
      <div class="userTime">
        <span>{{ formatTime }}</span>
      </div>
    </div>
  </div>

  <div>FOOTER FOR EXAMPLE</div>
  <div class="debug">
    <RouterLink to="/debug">debug</RouterLink>
    <div>
      <pre v-for="(value, key) in data" :key="key">{{ key }} : {{ value }}</pre>
    </div>
  </div>
</template>

<script>
import photoData from '@/assets/js/photoData';

export default {
  name: 'Game',
  components: {},
  data() {
    return {
      data: {
        score: 0,
        totalTime: 0,

        point: {
          photoID: -1,
          photoName: 'none',
          photoLocation: {
            x: -1,
            y: -1,
          },
        },

        guessStartTime: -1,
        guessTime: -1,
        points: -1,

        guessedPoint: {
          x: -1,
          y: -1,
          distance: -1,
        },

        photoData: photoData,
      },
    };
  },
  methods: {
    startGame() {
      this.data.point = this.randomPoint();
      this.data.guessStartTime = Date.now();
      this.$router.push('/guess');
    },
    randomPoint() {
      if (!this.photoData || this.photoData.length === 0) {
        this.photoData = photoData;
      }
      return this.photoData[Math.floor(Math.random() * this.photoData.length)];
    },
    guessed(x, y) {
      console.log('Game: guessed', x, y);

      this.time += Date.now() - this.guessStartTime;
      this.guessStartTime = -1;

      this.data.guessedPoint = {
        x: x,
        y: y,
        distance: Math.sqrt(
          Math.pow(this.data.point.photoLocation.x - x, 2) +
            Math.pow(this.data.point.photoLocation.y - y, 2),
        ),
      };

      if (this.data.guessedPoint.distance < 10) {
        this.data.points = 5000;
      } else if (this.data.guessedPoint.distance < 100) {
        this.data.points = 4500;
      } else if (this.data.guessedPoint.distance < 200) {
        this.data.points = 3000;
      } else if (this.data.guessedPoint.distance < 300) {
        this.data.points = 2000;
      } else if (this.data.guessedPoint.distance < 400) {
        this.data.points = 1000;
      } else if (this.data.guessedPoint.distance < 500) {
        this.data.points = 500;
      } else if (this.data.guessedPoint.distance < 700) {
        this.data.points = 100;
      } else if (this.data.guessedPoint.distance < 1000) {
        this.data.points = 50;
      } else if (this.data.guessedPoint.distance < 1400) {
        this.data.points = 10;
      } else {
        this.data.points = 3;
      }
      this.data.score += this.data.points;

      this.$router.push('/result');
    },
  },
  computed: {
    formatTime() {
      const time = this.data.totalTime;
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      return `${minutes}:${seconds}:${time % 1000}`;
    },
  },
};
</script>

<style scoped>
.debug {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: white;
  padding: 10px;
}

#userPanel {
  position: fixed;
  bottom: 1rem;
  left: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding-left: 3rem;
}
#userPanel img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  position: absolute;
  left: 0;
}
#userPanel .square {
  position: absolute;
  left: 0;

  border-top: 2rem solid #bbb;;
  border-left: 2rem solid #999;
  border-right: 2rem solid #aaa;
  border-bottom: 2rem solid #666;

  background-color: #aaa;

  transform: rotate(45deg);
}
#userPanel .arrow-up {
  position: absolute;
  top: -1.5rem;
  left: 1rem;

  width: 0;
  height: 0;

  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid red;

  transform: scaleX(0.25);
}
#userPanel .arrow-down {
  position: absolute;
  bottom: -1.5rem;
  left: 1rem;

  width: 0;
  height: 0;

  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-top: 1rem solid #ccc;

  transform: scaleX(0.25);
}
#userPanel .arrow-left {
  position: absolute;
  left: -0.75rem;

  width: 0;
  height: 0;

  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-right: 1rem solid #ccc;

  transform: scaleY(0.25);
}
#userPanel .arrow-right {
  position: absolute;
  left: 3.75rem;

  width: 0;
  height: 0;

  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 1rem solid #ccc;

  transform: scaleY(0.25);
}


#userPanel .userInfo {
  padding-left: 2rem;

  display: grid;
  grid-template-areas: 'uN uN' 'uS uT';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
#userPanel .userName {
  grid-area: uN;
  background-color: #832;
}
#userPanel .userScore {
  grid-area: uS;
}
#userPanel .userTime {
  grid-area: uT;
}
</style>
