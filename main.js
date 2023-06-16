const imageList = ['images/desktop-hero-1.jpg','images/desktop-hero-2.jpg','images/desktop-hero-3.jpg'];
const textList = ['We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.','At our company, we strive to deliver an unparalleled level of excellence, luxury, and sophistication to property owners throughout the nation. Our team of skilled professionals seamlessly blends aesthetics and practicality to transform your vision into a breathtaking reality.'];
const textIsActive = true

function changeImage()
    {
        setTimeout(function() 
        {
            imageList.splice(imageList.length, 0, imageList[0])
            imageList.splice(0, 1)
            document.getElementById("pic1").style.backgroundImage = url = `url(${imageList[0]})`
            textList.splice(textList.length, 0, textList[0])
            textList.splice(0, 1)
            document.getElementById("rightText").innerHTML = textList[0]
            changeImage()
        }, 5000)
    }

function onButtonClickLeft() 
    {  
        imageList.splice(imageList.length, 0, imageList[0])
        imageList.splice(0, 1)
        document.getElementById("pic1").style.backgroundImage = url = `url(${imageList[0]})`
    }

function onButtonClickRight() 
    {
        imageList.splice(0, 0, imageList[imageList.length - 1])
        imageList.splice(imageList.length - 1, 1)
        document.getElementById("pic1").style.backgroundImage = url = `url(${imageList[0]})`
    }