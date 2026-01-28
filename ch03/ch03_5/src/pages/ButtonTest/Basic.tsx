import {Button} from '../../theme/daisyui'

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">Basic</h2>
      <div className="flex mt-4 justify-evenly">
        <button className="btn btn-primary">daisyui button</button>
        <Button className="btn btn-primary">Button</Button>
      </div>
    </section>
  )
}
