import { NodePlopAPI } from 'node-plop'
import { componentGenerator } from './component'
import { exec } from 'shelljs'
import { sliceGenerator } from './slice'
interface PrettifyCustomActionData {
  path: string
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('slice', sliceGenerator)

  plop.setActionType('prettify', (answers, config) => {
    const data = config!.data as PrettifyCustomActionData
    exec(`yarn run prettify -- "${data.path}"`, { silent: true })
    return ''
  })
}
