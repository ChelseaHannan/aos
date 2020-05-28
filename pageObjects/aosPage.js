    let aosCommands = {
        //about us click and verify links
        clickVerify: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                .waitForElementPresent('/html/body', 15000)
                // .verify.urlContains(arr.url)
                .verify.containsText('/html/body', arr.txt)
            return this
        },

        //all about orchids click and verify links
        clickVerify1: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },

        clickVerify3: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },

        //shop page product categories 3 round buttons click and verify links
        clickVerify4: function (arr) {
            this
                .useXpath()
                .click('//*[@id="shopmenu"]/a')
                .waitForElementPresent('//*[@id="aspnetForm"]/div[3]/section[2]/div[2]/div/h2', 15000)
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },

        //header news & events links
        clickVerify5: function (arr) {
            this
                .useXpath()
                .click('@news')
                .waitForElementPresent('//*[@id="aspnetForm"]/div[5]/section[2]/div/h1', 15000)
                .click(arr.link)
                .verify.urlContains(arr.url)
            return this
        },

        //home - you may be interested in links section at bottom of page
        clickVerify6: function (arr, browser) {
            this
                .useXpath()
                .click(arr.link)
                .verify.urlContains(arr.url)
            browser
                .back()
            return this
        },

        //home - orchid articles
        clickVerify7: function (arr, browser) {
            this    
                .useXpath()
                .click(arr.btn)
                .verify.urlContains(arr.url)
                .verify.containsText('@blogH3', arr.txt)
            browser
                .back()
            return this
        },

        //footer menu links - featured content - all about orchids - orchid awards & judging - legal links
        footer: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                // .waitForElementPresent('//*[@id="aspnetForm"]/div[5]/footer/div[1]', 100000)
                .verify.urlContains(arr.url)
            return this
        },

        clickVerify8: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                .verify.containsText('/html/body', arr.txt)
            return this
        },

        clickVerify9: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                .verify.urlContains(arr.url)
                .verify.containsText('/html/body', arr.txt)
            return this
        },

        clickVerify10: function (arr, browser) {
        let origWin = ''
        let handle = ''

            browser.windowHandle(result => {
                origWin = result.value
            })

            this
                .useXpath()
                .click(arr.link)

            browser
                .windowHandles(function(result) {
                    handle = result.value[1]
                    browser.switchWindow(handle)
                })

            this
                .verify.urlContains(arr.url)

            browser.closeWindow()
            browser.switchWindow(origWin)

            return this
        },

        clickMenu: function (menu, menuItem) {
            this
                .useXpath()
                .click(menu)
                .click(menuItem)
            return this
        },

        //Orchidists Glossary
        clickVerify11: function (arr) {
            this
                .useXpath()
                .click(arr.link)
                .verify.containsText('//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div[1]/h1', arr.txt)
            return this
        },


        //get location of popout menu in header that is only accessible by hovering over menu links
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
                selector: '//*[@id="aspnetForm"]/div[5]/header/div/div[4]/ul/li[4]',
                locateStrategy: 'xpath'
            },

            news: {
                selector: '//*[@id="ctl00_Header_mmNewsEvents_hlMainMenuItem"]',
                locateStrategy: 'xpath'
            },

            logo: {
                selector: '//*[@id="aspnetForm"]/div[5]/header/div/div[1]/a/img',
                locateStrategy: 'xpath'
            },

            blogH3: {
                selector: '//*[@id="aspnetForm"]/div[5]/section/div[1]/div/div[2]/div[1]/div/article/h3',
                locateStrategy: 'xpath'
            },


        }
    }
