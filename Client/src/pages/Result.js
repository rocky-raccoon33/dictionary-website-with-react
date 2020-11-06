import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWord, deleteWord } from '../redux/actions/wordlist';
import { Card, CardBody, Button } from '@windmill/react-ui';
import { Pagination, Label, Input } from '@windmill/react-ui'
import Modals from '../components/Modals';
import { useParams } from 'react-router-dom'



export default function Result() {
    let keyword = useParams().keyword;

    let words = useSelector(state => state.wordlist)


    // pagination setup
    const resultsPerPage = 20
    const [totalResults, setTotal] = useState(words.length);
    const dispatch = useDispatch();
    const [render, rerender] = useState(0);
    // setup pages control for every table
    const [pageTable, setPageTable] = useState(1)

    // setup data for every table
    const [dataTable, setDataTable] = useState([])

    const update = async (word) => {
        try {
            const response = await fetch(`http://54.151.249.232:8080/words/${word.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(word)
                });

            dispatch(updateWord(word));
            rerender(render + 1);


        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteAWord = async (id) => {
        try {
            const response = await fetch(`http://54.151.249.232:8080/words/${id}`, {
                method: 'DELETE'
            });
            dispatch(deleteWord(id));
            rerender(render + 1);



        } catch (error) {
            console.log(error.message);
        }
    }
    // pagination change control
    function onPageChangeTable(p) {
        setPageTable(p)
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        let tmp = [];
        if (keyword === "You must've missed something") tmp = words;
        else tmp = words.filter
            (word => word.name.toUpperCase().includes(keyword.toUpperCase())
                || word.definition.includes(keyword));
        setTotal(tmp.length);
        setDataTable(tmp.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage));

    }
        , [pageTable, keyword, render, totalResults])

    return (
        <div className="container  px-6">
            <p className="text-purple-600 font-Inconsolata text-4xl font-semibold my-3 ">
                <span className="bg-green-100 px-2 py-1 rounded-lg dark:bg-cool-gray-400">
                    Keyword: {keyword}</span></p>

            <div className="container w-full  p-5">
                {
                    dataTable.map((word, index) => (
                        <Card key={index} className="mb-4 relative mr-4">
                            <CardBody>
                                <p className="mb-4 font-bold text-gray-600 dark:text-gray-300">{word.name}</p>
                                <p className="text-gray-600 dark:text-gray-400 font-semibold mb-3">
                                    <span className="mr-2 font-semibold bg-purple-600 rounded text-white p-1">中文释义</span>
                                    {word.definition}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 pb-8 leading-7">
                                    {word.detail}
                                </p>
                                <div className="absolute top-0 right-0">
                                    <button className="bg-purple-600 p-2 text-white rounded text-sm font-concert" onClick={() => deleteAWord(word.id)}>Delete</button>
                                </div>
                                <Modals word={word} put={update} />
                            </CardBody>
                        </Card>


                    ))
                }

                <Pagination totalResults={totalResults}
                    resultsPerPage={resultsPerPage}
                    onChange={onPageChangeTable}
                    label="Table navigation"
                />
            </div>
        </div>
    )
}
