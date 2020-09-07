var app = new Vue({
    el: '#app',
    data: {
        steps: [
            {
                number: 1,
                name: 'Размер',
                value: '2 • XS',
                type: 'size'
            },
            {
                number: 2,
                name: 'Основной цвет',
                value: '#ffffff|Beyaz',
                type: 'color'
            },
            {
                number: 3,
                name: 'Цвет воротника',
                value: '#ffffff|Beyaz',
                type: 'color'
            },
            {
                number: 4,
                name: 'Цвет манжета',
                value: '#ffffff|Beyaz',
                type: 'color'
            },
            {
                number: 5,
                name: 'Лого',
                value: 'classic_1',
                type: 'logo'
            },
            {
                number: 6,
                name: 'Цвет внутри воротника',
                value: '#ffffff|Beyaz',
                type: 'color'
            },
            {
                number: 7,
                name: 'Нашивка',
                type: 'text'
            }
        ],
        sizes: [
            '2 • XS',
            '3 • S',
            '4 • M',
            '5 • M/L',
            '6 • L',
            '7 • L/XL',
            '8 • XL',
            '9 • XXL'
        ],
        colors: [
            '#f8e3e1|Pembe',
            '#cfe5f3|Mavi',
            '#850b15|Bordo',
            '#feeead|Sarı',
            '#161a34|Lacivert',
            '#000000|Siyah',
            '#ffffff|Beyaz',
            '#c90420|Kırmızı',
            '#1f402f|Yeşil'
        ],
        logos: [
            'classic_1',
            'classic_2'
        ],
        step: 1
    },
    computed: {
        currentStep: function () {
            return this.steps[this.step - 1]
        },
        numberOfSteps: function () {
            return this.steps.length
        },
        stepName: function () {
            return this.currentStep.name
        },
        stepType: function () {
            return this.currentStep.type
        },
        stepValue: {
            get: function () {
                return this.currentStep.value
            },
            set: function (newValue) {
                this.currentStep.value = newValue
            }
        },
        stepSelect:  function () {
            if (this.stepType === 'color') {
                let colorCode = this.stepValue.split('|')
                let name = colorCode[1]

                return name
            }

            return this.stepValue
        },
        arrColors: function () {
            let arr = []

            this.colors.forEach(function (item, index) {
                let colorCode = item.split('|')
                let color = colorCode[0]
                let name = colorCode[1]
                let colorItem = {
                    value: item,
                    color: color,
                    name: name
                }

                arr.push(colorItem)
            })

            return arr
        },
        bodyColor: function () {
            let step = this.steps[1]
            let colorCode = step.value.split('|')
            let color = colorCode[0]

            return color
        },
        neckColor: function () {
            let step = this.steps[2]
            let colorCode = step.value.split('|')
            let color = colorCode[0]

            return color
        },
        cuffColor: function () {
            let step = this.steps[3]
            let colorCode = step.value.split('|')
            let color = colorCode[0]

            return color
        },
        logo: function () {
            let step = this.steps[4]
            let logo = step.value

            return logo
        }
    },
    methods: {
        prevStep: function () {
            if (this.step === 1) {
                return
            }

            this.step--
        },
        nextStep: function () {
            if (this.step === this.numberOfSteps) {
                return
            }

            this.step++
        }
    }
});