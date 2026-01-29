import {useCallback, useEffect, useRef} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function ForwardRefTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])
  useEffect(() => inputRef.current?.focus(), [])
  return (
    <section className="mt-4">
      <Title>ForwardRefTest</Title>
      <div className="flex justify-center mt-4">
        <input ref={inputRef} className="input input-primary" />
        <button onClick={getValue} className="mt-4 btn btn-primary">
          get value
        </button>
      </div>
    </section>
  )
}
