import * as D from '../data'
import {Title, Subtitle, Summary, Paragraph} from '../components'

const paragraphs = D.makeArray(2).map(D.randomParagraphs).join('\n\n')
const summery = D.makeArray(3).map(D.randomSentence).join('\n')

export default function TextsTest() {
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <title className="text-blue-600">{D.randomTitleText()}</title>
        <Subtitle className="text-blue-400">{D.randomSentence()}</Subtitle>
        <p className="text-xl italic text-center text-gray-900 text-bold">
          {D.randomName()}
        </p>
        <Paragraph className="text-center text-gray-500">{summery}</Paragraph>
        <p className="text-center text-pink-400">
          {D.randomDayMonthYear()} ({D.randomRelativeDate()})
        </p>
      </div>
    </div>
  )
}
