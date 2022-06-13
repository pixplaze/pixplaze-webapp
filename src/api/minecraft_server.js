import { RconAPI } from '@/api/config'

async function sendCommand(command) {
  const url = '/rcon/command'
  await RconAPI.post(url, {
    params: {
      'access-token': 'YourToken',
      'line': command
    }
  })
  .then(res => console.log(res))
  .catch(err => console.error(err))
}

async function fetchChatLines(count) {
  const url = '/rcon/lines'
  let lines = []
  await RconAPI.get(url, {
    params : {
      'access-token': 'YourToken',
      'count': count
    }
  })
  .then(res => lines = res.data.response.lines)
  .catch(err => console.error(err))
  return lines
}

export {
  sendCommand,
  fetchChatLines
}
