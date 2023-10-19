export default create = (host, path, type) => {
  return ws = {
    connection: {},
    open: () => {
    //   const buffer = ws.connection;
      ws.connection = {...new WebSocket(`${type}://${host}/${path}`), ...ws.connection};
    //   ws.connection = {...ws.connection};
    },
    close: () => {
      try {
        ws.connection.close();
      } catch (err) {
        console.error(err);
        throw new Error('The connection was never initialized!');
      }
    },
    set onopen(func) {
        ws.connection.onopen = func;
    },
    get onopen() {
      return ws.connection.onopen;
    },
    set onclose(func) {
      ws.connection.onclose = func;
    },
    get onclose() {
      return ws.connection.onclose;
    },
    _throwIfNotInitialized: () => {
      if (ws.connection === null) {
        throw new Error('Connection is not initialized!');
      }
    }
  }
}