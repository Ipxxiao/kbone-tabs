import React, { useState, useEffect, cloneElement } from 'react'
import Methods from '../../methods'
import { tns } from 'tiny-slider/src/tiny-slider'
import 'tiny-slider/src/tiny-slider.scss'

type UncontrolledTabsProps = {
    children: any
    /** css class， 传入 className 会被转换成 class */
    className?: string
    disabledTabClassName?: string
    forceRenderTabPanel?: boolean
    selectedIndex?: number
    selectedTabClassName?: string
    selectedTabPanelClassName?: string
    onSelect: Function
    domRef?: Function
}
let slider: any = null
let sliderId = 'md-tabs-slider'

function UncontrolledTabs(props: UncontrolledTabsProps) {
    const {
        children,
        className,
        disabledTabClassName, // unused
        domRef,
        forceRenderTabPanel, // unused
        onSelect, // unused
        selectedIndex, // unused
        selectedTabClassName, // unused
        selectedTabPanelClassName, // unused
        ...attributes
    } = props

    let nowNode
    const [tabNodes, setTabNodes] = useState({})
    const [panelNodes, setPanelNodes] = useState({})

    function isNode(node: any) {
        return node && 'getAttribute' in node
    }

    // Determine if a node from event.target is a TabItem element
    function isTabItemNode(node: any) {
        return isNode(node) && node.getAttribute('role') === 'tabitem'
    }

    // Determine if a node from event.target is a TabPanel element
    function isTabPanelNode(node: any) {
        return isNode(node) && node.getAttribute('role') === 'tabpanel'
    }

    // Determine if a tab node is disabled
    function isTabDisabled(node: any) {
      return isNode(node) && node.getAttribute('aria-disabled') === 'true'
    }

    /**
     * Determine if a node from event.target is a Tab element for the current Tabs container.
     * If the clicked element is not a Tab, it returns false.
     */
    function isTabFromContainer(node: any) {
        // return immediately if the clicked element is not a Tab.
        if (!isTabItemNode(node)) {
            return false
        }

        // Check if the first occurrence of a Tabs container is `tabhead` one.
        let nodeAncestor = node.parentElement || node.parentNode
        do {
            if (nodeAncestor.getAttribute('role') === 'tabhead') return true
            // if (nodeAncestor === nowNode) return true
            if (nodeAncestor.getAttribute('data-tabs')) break

            nodeAncestor = nodeAncestor.parentElement || node.parentNode
        } while (nodeAncestor)

        return false
    }

    function getTabsCount() {
      const { children } = props
      return Methods.getTabsCount(children)
    }

    function getPanelsCount() {
      const { children } = props
      return Methods.getPanelsCount(children)
    }

    function setSelected(index: number, event: MouseEvent) {
        // Check index boundary
        if (index < 0 || index >= getTabsCount()) return

        const { onSelect, selectedIndex } = props

        // Call change event handler
        onSelect(index, selectedIndex, event)
    }

    function handleClick(e: any) {
        let node = e.target
        do {
            if (isTabFromContainer(node)) {
                const array: any[] = []
                const index = array.slice
                .call(node.parentNode.children)
                .filter(isTabItemNode)
                .indexOf(node)

                setSelected(index, e)
                if (!process.env.isMp) {
                    slider.goTo(index)
                }
                return
            }
            // eslint-disable-next-line no-cond-assign
        } while ((node = node.parentNode) != null)
    }

    function handleChange(e: any) {
        let node = e.target
        let nodeAncestor = node.parentElement || node.parentNode

        if (!process.env.isMp || !isTabPanelNode(node)) {
            return false
        }

        if (nodeAncestor.getAttribute('role') === 'tabbody') {
            nodeAncestor.addEventListener('change', (e: any) => {
                setSelected(e.detail.current, e)
            })
        }
    }

    function getChildren() {
        let index = 0
        const {
            children,
            disabledTabClassName,
            forceRenderTabPanel,
            selectedIndex,
            selectedTabClassName,
            selectedTabPanelClassName,
        } = props

        const tabIds: string[] = []
        const panelIds: string[] = []
        let diff = tabIds.length - getTabsCount()

        // Add ids if new tabs have been added
        // Don't bother removing ids, just keep them in case they are added again
        // This is more efficient, and keeps the uuid counter under control
        while (diff++ < 0) {
            tabIds.push(Methods.uuid())
            panelIds.push(Methods.uuid())
        }

        // Map children to dynamically setup refs
        return Methods.deepMap(children, (child: any) => {
            let result = child

            // Clone TabList and Tab components to have refs
            if (Methods.isTabHead(child)) {
                let listIndex = 0

                result = cloneElement(child, {
                    children: Methods.deepMap(child.props.children, (tab: any) => {
                        const key = `tabs-${listIndex}`
                        const selected = selectedIndex === listIndex

                        const props: any = {
                            tabRef: (node: ChildNode) => {
                                tabNodes[key] = node
                                setTabNodes(tabNodes)
                            },
                            id: tabIds[listIndex],
                            panelId: panelIds[listIndex],
                            selected,
                        }

                        if (selectedTabClassName)
                            props.selectedClassName = selectedTabClassName
                        if (disabledTabClassName)
                            props.disabledClassName = disabledTabClassName

                        listIndex++

                        return cloneElement(tab, props)
                    }),
                })
            } else if (Methods.isTabBody(child)) {
                let listIndex = 0

                result = cloneElement(child, {
                    children: Methods.deepMap(child.props.children, (panel: any) => {
                        const key = `tabs-${listIndex}`
                        const selected = selectedIndex === listIndex

                        const props: any = {
                            tabRef: (node: ChildNode) => {
                                panelNodes[key] = node
                                setPanelNodes(panelNodes)
                            },
                            id: panelIds[listIndex],
                            tabId: tabIds[index],
                            selected,
                        }

                        if (process.env.isMp) {
                            
                        }

                        if (forceRenderTabPanel)
                            props.forceRender = forceRenderTabPanel
                        if (selectedTabPanelClassName)
                            props.selectedClassName = selectedTabPanelClassName

                        listIndex++

                        return cloneElement(panel, props)
                    }),
                    tabIndex: selectedIndex,
                    id: sliderId,
                })
            }

            return result
        })
    }

    useEffect(() => {
        if (!process.env.isMp) {
            slider = tns({
                container: `#${sliderId}`,
                items: 1,
                slideBy: 'page',
                mouseDrag: true,
                swipeAngle: false,
                controls: false,
                nav: false,
                preventScrollOnTouch: 'auto',
            })

            slider.events.on('indexChanged', (info: any) => {
                setSelected(info.index - 1, info.event)
            })
        }
    }, [])

    return (
        <div
            {...attributes}
            className={className}
            onClick={handleClick}
            onTouchStart={handleChange}
            role="tabs"
            data-tabs
        >
            {getChildren()}
        </div>
    )
}

export default React.memo(UncontrolledTabs)
