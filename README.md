# Kbone-tabs &middot; [![NPM version](https://img.shields.io/npm/v/kbone-tabs.svg?style=flat)](https://www.npmjs.com/package/kbone-tabs) [![NPM downloads](https://img.shields.io/npm/dm/kbone-tabs.svg?style=flat)](https://www.npmjs.com/package/kbone-tabs) [![Build Status](https://travis-ci.org/Ipxxiao/kbone-tabs.svg?branch=master)](https://travis-ci.org/Ipxxiao/kbone-tabs) [![Coverage Status](https://coveralls.io/repos/github/Ipxxiao/kbone-tabs/badge.svg?branch=master)](https://coveralls.io/github/Ipxxiao/kbone-tabs?branch=master) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

- Kbone-tabs is an easy tab component for Kbone.

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br />Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i kbone-tabs -S
or
yarn add kbone-tabs
```

## Usage

``` javascript 
import { Tabs, TabHead, TabBody, TabItem, TabPanel } from 'kbone-tabs'
or
const { Tabs, TabHead, TabBody, TabItem, TabPanel } = require('kbone-tabs')

<Tabs>
    <TabHead>
        {
            [0, 1, 2, 3].map((item, index) => {
                return (
                    <TabItem key={index}>
                        tab{item}
                    </TabItem>
                )
            })
        }
    </TabHead>
    <TabBody>
        {
            [0, 1, 2, 3].map((item, index) => {
                return (
                    <TabPanel key={index}>
                        panel{item}
                    </TabPanel>
                )
            })
        }
    </TabBody>
</Tabs>
```

## More
- [MIT License](https://github.com/Ipxxiao/kbone-tabs/blob/master/LICENSE)
- [Changelog](https://github.com/Ipxxiao/kbone-tabs/blob/master/CHANGELOG.md)
