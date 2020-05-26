let aosPage = {};

module.exports = {
    beforeEach: browser => {
        aosPage = browser.page.aosPage()
        aosPage.navigate()
    },

    afterEach: browser => {
        aosPage.end()
    },

    // 'Header search bar': browser => {
    //     aosPage
    //         .click('@searchBar')
    //         .setValue('@searchBar', 'Cattleya tigrina')
    //         .click('@searchBtn')
    //         .useXpath()
    //         .verify.containsText('//*[@id="ctl00_cphMain_SearchResultsHeading"]', 'Search Results')
    //         .verify.containsText('//*[@id="ctl00_cphMain_srchResults_srchResults_pnlSearchResults"]', 'Cattleya tigrina')
    // },


    // 'Header - About Us links': browser => {
    //     let abtArr = require('../testAssets/abtArr')
 
    //         abtArr.forEach(i => {
    //             aosPage
    //                 .clickVerify(i)
    //         })

    // },

    // 'Header - All About Orchids links': browser => {
    //     let allAbtArr = require('../testAssets/allAbtArr')

    //     allAbtArr.forEach(i => {
    //         aosPage
    //             .clickVerify1(i)
    //     })
    // },

    // 'Header - Orchid Awards & Judging links': browser => {
    //     let awardsArr = require('../testAssets/awardsArr')

    //     awardsArr.forEach(i => {
    //         aosPage
    //             .clickVerify2(i)
    //     })
    // },

    'Header - Shop links': browser => {
        let shopArr = require('../testAssets/shopArr')

        aosPage
            .click('@shop')
        shopArr.forEach(i => {
            aosPage
                .clickVerify3(i)
        })
    },

}


