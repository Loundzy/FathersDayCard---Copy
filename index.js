$(function () {

    //want to grab all the image elements
    let imagesEl = [...document.querySelectorAll('.uk-card img')]
    var obj = {
        number: 0,
        firstSrc: null,
        firstEl: null,
        secondSrc: null
    }
    //grab all the images
    let images = [
        "images/us1.jpg",
        "images/us2.jpg",
        "images/us3.jpg",
        "images/us4.jpg",
        "images/us5.jpg",
        "images/us6.jpg",
        "images/us7.jpg",
        "images/us8.jpg"
    ]   

    //duplicate images
    images = [...images, ...images]
    
    //randomize images
    shuffle(images)

    //loop through img elements and assign image src
    imagesEl.forEach((img, i) => {
        img.setAttribute('src', images[i])
    })

    //create a click event for the images
    $('.hiding-element').click(function(){
        //disable further clicks until images are rehidden if incorrect?? flag that is set before any display or logic runs to match
        if (obj.number != 2) {
            $(this).addClass('hide-el')
            countClicks(obj, $(this).parent().children('img'))
        }
    })
         
    //if they match return and wait for click event

})

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function countClicks(obj, elem) {
    //first click
    if(obj.number == 0) {
        //temp store the src of first clicked item
        obj.firstEl = elem.parent().children('div')
        obj.firstSrc = elem.attr('src')

        //set flag that waits for second image click
        obj.number++

        return obj
    } else {
        obj.secondSrc = elem.attr('src')
        //check if image is the same based on string in the src
        if(obj.secondSrc != obj.firstSrc) {
            obj.number = 2
            //set timeout that hides the tiles again if they are incorrect
            setTimeout(function(){ 
                //hide both image if they are not the same
                // $(`img[src="${obj.secondSrc}"]`).each(function(image) { 
                //     $(this).removeClass('hide-el')
                // })
                obj.firstEl.removeClass('hide-el')
                elem.parent().children('div').removeClass('hide-el')
                obj.number = 0
            }, 2500)
        } else {
            obj.number = 0
        }

        return obj
    }
}

//maybe use object?