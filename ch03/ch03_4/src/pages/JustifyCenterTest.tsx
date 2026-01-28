import {Title, Div, Subtitle} from '../components'
import * as D from '../data'

export default function JustifyCenterTest() {
  const boxes = D.range(0, 5).map(index => (
    <Div key={index} className="bg-black w-4 m-1 h-4" minHeight="auto" />
  ))
  return (
    <section className="mt-4 p-4">
      <Title>JustifyCenterTest</Title>
      <div className="mt-4">
        <Subtitle>flex flex-row justify-center</Subtitle>
        <div className="flex flex-row justify-center h-40 bg-gray- 300">{boxes}</div>
      </div>
      <div className="mt-4">
        <Subtitle>flex flex-col justify-center</Subtitle>
        <div className="flex flex-col justify-center h-40 bg-gray- 300">{boxes}</div>
      </div>
    </section>
  )
}
