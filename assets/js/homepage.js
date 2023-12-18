const featuredHomeList = document.querySelector('#featuredHomeList')

function initHomePage(){
    console.log('Get ready for magic!', featured)

    featured.map(feat => {

        /*
		if (datas.gems > 0) {
            let imageSrc = 'assets/img/wayback/wayback-gems.png'

			let bannerItems = document.createElement('div')
				bannerItems.classList.add('pullItems')
				bannerGemsShards.appendChild(bannerItems)

			let bannerGems = document.createElement('img')
            bannerGems.setAttribute('src', imageSrc)
				bannerItems.appendChild(bannerGems)

				bannerItems.innerHTML = bannerItems.innerHTML + datas.gems
		}

        
		if (datas.shards > 0 && banner.saints[0] != undefined) {
            let imageSrc = 'assets/img/saints/' + banner.saints[0].shard
            
			let bannerItems = document.createElement('div')
				bannerItems.classList.add('pullItems')
				bannerGemsShards.appendChild(bannerItems)

			let bannerShards = document.createElement('img')
				bannerShards.setAttribute('src', imageSrc)
				bannerItems.appendChild(bannerShards)

				bannerItems.innerHTML = bannerItems.innerHTML + datas.shards
		}
        */

        let featDiv = document.createElement('div')

        let featItm = document.createElement('li')
            featItm.classList.add('featured')
            featItm.appendChild(featDiv)


        featuredHomeList.appendChild(featItm)

    })

}