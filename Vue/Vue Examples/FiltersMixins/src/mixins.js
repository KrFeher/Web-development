export const exampleMixins = {
    computed: {
        reverseFirstComputed() {
            return this.exampleText.split("").reverse().join("");
        },
        showNumberWithSecond() {
            return this.exampleText2 + ' (' + this.exampleText2.length + ')';
        }
    }
}