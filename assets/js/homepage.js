const featuredHomeList = document.querySelector('#featuredHomeList')

function initHomePage(){
    console.log('Get ready for magic!', featured)

    featured.map(feat => {

        //
        let featRating = document.createElement('figcaption')
            featRating.classList.add('rating')
            featRating.innerHTML = `<div class="rating-score-${Math.trunc(feat.rating)}">
                                        <span><img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(feat.rating)}" title="${Math.trunc(feat.rating)}"></span>
                                        <span>${feat.rating}</span>
                                    </div>`

        // 
        let featImage = document.createElement('img')
            featImage.classList.add('cover')
            featImage.setAttribute('src', 'assets/images/template/featured-blank.webp')
            featImage.setAttribute('alt', feat.name)
            featImage.setAttribute('title', feat.name)
            featImage.setAttribute('style', `background-image: url(${feat.food_pic})`)

        // 
        let featFigure = document.createElement('figure')
            featFigure.appendChild(featImage)
            featFigure.appendChild(featRating)

        let featArticle = document.createElement('article')
            featArticle.appendChild(featFigure)

        let featName = document.createElement('h3')
            featName.textContent = feat.name
            featArticle.appendChild(featName)

        let featItm = document.createElement('li')
            featItm.classList.add('featured')
            featItm.appendChild(featArticle)

        featuredHomeList.appendChild(featItm)

    })

}