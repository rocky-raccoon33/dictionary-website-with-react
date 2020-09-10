import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords, deleteWord } from '../redux/actions/wordlist'

import PageTitle from '../components/Typography/PageTitle'
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Button,
    Pagination,
} from '@windmill/react-ui'
import { TrashIcon } from '../icons'

// make a copy of the data, for the second table

function Words() {
    /**
     * DISCLAIMER: This code could be badly improved, but for the sake of the example
     * and readability, all the logic for both table are here.
     * You would be better served by dividing each table in its own
     * component, like Table(?) and TableWithActions(?) hiding the
     * presentation details away from the page view.
     */
    const dispatch = useDispatch();

    //delete a word
    const deleteAWord = async (id) => {
        try {
            dispatch(deleteWord(id));
            const response = await fetch(`http://172.31.1.95/words/${id}`,
                {
                    method: "DELETE"
                });
        } catch (error) {
            console.log(error.message);
        }
    }


    const words = useSelector(state => state.wordlist);
    // setup pages control for every table
    const [pageTable, setPageTable] = useState(1)


    // pagination setup
    const resultsPerPage = 15
    const totalResults = words.length

    // setup data for every table
    const dataTable = words.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage);

    // pagination change control
    function onPageChangeTable(p) {
        setPageTable(p)
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        //fetch the data from postgres
        const fetchWord = async () => {
            try {
                const data = await fetch("http://172.31.1.95:8080/words");
                const jsonData = await data.json();
                dispatch(fetchWords(jsonData));
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchWord();
    }, [])

    return (
        <>
            <PageTitle><p className="">词汇表</p></PageTitle>
            <TableContainer className="mb-8">
                <Table >
                    <TableHeader>
                        <tr>
                            <TableCell className="font-concert text-lg text-purple-600" >word</TableCell>
                            <TableCell className="font-concert text-lg text-purple-600">Definition</TableCell>
                            <TableCell className="font-concert text-lg text-purple-600">Last Edited</TableCell>
                            <TableCell className="font-concert text-lg text-purple-600">Author</TableCell>
                            <TableCell className="font-contrail text-sm"></TableCell>
                        </tr>
                    </TableHeader>
                    {dataTable.map((word, i) => (
                        <TableBody key={word.id}>
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center text-sm ">
                                        <p className="font-bold text-center">{word.name}</p>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="font-semibold text-sm text-center">{word.definition}</span>
                                </TableCell>

                                <TableCell>
                                    <span className="text-sm bg-gray-400 font-Inconsolata p-2 font-semibold rounded-lg dark:text-black dark:bg-green-200">{word.time}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="font-Inconsolata text-lg">{word.author}</span>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center space-x-4">
                                        <Button layout="link" onClick={() => deleteAWord(word.id)} size="icon" aria-label="Delete">
                                            <TrashIcon className="w-5 h-5" aria-hidden="true" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
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
        </>
    )
}

export default Words;