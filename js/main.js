$(() => {
    const selectNextBackground = () => {
        const elements = $('.rain div')
        const count = elements.length
        const nextIndex = Math.floor(Math.random() * count)
        const nextElement = $(elements[nextIndex])

        if (nextElement.hasClass('active')) {
            return selectNextBackground()
        }

        $('.rain div.active').removeClass('active')
        nextElement.addClass('active')
        return nextIndex
    }

    const randomLightning = () => {
        setTimeout(() => {
            $('.rain').addClass('lightning')
            setTimeout(() => {
                $('.rain').removeClass('lightning')
                randomLightning()
            }, 200)
        }, Math.floor(Math.random() * 10000) + 50)
    }

    $('[data-bg]').each((index, element) => {
        const elem = $(element)
        const background = elem.attr('data-bg')

        elem.css('background-image', `url('img/${background}')`)
    })

    selectNextBackground()

    setInterval(() => {
        selectNextBackground()
    }, 125)

    randomLightning()
})
