import React, { useState } from 'react'
import { CardDetails } from '../components/card/cardDetails'
import { Modal } from '../components/modal/modal'
import { useGetCardQuery } from '../api/cardsApi'

export function useCardModal(id: string | null) {
  const [isShown, setIsShown] = useState(false)

  const { isFetching, data: card } = useGetCardQuery(id || '', { skip: !id })
  const close = () => {
    setIsShown(false)
  }

  return {
    modal: (
      <div>
        {isShown && !isFetching && (
          <Modal closeModal={close}>
            {card && <CardDetails card={card} />}
          </Modal>
        )}
      </div>
    ),
    showCardModal: setIsShown,
  }
}
