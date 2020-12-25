import React, { Fragment } from 'react'
import classnames from 'classnames'

type TabPanelProps = {
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
    forceRender?: boolean
    tabId?: string
    tabRef?: Function
}

function TabPanel(props: TabPanelProps) {
    const {
        children,
        disabled,
        disabledClassName,
        panelId,
        selected,
        tabIndex,
        tabRef,
        selectedClassName = 'on',
        forceRender,
        tabId,
        ...attributes
    } = props

    let className = 'md-tabs-panel'

    if (process.env.isMp) {
        attributes.className = `${props.class || ''} ${className}`
    } else {
        attributes.className = `${props.className || ''} ${className}`
    }

    return (
        <Fragment>
            {
                process.env.isMp ?
                    <wx-swiper-item
                        {...attributes}
                        className={classnames(attributes.className, {
                            [selectedClassName]: selected
                        })}
                        role="tabpanel"
                        aria-labelledby={tabId}
                    >
                        {forceRender || selected ? children : null}
                    </wx-swiper-item>
                    :
                    <div>
                        {/* 集成带有 DOM 操作的插件，避免冲突的最简单方式就是防止 React 组件更新。你可以渲染无需更新的 React 元素，比如一个空的 <div />。 */}
                        <div
                            {...attributes}
                            className={classnames(attributes.className, {
                                [selectedClassName]: selected
                            })}
                            ref={(node) => {
                                // nowNode = node
                                if (tabRef) tabRef(node)
                            }}
                            role="tabpanel"
                            aria-labelledby={tabId}
                        >
                            {forceRender || selected ? children : null}
                        </div>
                    </div>
            }
        </Fragment>
    )
}
TabPanel.tabsRole = 'TabPanel'

export default React.memo(TabPanel)
