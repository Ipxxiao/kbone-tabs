import React from 'react'
import classnames from 'classnames'

type TabItemProps = {
    children: any
    /** 埋点 */
    asm?: string
    /** css class， 传入 className 会被转换成 class */
    class?: string
    className?: string
    disabled?: boolean
    disabledClassName?: string
    selectedClassName?: string
    selected?: boolean
    panelId?: string
    tabIndex?: number
    tabRef?: Function
}

function TabItem(props: TabItemProps) {
    const {
        children,
        disabled,
        disabledClassName,
        panelId,
        selected,
        tabIndex,
        tabRef,
        selectedClassName = 'on',
        ...attributes
    } = props

    let nowNode
    let className = 'md-tabs-item'

    if (process.env.isMp) {
        attributes.className = `${props.class || ''} ${className}`
    } else {
        attributes.className = `${props.className || ''} ${className}`
    }

    return (
        <div
            {...attributes}
            className={classnames(attributes.className, {
                [selectedClassName]: selected
            })}
            role="tabitem"
            aria-selected={selected ? 'true' : 'false'}
            aria-disabled={disabled ? 'true' : 'false'}
            aria-controls={panelId}
            tabIndex={tabIndex || (selected ? 0 : undefined)}
        >
            {children}
        </div>
    )
}
TabItem.tabsRole = 'TabItem'

export default React.memo(TabItem)
