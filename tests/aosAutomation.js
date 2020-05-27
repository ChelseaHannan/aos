let aosPage = {};

module.exports = {
    beforeEach: browser => {
        aosPage = browser.page.aosPage()
        aosPage.navigate()
    },

    afterEach: browser => {
        aosPage.end()
    },

    'Header search bar': browser => {
        aosPage
            .click('@searchBar')
            .setValue('@searchBar', 'Cattleya tigrina')
            .click('@searchBtn')
            .useXpath()
            .verify.containsText('//*[@id="ctl00_cphMain_SearchResultsHeading"]', 'Search Results')
            .verify.containsText('//*[@id="ctl00_cphMain_srchResults_srchResults_pnlSearchResults"]', 'Cattleya tigrina')
    },


    'Header - About Us links': browser => {
        let abtArr = require('../testAssets/abtArr')
 
            abtArr.forEach(i => {
                aosPage
                    .clickVerify(i)
            })

    },

    'Header - All About Orchids links': browser => {
        let allAbtArr = require('../testAssets/allAbtArr')

        allAbtArr.forEach(i => {
            aosPage
                .clickVerify1(i)
        })
    },

    'Header - Orchid Awards & Judging links': browser => {
        let awardsArr = require('../testAssets/awardsArr')

        awardsArr.forEach(i => {
            aosPage
                .clickVerify2(i)
        })
    },

    'Header - Shop links': browser => {
        //click shop link in header menu and then click each category from the side menu on the shop page
        let shopArr = require('../testAssets/shopArr')

        aosPage
            .click('@shop')
            .useXpath()
            .click('//*[@id="aspnetForm"]/div[3]/section[2]/div[2]/div/div/div[1]/div/a')
            // .waitForElementPresent('//*[@id="aspnetForm"]/div[3]/section[2]/div[2]/div/h2', 15000)

            shopArr.forEach(i => {
                aosPage
                    .clickVerify3(i)
            })
    },

    '3 round category butttons from Shop page': browser => {
        let productCat = require('../testAssets/productCat')

        aosPage
            .click('@shop')
        productCat.forEach(i => {
            aosPage
                .clickVerify4(i)
        })
    },

    'Header - News & Events links': browser => {
        let newsArr = require('../testAssets/newsEventsArr')

        newsArr.forEach(i => {
            aosPage
                .clickVerify5(i)
        })
    },

    'Home - Featured Content carousel': browser => {
        let originalWindow = ''
        let handle = ''

        browser.windowHandle(result => {
            originalWindow = result.value
        })

        //orchids magazine
        aosPage
            .useXpath()
            .waitForElementVisible('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[5]/a/h3', 25000)
            .click('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[4]/a')
            .waitForElementPresent('//*[@id="aspnetForm"]/div[5]/div/div/div[1]/p[1]', 25000)
            .verify.urlContains('https://www.aos.org/about-us/orchids-magazine.aspx')
            .click('@logo')

        //free issue of orchids magazine - opens in new window
        aosPage
            .useXpath()
            .waitForElementVisible('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[5]/a/h3', 25000)
            .click('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[5]/a/h3') 

        browser
            .windowHandles(function(result) {
                handle = result.value[1]
                browser.switchWindow(handle)
            })

            .verify.urlContains('https://go.aos.org/freeissue201808?utm_source=free-issue&utm_medium=website&utm_term=august-2018&utm_campaign=join')

        browser.closeWindow()
        browser.switchWindow(originalWindow)    
            
        //orchid madness
        aosPage
            .useXpath()
            .waitForElementVisible('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[6]/a/h3', 25000)
            .click('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[6]/a/h3')
            .waitForElementPresent('//*[@id="hero-section"]/img', 15000)
            .verify.urlContains('https://www.aos.org/madness')
            .click('@logo')  

        //orchid webinars
            .waitForElementVisible('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[7]/a/h3', 25000)
            .click('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[7]/a/h3')
            .waitForElementPresent('//*[@id="ctl00_cphMain_nextwebinar"]/h1', 15000)
            .verify.urlContains('https://www.aos.org/orchids/webinars.aspx')
            .click('@logo')
            
        //members meeting - opens in new window  
            .waitForElementVisible('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[8]/div[2]/a', 30000)
            .click('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[8]/div[2]/a')

        browser
            .windowHandles(function(result) {
                handle = result.value[1]
                browser.switchWindow(handle)
            })   

            .verify.urlContains('https://www.aos.org/news-and-events/members-meetings.aspx')

        browser.closeWindow()
        browser.switchWindow(originalWindow) 

        //photo of the week
        aosPage
            .useXpath()
            .waitForElementVisible('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[9]/a/h3', 30000)
            .click('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[9]/a/h3')
            .verify.urlContains('https://www.aos.org/all-about-orchids/photo-of-the-week.aspx')
            .click('@logo')

        //recent orchid awards
            .waitForElementVisible('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[10]/a/h3', 20000)
            .click('//*[@id="aspnetForm"]/div[5]/section[2]/div/div/div[1]/div/div[10]/a/h3')
            .verify.urlContains('https://secure.aos.org/orchid-awards.aspx')
    },

    'Home - Orchid Articles section': browser => {
        let articlesArr = require('../testAssets/articlesArr')

        articlesArr.forEach(i => {
            aosPage
                .clickVerify7(i, browser)
        })

        aosPage
            .useXpath()
            .click('//*[@id="ctl00_cphMain_orchidArticles_linkMoreArt"]')
            .verify.urlContains('https://www.aos.org/blog.aspx')
            .verify.containsText('//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div/h2', 'Blog')
    },

    'Home - You May Be Interested In section': browser => {
        let greenArr = require('../testAssets/greenArr')

        greenArr.forEach(i => {
            aosPage
                .clickVerify6(i, browser)
        })
    },

    'Footer - Featured Content': browser => {
        let footerArr = require('../testAssets/footerArr')

        footerArr.forEach(i => {
            aosPage
                .footer(i)
        })
    },





}




