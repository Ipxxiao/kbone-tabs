import React from 'react'
import { Tabs, TabHead, TabBody, TabItem, TabPanel } from '../src/index'
import './index.scss'

export default React.memo((props) => {
    return (
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
    )
})
