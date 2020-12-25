import React, { Fragment } from 'react'
import './index.scss'

type TabBodyProps = {
    children: any
    /** css class， 传入 className 会被转换成 class */
    class?: string
    className?: string
    tabIndex?: number
}

function TabBody(props: TabBodyProps) {
    const {
        children,
        tabIndex,
    } = props

    let className = 'md-tabs-body'

    if (process.env.isMp) {
        className = `${props.class || ''} ${className}`
    } else {
        className = `${props.className || ''} ${className}`
    }

    return (
        <Fragment>
            {
                process.env.isMp ?
                    <wx-swiper {...props} className={className} current={tabIndex} role="tabbody">{children}</wx-swiper>
                    :
                    <div {...props} className={className} role="tabbody">{children}</div>
            }
        </Fragment>
    )
}
TabBody.tabsRole = 'TabBody'

export default React.memo(TabBody)
