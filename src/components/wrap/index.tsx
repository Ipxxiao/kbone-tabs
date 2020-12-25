import React, { useState } from 'react'
import UncontrolledTabs from '../uncontrolled'

type TabsProps = {
    children: any
    /** css class， 传入 className 会被转换成 class */
    class?: string
    className?: string
    selectedIndex?: number
    defaultIndex?: number
    onSelect?: Function
}

let canUseActiveElement
try {
  canUseActiveElement = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.activeElement
  )
} catch (e) {
  // Work around for IE bug when accessing document.activeElement in an iframe
  // Refer to the following resources:
  // http://stackoverflow.com/a/10982960/369687
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
  canUseActiveElement = false
}

function Tabs(props: TabsProps) {
    const { children, defaultIndex, ...attributes } = props
    let className = 'md-tabs'
    const [selectedIndex, setSelectedIndex] = useState(0)

    if (selectedIndex != null) {
        attributes.selectedIndex = selectedIndex
    }

    if (process.env.isMp) {
        attributes.className = `${props.class || ''} ${className}`
    } else {
        attributes.className = `${props.className || ''} ${className}`
    }

    function handleSelected(index: number, last: number | undefined, event: MouseEvent) {
        const { onSelect } = props
        // const { mode } = state
    
        // Call change event handler
        if (typeof onSelect === 'function') {
          // Check if the change event handler cancels the tab change
          if (onSelect(index, last, event) === false) return
        }

        // if (mode === MODE_UNCONTROLLED) {
        //   // Update selected index
        //   state.selectedIndex = index
        // }

        if (props.selectedIndex == null) {
            // Update selected index
            setSelectedIndex(index)
        }
    }

    return (
        <UncontrolledTabs {...attributes} onSelect={handleSelected}>{children}</UncontrolledTabs>
    )
}
Tabs.tabsRole = 'Tabs'

export default React.memo(Tabs)
