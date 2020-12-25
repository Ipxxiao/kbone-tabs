import { deepMap, deepForEach } from './childrenDeepMap'
import { getTabsCount, getPanelsCount } from './count'
import { isTabItem, isTabHead, isTabPanel, isTabBody } from './elementTypes'
import uuid, { reset } from './uuid'

export default { deepMap, deepForEach, getTabsCount, getPanelsCount, isTabItem, isTabHead, isTabPanel, isTabBody, uuid, uuidReset: reset }
