<script>
/* eslint-disable */
import {sendCommand, fetchChatLines} from '@/api/minecraft_server'

export default {
    name: 'rcon-console',
    components: {},
    props: {
        username: {
            type: String,
            default: 'admin'
        },
        domain: {
            type: String,
            default: 'pixplaze'
        }
    },
    methods: {
        onClick() {
            if (this.focused) {
                return
            } else {
                this.consoleInputElement.focus()
            }

        },
        onEnter(e) {
            if (e.code == 'Enter') {
                this.submitConsoleInput()
                this.currentHistoryIndex = this.messageHistory.length
                return
            }
            if (e.code == 'ArrowUp') {
                this.decrementHistoryIndex()
                this.consoleInputText = this.messageHistory[this.currentHistoryIndex]
                console.log(e.code)
                return
            }
            if (e.code == 'ArrowDown') {
                this.incrementHistoryIndex()
                this.consoleInputText = this.messageHistory[this.currentHistoryIndex]
                console.log(e.code)
                return
            }
        },
        incrementHistoryIndex() {
            if (this.currentHistoryIndex < this.messageHistory.length)
                this.currentHistoryIndex++
        },
        decrementHistoryIndex() {
            if (this.currentHistoryIndex > 0)
                this.currentHistoryIndex--
        },
        async submitConsoleInput() {
            switch (this.consoleInputText) {
                case 'clear':
                case 'cls':
                case 'cln':
                    this.clearConsole();
                    break;
                case '-close':
                    this.ws.close();
                    break;
                case '-open':
                    this.ws.connect();
                    break;
            }

            this.pushConsoleRow(this.consoleInputText);
            this.ws.send(this.consoleInputText);
            this.clearConsoleRow();
            return // TODO: REMOVE
            console.log('sending command: ', this.consoleInputText)
            await sendCommand(this.consoleInputText)
            this.displayMessages = await fetchChatLines()
            
        },
        pushConsoleRow(str) {
            if (str && str.trim().length) {
                this.displayMessages.push(str)
                this.messageHistory.push(str)
            }
        },
        clearConsoleRow() {
            this.consoleInputText = '';
        },
        scrollDown() {
            this.rconConsoleElement.scrollTop = this.rconConsoleElement.scrollHeight
        },
        clearConsole() {
            // this.messages = []
            this.displayMessages = []
        }
    },
    data: () => ({
        messageHistory: [],
        displayMessages: [],
        focused: false,
        consoleInputText: '',
        rconConsoleElement: null,
        consoleInputElement: null,
        currentHistoryIndex: -1,
        ws: new WebSocket("ws://localhost:25566/chat")
    }),
    setup() {},
    updated() {
        // Возможно не самый оптимизированый вариант, скроллит вниз при каждом вводе буквы
        // Можно заменить на проверку обновления списка сообщений
        this.scrollDown()
    },
    mounted() {
        this.rconConsoleElement = this.$refs.rconConsoleElement
        this.consoleInputElement = this.$refs.consoleInputElement

        this.consoleInputElement.addEventListener('keyup', this.onEnter)

        this.scrollDown()
        this.ws.onmessage = message => {
            this.displayMessages.push(message.data);
            console.log(message)
        }
        this.ws.onopen = () => this.displayMessages.push("CONNECTED");
        this.ws.onclose = () => this.displayMessages.push("DISCONNECTED");
        
    },
    unmounted() {
        this.consoleInputElement.removeEventListener('keyup', this.onEnter)
    }
}
</script>

<template>
<div class="rcon-console" ref="rconConsoleElement" @click="onClick">
    <div class="console-canvas">
        <div class="console-row"
            v-for="message, i in displayMessages"
            :key="i">
            <pre>{{username + '@' + domain + ' $ '}}{{message}}</pre>
        </div>
        <div class="console-input"
            :class="{'focused': focused}">
            <label for="rcon-console-input" class="input-predicat">
                <pre>{{username + '@' + domain + ' $ '}}</pre>
            </label>
            <input class="input-line"
                id="rcon-console-input" 
                ref="consoleInputElement" 
                autofocus
                type="text"
                autocomplete="off"
                v-model="consoleInputText"
                @focus="focused = true"
                @blur="focused = false"
            />
        </div>
    </div>
</div>
</template>

<style scoped>

    .rcon-console {
        overflow-y: scroll;
        box-sizing: border-box;
        height: 500px;
    }

    .console-canvas {
        /* width: 600px; */
        min-height: 100%;
        box-sizing: border-box;
        overflow: hidden;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;

        color: var(--color-main-foreground);
        background-color: var(--color-dark);
    }

    .console-row {
        box-sizing: border-box;
        overflow: hidden;
        padding: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    * {
        font-family: 'Minecraft';
        font-size: 16px;
    }

    pre {
        margin: 0;
        padding: 0;
    }

    .console-input {
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr;
        transition: background-color .2s ease;
    }

    .console-input.focused {
        background-color: var(--color-semi-dark);
    }

    .input-line {
        box-sizing: border-box;
        /* width: 100%; */

        padding: 0;

        color: var(--color-main-foreground);
        border: none;
        outline: none;
        background-color: transparent;
    }

    .input-predicat {
        display: block;
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        /* margin-right: 10px; */

        color: yellow;
    }
</style>
