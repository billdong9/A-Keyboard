module.exports = {
    props: {
        fixedBottomCenter: Boolean,
        inputOn: Object,
        onclick: Object
    },
    template: `
        <div :class="{'akeyboard-keyboard': true, 'akeyboard-keyboard-fixedBottomCenter': fixedBottomCenter}">
            <div v-for="row of keys" class="akeyboard-keyboard-innerKeys">
                <div v-for="key in row" :class="['akeyboard-keyboard-keys', 'akeyboard-keyboard-keys-' + key]" @click="handleClick(key)">
                    <span v-if="key === 'Shift' && isShift">SHIFT</span>
                    <span v-else>{{ key }}</span>
                </div>
            </div>
        </div>
    `,
    data() {

        //init keys
        let numberKeys = [];
        for (let i = 1; i < 10; i++) {
            numberKeys.push(i.toString());
        }
        numberKeys.push('0');

        const keys = [
            ['`'].concat(numberKeys).concat([
                '-', '=', 'Delete'
            ]),
            ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
            ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
            ['Space']
        ]

        let thisKeys;
        const shiftKey = [],
            capsKey = [];
        for (let i = 0; i < keys.length; i++) {
            shiftKey.push([]);
            capsKey.push([]);
            thisKeys = keys[i];
            for (let a = 0; a < thisKeys.length; a++) {
                if (thisKeys[a].length === 1) {
                    capsKey[i].push(thisKeys[a].toUpperCase());
                    switch (thisKeys[a]) {
                        case '`':
                            shiftKey[i].push('~');
                            continue;
                        case '1':
                            shiftKey[i].push('!');
                            continue;
                        case '2':
                            shiftKey[i].push('@');
                            continue;
                        case '3':
                            shiftKey[i].push('#');
                            continue;
                        case '4':
                            shiftKey[i].push('$');
                            continue;
                        case '5':
                            shiftKey[i].push('%');
                            continue;
                        case '6':
                            shiftKey[i].push('^');
                            continue;
                        case '7':
                            shiftKey[i].push('&');
                            continue;
                        case '8':
                            shiftKey[i].push('*');
                            continue;
                        case '9':
                            shiftKey[i].push('(');
                            continue;
                        case '0':
                            shiftKey[i].push(')');
                            continue;
                        case '-':
                            shiftKey[i].push('_');
                            continue;
                        case '=':
                            shiftKey[i].push('+');
                            continue;
                        case '[':
                            shiftKey[i].push('{');
                            continue;
                        case ']':
                            shiftKey[i].push('}');
                            continue;
                        case '\\':
                            shiftKey[i].push('|');
                            continue;
                        case ';':
                            shiftKey[i].push(':');
                            continue;
                        case '\'':
                            shiftKey[i].push('"');
                            continue;
                        case ',':
                            shiftKey[i].push('<');
                            continue;
                        case '.':
                            shiftKey[i].push('>');
                            continue;
                        case '/':
                            shiftKey[i].push('?');
                            continue;
                    }
                    shiftKey[i].push(thisKeys[a].toUpperCase());
                    continue;
                }
                shiftKey[i].push(thisKeys[a]);
                capsKey[i].push(thisKeys[a]);
            }
        }

        return {
            keys,
            key: JSON.parse(JSON.stringify(keys)),
            shiftKey,
            capsKey,
            isShift: false,
            isCaps: false
        }

    },
    methods: {
        handleClick(key) {
            if (this.onclick && this.onclick['*']) {
                this.onclick['*'].bind(this)();
                return;
            }

            if (this.onclick && this.onclick[key]) {
                this.onclick[key].bind(this)();
                return;
            }

            const inputEl = document.querySelector(this.inputOn.inputEl);

            if (key === 'Shift') {
                if (this.isCaps) return;
                if (this.isShift) {
                    this.isShift = false;
                    this.keys = JSON.parse(JSON.stringify(this.key));
                    return;
                }
                this.isShift = true;
                this.keys = JSON.parse(JSON.stringify(this.shiftKey));
                return;
            } else if (key === 'Caps') {
                if (this.isShift) return;
                if (this.isCaps) {
                    this.isCaps = false;
                    this.keys = JSON.parse(JSON.stringify(this.key));
                    return;
                }
                this.isCaps = true;
                this.keys = JSON.parse(JSON.stringify(this.capsKey));
                return;
            }

            if (this.inputOn) {
                switch (key) {
                    case 'Delete':
                        inputEl[this.inputOn.inputType] = inputEl[this.inputOn.inputType].substr(0, inputEl[this.inputOn.inputType].length - 1);
                        return;

                    case 'Tab':
                        inputEl[this.inputOn.inputType] += '  ';
                        return;

                    case 'Enter':
                        inputEl[this.inputOn.inputType] += '\n';
                        return;

                    case 'Space':
                        inputEl[this.inputOn.inputType] += ' ';
                        return;
                }

                inputEl[this.inputOn.inputType] += key;
            }
        }
    }
}
