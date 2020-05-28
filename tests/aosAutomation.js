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

        aosPage
            .click('@aboutUs')
 
            abtArr.forEach(i => {
                aosPage
                    .clickVerify9(i)
            })
    },

    'Header - All About Orchids links': browser => {
        let allAbtArr = require('../testAssets/allAbtArr')

        aosPage
            .click('@allAbt')
 
            allAbtArr.forEach(i => {
                aosPage
                    .clickVerify9(i)
            })

    },

    'Header - Orchid Awards & Judging links': browser => {
        let awardsArr = require('../testAssets/awardsArr')

        aosPage
            .click('@awards')

        awardsArr.forEach(i => {
            aosPage
                .clickVerify9(i)
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

    'Shop - Cart Functionalities': browser => {
        //go to shop page, select orchids magazine category, click details button of first item, add to cart, adjust quantity, update cart, proceed to checkout, fill out form, review order page
        aosPage
            .useXpath()
            .click('@shop')
            .click('//*[@id="aspnetForm"]/div[3]/section[2]/div[2]/div/div/div[1]/div/a')
            .click('//*[@id="ctl00_cphMain_rptProductsInCategory_ctl00_ctl00_btnProductDetails"]')
            .click('//*[@id="ctl00_cphMain_ctl00_ctrlProductVariantsInGrid_rptVariants_ctl00_btnAddToCart"]')
            .clearValue('//*[@id="ctl00_cphMain_OrderSummaryControl_rptShoppingCart_ctl00_txtQuantity"]')
            .setValue('//*[@id="ctl00_cphMain_OrderSummaryControl_rptShoppingCart_ctl00_txtQuantity"]', 4)
            .click('//*[@id="ctl00_cphMain_OrderSummaryControl_btnUpdate"]')
            .click('//*[@id="aspnetForm"]/div[3]/section/div[1]/div/div[3]/div/a')
            .setValue('//*[@id="ctl00_cphMain_shippingFirstName"]', 'Jane')
            .setValue('//*[@id="ctl00_cphMain_shippingLastName"]', 'Doe')
            .setValue('//*[@id="ctl00_cphMain_shippingEmail"]', 'janedoe@email.com')
            .setValue('//*[@id="ctl00_cphMain_shippingPhone"]', '1234567890')
            .setValue('//*[@id="ctl00_cphMain_shippingAddress1"]', '123 1st Street W')
            .setValue('//*[@id="ctl00_cphMain_shippingCity"]', 'New York')
            .click('//*[@id="ctl00_cphMain_shippingState-styler"]/div[1]/div[1]')
            .click('//*[@id="ctl00_cphMain_shippingState-styler"]/div[2]/ul/li[42]')
            .setValue('//*[@id="ctl00_cphMain_shippingZipCode"]', '23145')
            .click('//*[@id="btnNext"]')
            .verify.containsText('//*[@id="ctl00_cphMain_sectionCheckoutStep2"]/div[1]/div/div/div[2]/h2', 'Checkout: Step 2')
            .verify.urlContains('https://secure.aos.org/store/checkout-step2.aspx')
    },

    'Shop - Remove item from cart': browser => {
        //go to shop page, select orchids magazine category, click details button of first item, add to cart, remove from cart
        aosPage
            .useXpath()
            .click('@shop')
            .click('//*[@id="aspnetForm"]/div[3]/section[2]/div[2]/div/div/div[1]/div/a')
            .click('//*[@id="ctl00_cphMain_rptProductsInCategory_ctl00_ctl00_btnProductDetails"]')
            .click('//*[@id="ctl00_cphMain_ctl00_ctrlProductVariantsInGrid_rptVariants_ctl00_btnAddToCart"]')
            .click('//*[@id="ctl00_cphMain_OrderSummaryControl_rptShoppingCart_ctl00_cbRemoveFromCart"]')
            .click('//*[@id="ctl00_cphMain_OrderSummaryControl_btnUpdate"]')
            .verify.containsText('//*[@id="ctl00_cphMain_OrderSummaryControl_pnlEmptyCart"]', 'Your Shopping Cart is empty!')
    },

    'About Us -> Officers and Trustees': browser => {
        let ofcArr = require('../testAssets/officersArr')

        aosPage.clickMenu('@aboutUs', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[4]/a')

        ofcArr.forEach(i => {
            aosPage
                .clickVerify8(i)
        })
    },

    'About Us -> Affiliated Societies links': browser => {
        let affSocArr = require('../testAssets/affSocArr')

        aosPage.clickMenu('@aboutUs', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[6]/a')

        affSocArr.forEach(i => {
            aosPage
                .clickVerify8(i)
        })
    },

    'About Us -> Article Submissions links': browser => {
        aosPage
            .clickMenu('@aboutUs', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[9]/a')
            .useXpath()
            .verify.urlContains('https://www.aos.org/about-us/article-submissions.aspx')
            .verify.containsText('/html/body', 'Article Submissions')
            .click('//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[9]/ul/li[1]/a')
            .verify.urlContains('https://www.aos.org/about-us/article-submissions/dillon-peterson-essay-contest.aspx')
            .verify.containsText('/html/body', 'Dillon-Peterson Essay Contest 2020')
            .click('//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div/div[2]/div[1]/div/ul/li[9]/ul/li[2]/a')
            .verify.urlContains('https://www.aos.org/about-us/article-submissions/style-guide-for-aos-publications.aspx')
            .verify.containsText('/html/body', 'Writer’s Guide and Style Guide')
    },

    'About Us -> Orchid Conservation links': browser => {
        let consArr = require('../testAssets/conservationArr')

        aosPage.clickMenu('@aboutUs', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[11]/a')

            consArr.forEach(i => {
                aosPage
                    .clickVerify9(i)
            })
    },

    'About Us -> Orchid Research links': browser => {
        let researchArr = require('../testAssets/researchArr')

        aosPage.clickMenu('@aboutUs', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[12]/a')

        researchArr.forEach(i => {
            aosPage
                .clickVerify9(i)
        })
    },

    'About Us -> Policies and Procedures links': browser => {
        let policyArr = require('../testAssets/policiesArr')

        aosPage.clickMenu('@aboutUs', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[15]/a')

        policyArr.forEach(i => {
            aosPage
                .clickVerify10(i, browser)
        })
    },

    'All About Orchids -> Beginners Newsletter links': browser => {
        let beginArr = require('../testAssets/beginnersArr')

        aosPage.clickMenu('@allAbt', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[1]/a')

        beginArr.forEach(i => {
            aosPage
                .clickVerify10(i, browser)
        })
    },

    'All About Orchids -> Orchid Care links': browser => {
        let careArr = require('../testAssets/careArr')

        aosPage.clickMenu('@allAbt', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[2]/a')

        careArr.forEach(i => {
            aosPage
                .clickVerify9(i)
        })
    },

    'All About Orchids -> Seasonal Orchid Care links': browser => {
        let arr = require('../testAssets/seasonalArr')

        aosPage.clickMenu('@allAbt', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[3]/a')

        arr.forEach(i => {
            aosPage
                .clickVerify9(i)
        })
    },

    'All About Orchids -> Culture Sheets links': browser => {
        let pestsArr = require('../testAssets/pestsArr')

        aosPage.clickMenu('@allAbt', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[5]/a')

        pestsArr.forEach(i => {
            aosPage
                .clickVerify9(i)
        })
    },

    'All About Orchids -> AOS Video Library links': browser => {
        let videoArr = require('../testAssets/videoArr')

        aosPage.clickMenu('@allAbt', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[6]/a')

        videoArr.forEach(i => {
            aosPage
                .clickVerify9(i)
        })
    },

    'All About Orchids -> Orchids A to Z links': browser => {
        let azArr = require('../testAssets/azArr')

        aosPage.clickMenu('@allAbt', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[9]/a')

        azArr.forEach(i => {
            aosPage
                .clickVerify9(i)
        })
    },

    'All About Orchids -> Orchidists Glossary links': browser => {
        let glossArr = require('../testAssets/glossaryArr')

        aosPage.clickMenu('@allAbt', '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[2]/div/div/ul/li[11]/a')

        glossArr.forEach(i => {
            aosPage
                .clickVerify11(i)
        })
    },
}




