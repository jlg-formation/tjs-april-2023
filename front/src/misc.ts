import { ChangeEvent, SetStateAction } from 'react'

export const handleInput =
  (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setter: (x: SetStateAction<any>) => void,
    type: 'string' | 'number' = 'string',
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'string') {
      setter(event.target.value)
      return
    }
    setter(+event.target.value)
  }
