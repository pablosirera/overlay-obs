<template>
  <router-view />
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const subscriptionData = {
        type: 'channel.follow',
        version: '1',
        condition: {
          broadcaster_user_id: '421932815',
        },
        transport: {
          method: 'webhook',
          callback:
            'https://overlay-obs.netlify.app/.netlify/functions/twitch-follows',
          secret: process.env.VUE_APP_SECRET_TWITCH,
        },
      }
      const headers = {
        headers: {
          'Client-ID': process.env.VUE_APP_CLIENT_ID,
          Authorization: 'Bearer o5b09ctamgfl66kihzaafr9zbnw3cp',
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        'https://api.twitch.tv/helix/eventsub/subscriptions',
        subscriptionData,
        headers
      )
      console.log(data)
      const response = await axios.get(data.data[0].transport.callback)
      console.log(response)
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-yellow-brand);
  background-color: var(--color-primary);
  padding: 10px;
  height: 1080px;
}
</style>
