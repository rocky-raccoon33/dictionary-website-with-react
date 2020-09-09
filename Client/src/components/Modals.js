import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, HelperText, Textarea } from '@windmill/react-ui'
import { faEdit } from '@fortawesome/free-regular-svg-icons';

function Modals({ word, put }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  let newWord = Object.assign({}, word);

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="absolute bottom-0 p-3 right-0">

        <button className="font-bold" onClick={openModal}><FontAwesomeIcon icon={faEdit} color="purple" /></button>
      </div>

      <Modal backdrop='static' isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="font-bold">正在编辑...</ModalHeader>
        <ModalBody>
          <div className="px-4 py-3 mb-8 bg-cool-gray-100 rounded-lg shadow-md dark:bg-gray-800">
            <Label className="mt-4">
              <Input className="mt-1" onChange={e => {
                newWord.name = e.target.value;
              }} valid={true} placeholder={word.name} defaultValue={word.name} />
              <HelperText valid={true} className="font-bold p-2">单词</HelperText>
            </Label>

            <Label className="mt-4">
              <Input className="mt-1" onChange={e => {
                newWord.definition = e.target.value;
              }} valid={true} placeholder={word.name} defaultValue={word.definition} />
              <HelperText valid={true} className="font-bold p-2">中文</HelperText>
            </Label>

            <Label className="mt-4">
              <Textarea className="mt-1" rows="6" placeholder={word.name} defaultValue={word.detail}
                onChange={e => {
                  newWord.detail = e.target.value;
                }} />

            </Label>

          </div>

        </ModalBody>
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button onClick={() => {
              put(newWord);
              closeModal();
            }
            }>Put</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>

        </ModalFooter>
      </Modal>
    </>
  )
}

export default Modals
