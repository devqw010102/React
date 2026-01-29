import CardsTest from './pages/CardsTest'
import ClockTest from './pages/ClockTest'
import CounterTest from './pages/CounterTest'
import RemoteUserTest from './pages/RemoteUserTest'
import {useStore} from './store'
import {Provider as ReduxProvider} from 'react-redux'
export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <CardsTest />
      <RemoteUserTest />
      <CounterTest />
      <ClockTest />
    </ReduxProvider>
  )
}
