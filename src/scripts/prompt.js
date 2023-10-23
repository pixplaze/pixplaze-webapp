function concatWithCapacity(firstArray, secondArray, capacity) {
  let newLength = firstArray.length + secondArray.length;
  let newArray;
  // console.log(firstArray);
  // console.log(secondArray);
  // console.log(`${firstArray.length} + ${secondArray.length} = ${firstArray.length + secondArray.length}, of ${capacity}`);
  if (newLength > capacity) {
    newArray = firstArray.slice(newLength - capacity).concat(secondArray)
  } else {
    newArray = firstArray.concat(secondArray);
  }

  return newArray;
}

/**
 * If the length of messages array with the pushed string array together is greater
 * than the messageCapacity array will be sliced from start to fill in length,
 * old messages will be dropped.
 *
 * If the length of history array with the entered string value together is greater
 * than the historyCapacity array will be sliced from start to fill in length,
 * old history will be dropped.
 *
 * @param rows
 * @param options
 * @returns {{clear: (function(): *[]), messages: (function(): *[]), renew: *, enter: *, history: (function(): {decrement: function(): number, reset: function(): number, increment: function(): number, list: function(): *, peek: function(): *}), push: *}}
 */
const createPrompt = (rows, options) => {
  const config = {
    historyCapacity: options.historyCapacity || 20,
    messagesCapacity: options.messagesCapacity || 100,
  }

  let messages = [...rows];
  const history = {
    index: 0,
    lines: []
  };

  return {
    messages: () => [...messages],
    clear: () => messages = [],
    push: lines => {
      if (!Array.isArray(lines)) throw new Error('Only string array value can be pushed in display messages!')
      messages = concatWithCapacity(messages, lines, config.messagesCapacity);
    },
    renew: rows => {
      if (!Array.isArray(rows)) throw new Error('Only string array value can be pushed in display messages!');
      messages = concatWithCapacity(rows, [], config.messagesCapacity);
    },
    enter: row => {
      if (!(typeof row === 'string')) throw new Error('String value only can be entered in the prompt!');
      if (!row.trim()) return;
      history.lines =  concatWithCapacity(history.lines, [row], config.historyCapacity);
      history.index = history.lines.length - 1;
    },
    history: () => ({
      reset: () => history.index = history.lines.length - 1,
      increment: () => history.index < history.lines.length ? history.index++ : history.index,
      decrement: () => history.index > 0 ? history.index-- : history.index,
      list: () => [...history.lines],
      peek: () => history.lines[history.index] // TODO: RETURN LAST ON history.index === history.lines.length - 1
    })
  }
}

export {createPrompt};
