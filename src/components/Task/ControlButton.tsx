import { ButtonGroup, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

type ControlButtonProps = {
  id: number
  isDone: boolean
  finishedTask: (id: number) => void
  removeTask: (id: number) => void
  setIsEditOn: (isDone: boolean) => void
}

export function ControlButton({
  id,
  isDone,
  finishedTask,
  removeTask,
  setIsEditOn,
}: ControlButtonProps) {
  return (
    <ButtonGroup aria-label="Edis task">
      <OverlayTrigger
        placement={'top'}
        overlay={<Tooltip>Mark task as done.</Tooltip>}
      >
        <Button
          variant="outline-success"
          size="sm"
          onClick={() => finishedTask(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </svg>
        </Button>
      </OverlayTrigger>

      {!isDone && (
        <OverlayTrigger
          placement={'top'}
          overlay={<Tooltip>Edit task.</Tooltip>}
        >
          <Button
            variant="outline-warning"
            size="sm"
            onClick={() => setIsEditOn(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </Button>
        </OverlayTrigger>
      )}

      <OverlayTrigger
        placement={'top'}
        overlay={<Tooltip>Remove task.</Tooltip>}
      >
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeTask(id)}
        >
          &times;
        </Button>
      </OverlayTrigger>
    </ButtonGroup>
  )
}
