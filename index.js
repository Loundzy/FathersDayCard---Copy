$(function () {

    //want to grab all the image elements
    let imagesEl = [...document.querySelectorAll('.uk-card img')]
    var number = 0
    var firstImg

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

    //disable further clicks until images are rehidden if incorrect?? flag that is set before any display or logic runs to match
    if(number == 0) {
        //create a click event for the images
        $('.hiding-element').click(function(){
            $(this).addClass('hide-el')
            //check if image is the same based on string in the src
            

            countClicks(number, this, firstImg)
        })
    }
    
    //if they match return and wait for click event

})

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function countClicks(number, elem, firstImg) {
    //first click
    if(number == 0) {
        //temp store the src of first clicked item
        firstImg = elem.getAttribute('src')

        //set flag that waits for second image click
        return number++
    } else {
        var secondEl = elem.getAttribute('src') 
        if(secondEl != firstImg) {
            //set timeout that hides the tiles again if they are incorrect
            setTimeout(function(){ 
                //hide both image if they are not the same
                $(`img[src="${secondEl}"]`).each(function(image) { 
                    this.removeClass('hide-el')
                })
            }, 2500)
        }
        return number = 0
    }
}