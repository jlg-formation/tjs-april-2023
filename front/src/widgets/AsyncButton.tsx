import {
  IconDefinition,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function AsyncButton(props: {
  label: string
  handleClick?: () => Promise<void>
  icon: IconDefinition
}) {
  const [isRunning, setIsRunning] = useState(false)

  const handleClick = async () => {
    if (!props.handleClick) {
      return
    }
    setIsRunning(true)
    await props.handleClick()
    setIsRunning(false)
  }

  return (
    <button title={props.label} onClick={handleClick} disabled={isRunning}>
      <FontAwesomeIcon
        icon={isRunning ? faCircleNotch : props.icon}
        spin={isRunning}
      />
    </button>
  )
}
