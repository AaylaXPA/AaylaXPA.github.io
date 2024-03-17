$(() => {
    const selectNextBackground = () => {
        const elements = $('.background')
        const count = elements.length
        const nextIndex = Math.floor(Math.random() * count)
        const nextElement = $(elements[nextIndex])

        if (nextElement.hasClass('active')) {
            return selectNextBackground()
        }

        $('.background.active').removeClass('active')
        nextElement.addClass('active')
        return nextIndex
    }

    const randomLightning = () => {
        setTimeout(() => {
            $('.background').css('opacity', '.4')
            setTimeout(() => {
                $('.background').css('opacity', '.7')
                randomLightning()
            }, 200)
        }, Math.floor(Math.random() * 10000) + 50)
    }

    $('.background').each((index, element) => {
        const elem = $(element)
        const background = elem.attr('data-bg')
        elem.css('opacity', '.7')

        elem.css('background-image', `url('img/${background}')`)
    })

    selectNextBackground()

    setInterval(() => {
        selectNextBackground()
    }, 125)

    randomLightning()
})
