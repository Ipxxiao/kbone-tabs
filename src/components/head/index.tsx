import React from 'react'
import './index.scss'

type TabHeadProps = {
    children: any
    /** css class， 传入 className 会被转换成 class */
    class?: string
    className?: string
}

function TabHead(props: TabHeadProps) {
    const { children } = props

    let className = 'md-tabs-head'

    if (process.env.isMp) {
        className = `${props.class || ''} ${className}`
    } else {
        className = `${props.className || ''} ${className}`
    }

    return (
        <div {...props} className={className} role="tabhead">{children}</div>
    )
}
TabHead.tabsRole = 'TabHead'

export default React.memo(TabHead)