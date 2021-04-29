exports.handler = async (event) => {
  const { headers = [] } = event
  const type = headers['twitch-eventsub-message-type'] || 'no type'
  const eventType = headers['twitch-eventsub-subscription-type']
  console.log(event)

  if (type !== 'notification' || eventType !== 'channel.follow') {
    console.log('entro en el if')
    return { statusCode: 200, body: '' }
  }

  console.log({ headers: event.headers, body: event.body })

  // at this point you know you have a valid subscription
  // want to do some magic? put it here!
  const { event: twitchEvent } = JSON.parse(event.body)
  const user = twitchEvent.user_name

  console.log(`${user} acaba de unirse!`)

  return {
    statusCode: 200,
    body: '',
  }
}
