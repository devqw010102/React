import {DndProvider} from 'react-dnd/dist/core'

import {useStore} from './store'
import {Provider as ReduxProvider} from 'react-redux'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Board from './pages/Board'
export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </ReduxProvider>
  )
}
