    let aosCommands = {
        //about us click and verify links
        clickVerify: function (arr) {
            this
                .useXpath()
                .click('@aboutUs')
                .waitForElementPresent('//*[@id="aspnetForm"]/div[4]/section/div[1]/div/div[2]/div[1]/div[1]/blockquote', 15000)
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },
        //all about orchids click and verify links
        clickVerify1: function (arr) {
            this
                .useXpath()
                .click('@allAbt')
                .waitForElementPresent('//*[@id="aspnetForm"]/div[4]/section[2]/div[1]/div/div[2]/div[1]/div[1]/h1', 15000)
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },
        //orchid awards and judging click and verify links
        clickVerify2: function (arr) {
            this
                .useXpath()
                .click('@awards')
                .waitForElementPresent('//*[@id="aspnetForm"]/div[4]/section[1]/div/h1', 15000)
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },
        //shop click and verify links
        clickVerify3: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },


        hoverMenu: function (browser) {
            browser.getLocation('xpath', '//*[@id="aspnetForm"]/div[4]/header/div/div[4]/ul/li[1]/ul', function(result) {
                console.log('result', result)
            })
        },

    }

    module.exports = {
        url: 'http://www.aos.org',
        commands: [aosCommands],
        elements: {
            searchBar: {
                selector: '//*[@id="ctl00_Header_searchBox_txtWord"]', 
                locateStrategy: 'xpath'
            },
            searchBtn: {
                selector: '//*[@id="ctl00_Header_searchBox_btnSearch"]', 
                locateStrategy: 'xpath'
            },
            //header menu main links
            aboutUs: {
                selector: '//*[@id="ctl00_Header_mmAboutUs_hlMainMenuItem"]',
                locateStrategy: 'xpath'
            },

            allAbt: {
                selector: '//*[@id="ctl00_Header_mmAllAboutOrchids_hlMainMenuItem"]',
                locateStrategy: 'xpath'
            },

            awards: {
                selector: '//*[@id="ctl00_Header_mmOrchidAwardsJudging_hlMainMenuItem"]',
                locateStrategy: 'xpath'
            },

            shop: {
                selector: '//*[@id="aspnetForm"]/div[4]/header/div/div[4]/ul/li[4]/a',
                locateStrategy: 'xpath'
            },

            news: {
                selector: '//*[@id="ctl00_Header_mmNewsEvents_hlMainMenuItem"]',
                locateStrategy: 'xpath'
            },
 




        }
    }
