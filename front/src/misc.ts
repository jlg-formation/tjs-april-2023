import { ChangeEvent, SetStateAction } from 'react'

export const handleInput =
  <T>(
    setter: (x: SetStateAction<T>) => void,
    type: 'string' | 'number' = 'string',
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'string') {
      setter(event.target.value as SetStateAction<T>)
      return
    }
    setter(+event.target.value as SetStateAction<T>)
  }
