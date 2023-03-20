import { useMemo } from 'react'
import { createPortal } from 'react-dom'

// 모달 루트에서 하위 트리에서 랜더링 하게 만들기
export default function Portal ({children, elementId}){
  const rootElement = useMemo(() => document.getElementById(elementId), [
    elementId,
  ])

  return createPortal(children, rootElement);
}
