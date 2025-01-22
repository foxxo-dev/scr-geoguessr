<template>
  <h1>Debug</h1>
  <div>
    <h1>Available Routes</h1>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{
          route.name || route.path
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Debug',
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  setup() {
        const router = useRouter();
        const routes = router.getRoutes();

        return { routes };
    },
};
</script>

<style>

</style>
