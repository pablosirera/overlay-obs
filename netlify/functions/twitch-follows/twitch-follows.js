// import { inject } from 'vue'

exports.handler = (event) => {
  const { headers = [] } = event
  // const type = headers['twitch-eventsub-message-type'] || 'no type'
  const eventType = headers['twitch-eventsub-subscription-type']
  // const emitter = inject('emitter')

  console.log(eventType)

  if (eventType === 'channel.follow') {
    console.log('entro en el if')
    // emitter.emit('new-follow')
    return { statusCode: 200, body: 'asd' }
  }

  return {
    statusCode: 200,
    body: 'asd2',
  }
}
