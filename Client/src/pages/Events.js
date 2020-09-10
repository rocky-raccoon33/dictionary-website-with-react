import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_EVENT, DELETE_EVENT, GET_EVENTS } from '../redux/actions/types'

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Button,
  Pagination,
  Input
} from '@windmill/react-ui'
import { TrashIcon } from '../icons'

// make a copy of the data, for the second table

function Tables() {
  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */


  const dispatch = useDispatch();
  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1)
  const events = useSelector(state => state.events);
  const name = useSelector(state => state.auth.user.name);
  const [add, setAdd] = useState(0);
  const [modify, setModify] = useState(0);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = events.length;

  // pagination change control
  function onPageChangeTable(p) {
    setPageTable(p)
  }

  let dataTable = events.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://18.140.113.11:8080/events");
        const payload = await response.json();
        dispatch({ type: GET_EVENTS, payload })

      } catch (error) {
        dispatch({ type: GET_EVENTS, payload: [] });
        console.log(error.message);
      }
    }
    fetchEvents();
  }, []);

  const deleteEvent = async (payload) => {
    try {
      dispatch({ type: DELETE_EVENT, payload });
      const response = await fetch(`http://18.140.113.11:8080/events/${payload}`,
        { method: "DELETE" }
      )

    } catch (error) {
      console.error(error.message);
    }
  }

  const addEvent = async (payload) => {
    try {
      dispatch({ type: ADD_EVENT, payload })
      const response = await fetch("http://18.140.113.11:8080/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="container px-6">
      <div className="flex flex-row  justify-start items-center my-3 ">
        <Button layout="outline" className="mx-3"
          onClick={() => addEvent({ name, add, modify, time: new Date().toISOString(Date.now()) })}>
          添加
        </Button>

        <span className="font-Inconsolata font-semibold text-purple-600 text-lg">I've added</span>
        <input
          className="block w-1/4 mt-1 mx-4 text-sm font-Inconsolata dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
          onChange={e => setAdd(e.target.value || 0)}
        />
        <p className="px-3 text-purple-600 font-Inconsolata font-semibold text-lg">and modified</p>
        <input
          className="block w-1/4 mt-1 text-sm mx-4 font-Inconsolata dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
          onChange={e => setModify(e.target.value)}
        />
        <p className="px-3 text-purple-600 font-Inconsolata font-semibold text-lg">words.</p>
      </div>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>User</TableCell>
              <TableCell>Add</TableCell>
              <TableCell>Modify</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable.map((event, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{event.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge type="primary">{event.add}</Badge>
                </TableCell>
                <TableCell>
                  <Badge type="success">{event.modify}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{event.time}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button onClick={() => deleteEvent(event.id)} layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" hidden={event.name !== name} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  )
}

export default Tables
