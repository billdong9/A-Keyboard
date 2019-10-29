module.exports = {
    props: {
        fixedBottomCenter: Boolean,
        inputOn: Object,
        onclick: Object
    },
    template: `
        <div :class="{'akeyboard-numberKeyboard': true, 'akeyboard-keyboard-fixedBottomCenter': fixedBottomCenter}">
            <div v-for="row of keys" class="akeyboard-keyboard-innerKeys">
                <div v-for="key in row" :class="['akeyboard-keyboard-keys', 'akeyboard-numberKeyboard-keys', 'akeyboard-keyboard-keys-' + key]" @click="handleClick(key)">
                    {{ key }}
                </div>
            </div>
        </div>
    `,
    data() {
        const keys = [];

        let thisKey = [];

        for (let i = 1; i < 10; i++) {
            thisKey.push(i);
            if (i % 3 === 0) {
                keys.push(thisKey);
                thisKey = [];
            }
        }

        keys.push([
            0,
            'Delete'
        ], [
            'Enter'
        ])

        return {
            keys
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

            if (this.inputOn) {
                switch (key) {
                    case 'Delete':
                        inputEl[this.inputOn.inputType] = inputEl[this.inputOn.inputType].substr(0, inputEl[this.inputOn.inputType].length - 1);
                        return;

                    case 'Enter':
                        inputEl[this.inputOn.inputType] += '\n';
                        return;
                }

                inputEl[this.inputOn.inputType] += key;
            }
        }
    }
}
