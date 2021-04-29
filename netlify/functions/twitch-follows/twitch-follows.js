import { emitter } from '../../../src/utils/emitter'

exports.handler = async (event) => {
  const { headers = [] } = event
  // const type = headers['twitch-eventsub-message-type'] || 'no type'
  const eventType = headers['twitch-eventsub-subscription-type']

  if (eventType === 'channel.follow') {
    console.log('entro en el if')
    emitter.emit('new-follow')
    return { statusCode: 200, body: '' }
  }

  return {
    statusCode: 200,
    body: '',
  }
}
