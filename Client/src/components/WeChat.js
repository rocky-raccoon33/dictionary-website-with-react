import React, { useState } from 'react'
import infoCard from '../assets/img/infoCard.jpg'
import { WeixinIcon } from '../icons'
import { Modal, ModalBody, Button } from '@windmill/react-ui'

function WeChat() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button className="mt-4" block layout="outline" onClick={() => openModal()}>
        <WeixinIcon className="w-4 h-4 mr-2" aria-hidden="true" />
            Wechat
        </Button>
      <Modal backdrop='static' isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody>
          <div className="w-100">
            <img alt="panda" className=" size w-full h-full" src={infoCard} />
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default WeChat
