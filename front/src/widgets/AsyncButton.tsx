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
  handleError?: (str: string) => void
  handleStart?: () => void
}) {
  const [isRunning, setIsRunning] = useState(false)

  const handleClick = async () => {
    if (props.handleStart) {
      props.handleStart()
    }
    if (!props.handleClick) {
      return
    }
    try {
      setIsRunning(true)
      await props.handleClick()
    } catch (err) {
      console.log('err: ', err)
      if (props.handleError) {
        props.handleError('Erreur Technique')
      }
    } finally {
      setIsRunning(false)
    }
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
