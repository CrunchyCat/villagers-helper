import { Provider } from 'react-redux'
import { createRenderer } from 'react-test-renderer/shallow'
import { configureAppStore } from 'store/configureStore'
import { App } from '../index'

const renderer = createRenderer()

const AppWrapper = () => {
  const store = configureAppStore()

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<AppWrapper />)
    const renderedOutput = renderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
