import {useMemo} from 'react'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'
import {ListDroppable} from '../../components'

import {useLists} from '../../store/useLists'

export default function Board() {
  const {lists, onRemoveList, onCreateList, onMoveList} = useLists()

  const children = useMemo(
    () =>
      lists.map((list, index) => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
          index={index}
          onMoveList={onMoveList}
        />
      )),
    [lists, onRemoveList, onMoveList]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>

      <ListDroppable className="flex flex-row p-2 mt-4">
        <div className="flex flex-wrap p-2 mt-4">
          {children}
          <CreateListForm onCreateList={onCreateList} />
        </div>
      </ListDroppable>
    </section>
  )
}
