import React, { useState } from 'react'
import { addWord } from '../redux/actions/wordlist'
import { useDispatch, useSelector } from 'react-redux';
import { HelperText, Button, Textarea, Modal, ModalBody, Label, ModalFooter, Input, ModalHeader } from '@windmill/react-ui'



function AddForm() {
  const author = useSelector(state => state.auth.user.name)

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false)


  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }
  const newWord = { author, time: new Date().toISOString(Date.now()).substring(5, 10), detail: '', definition: '' }
  return (
    <>
      <div className="mt-4">
        <Button
          layout='outline'
          className="font-bold font-Noto" onClick={openModal}>
          New +
        </Button>
      </div>

      <Modal backdrop='static' isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="font-bold">newWord</ModalHeader>
        <ModalBody>
          <div className="px-4 py-3 mb-8 bg-cool-gray-100 rounded-lg shadow-md dark:bg-gray-800">
            <Label className="mt-4">
              <Input className="mt-1" onChange={e => {
                newWord.name = e.target.value;
              }} valid={true} />
              <HelperText valid={true} className="font-bold p-2">单词</HelperText>
            </Label>

            <Label className="mt-4">
              <Input className="mt-1" onChange={e => {
                newWord.definition = e.target.value;
              }} valid={true} />
              <HelperText valid={true} className="font-bold p-2">中文</HelperText>
            </Label>

            <Label className="mt-4">
              <Textarea className="mt-1" rows="6"
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
              addWord(dispatch, newWord);
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

export default AddForm;
