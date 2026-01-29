import {ChangeEvent, useCallback, useMemo, useRef, useState, DragEvent} from 'react' // DragEvent 추가
import {useToggle} from '../hooks'
import {imageFileReaderP} from '../utils'
import {Div, Title} from '../components'

export default function FileDrop() {
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, toggleLoading] = useToggle(false) // setLoading -> toggleLoading으로 변경

  const inputRef = useRef<HTMLInputElement>(null)
  const onDivClick = useCallback(() => inputRef.current?.click(), [])

  const makeImageUrls = useCallback(
    (files: File[]) => {
      const promises = Array.from(files).map(imageFileReaderP)
      toggleLoading() // 로딩 시작
      Promise.all(promises)
        .then(urls => setImageUrls(prev => [...urls, ...prev]))
        .catch(setError)
        .finally(toggleLoading) // 로딩 종료
    },
    [toggleLoading]
  )

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setError(null)
      const files = e.target.files
      files && makeImageUrls(Array.from(files))
    },
    [makeImageUrls]
  )

  const onDivDragOver = useCallback((e: DragEvent) => e.preventDefault(), [])
  const onDivDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      setError(null)
      const files = e.dataTransfer?.files
      files && makeImageUrls(Array.from(files))
    },
    [makeImageUrls]
  )

  const images = useMemo(
    () =>
      imageUrls.map((url, index) => (
        <Div
          key={index}
          src={url}
          // 오타 수정: bg-center, width/height를 충분히 확보
          className="m-2 bg-transparent bg-center bg-no-repeat bg-contain"
          width="10rem"
          height="10rem"
        />
      )),
    [imageUrls]
  )

  return (
    <section className="mt-4">
      <Title>FileDrop</Title>
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl font-bold text-red-500">{error.message}</p>
        </div>
      )}
      <div
        onClick={onDivClick}
        className="w-full mt-4 bg-gray-200 border border-gray-500 rounded-lg">
        {loading && (
          <div className="flex items-center justify-center pt-4">
            <button className="btn btn-circle loading"></button>
          </div>
        )}
        <div
          onDragOver={onDivDragOver}
          onDrop={onDivDrop}
          // 오타 수정: flex-col
          className="flex flex-col items-center justify-center h-40 cursor-pointer">
          <p className="text-3xl font-bold">Drop images or click me</p>
        </div>
        <input
          ref={inputRef}
          onChange={onInputChange}
          multiple
          className="hidden" // 오타 수정: hidden
          type="file"
          accept="image/*"
        />
      </div>
      <div className="flex flex-wrap justify-center mt-4">{images}</div>
    </section>
  )
}
