import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWord, deleteWord } from '../redux/actions/wordlist';
import { Card, CardBody } from '@windmill/react-ui';
import { Pagination, Label, Button } from '@windmill/react-ui'
import Modals from '../components/Modals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function WordPages() {

    const [min, setMin] = useState(0);
    const [first, setFirst] = useState("");
    const [search, setSearch] = useState("");
    const [max, setMax] = useState(Number.MAX_VALUE);
    const [user, setUser] = useState("");
    const [isUpper, setIsUpper] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const alpha = [];
    for (let i = 0; i < 26; i++) {
        alpha.push(String.fromCharCode(i + 97));
    }

    let words = useSelector(state => state.wordlist).sort(x => x.name)
    if (isUpper) words = words.filter(word => word.name.toUpperCase() === word.name)

    // pagination setup
    const resultsPerPage = 20;
    const totalResults = words.length;
    const dispatch = useDispatch();
    const [render, rerender] = useState(0);
    // setup pages control for every table
    const [pageTable, setPageTable] = useState(1)
    const [bar, setBar] = useState(true);
    // setup data for every table
    const [dataTable, setDataTable] = useState([]);

    const update = async (word) => {

        try {
            dispatch(updateWord(word));
            const response = await fetch(`http://localhost:8080/words/${word.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(word)
                });

            rerender(render + 1);
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteAWord = async (id) => {
        try {
            dispatch(deleteWord(id));
            const response = await fetch(`http://localhost:8080/words/${id}`, {
                method: 'DELETE'
            });

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

    })


    useEffect(() => {
        words = words.filter(word => word.name.toUpperCase().startsWith(first.toUpperCase()) && word.detail.length >= min && word.detail.length <= max);
        if (user !== "") words = words.filter(word => word.author === user);
        words = words.filter
            (word => word.name.toUpperCase().includes((search).toUpperCase())
                || word.definition.includes(search));
        setDataTable(words.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage));

    }
        , [pageTable, render, first, isUpper])

    return (
        <div className="container mt-4 px-6">
            <div className=" px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
                    <div className="relative flex flex-row">
                        <input
                            className="block font-Noto w-3/4 pl-24 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                            placeholder="  type the keyword here"
                            onChange={e => setSearch(e.target.value || "")}
                        />

                        <Button key={alpha.length}
                            size="lg"
                            className={`rounded-lg p-2  font-Noto font-semibold my-1  ml-4 mr-2 text-lg ${isUpper && "text-green-100 bg-purple-600 "}`}
                            layout="outline"
                            onClick={() => setIsUpper(!isUpper)}>缩写</Button>
                        <Button key={alpha.length + 1}
                            size="lg"
                            className={`rounded-lg p-2 font-Noto font-semibold my-1 mx-2 text-lg ${isOpen && "text-green-100 bg-purple-600 "}`}
                            layout="outline"
                            onClick={() => setOpen(!isOpen)}>解释部分</Button>

                        <button
                            onClick={() => rerender(render + 1)}
                            className=" font-Noto  font-lg absolute inset-y-0 mt-1 px-4 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                            Search
                        </button>

                    </div>
                    <div className="flex flex-row  justify-start items-center my-3 ">
                        <p className="font-Noto font-semibold text-purple-600 text-lg">解释部分字符</p>
                        <input
                            className="block w-1/4 mt-1 mx-4 text-sm font-Noto dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                            placeholder="minLength"
                            onChange={e => setMin(e.target.value || 0)}
                        />
                        <p className="px-3 text-purple-600 font-Noto font-semibold text-lg">To</p>
                        <input
                            className="block w-1/4 mt-1 text-sm mx-4 font-Noto dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                            placeholder="maxLength"
                            onChange={e => setMax(e.target.value || Number.MAX_VALUE)}
                        />
                        <div className="font-semibold text-lg font-Noto text-purple-600 flex flex-row justify-center align-middle  items-center my-3 ">

                            @User<input
                                className="block w-full mt-1 mx-4 text-sm font-Noto dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                placeholder="作者"
                                onChange={e => setUser(e.target.value)}
                            />
                        </div>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" className={`${!bar && 'hidden'}`} onClick={() => setBar(!bar)} />
                        <FontAwesomeIcon icon={faAngleUp} size="lg" className={`${bar && 'hidden'}`} onClick={() => setBar(!bar)} />

                    </div>
                    <div className={`mt-2 grid grid-cols-12 ${bar && 'hidden'}`}>
                        {alpha.map((chr, index) => (
                            <Button key={index}
                                size="xm"
                                className={`rounded-lg font-Noto px-1 font-semibold my-1 mx-2 text-sm ${first === chr.toUpperCase() && "text-green-100 bg-purple-600 "}`}
                                layout="outline"
                                onClick={() => setFirst(chr.toUpperCase())}>{chr.toUpperCase()}</Button>
                        ))}
                        <Button key={alpha.length}
                            size="xm"
                            className={`rounded-lg font-Noto font-semibold my-1 mx-2 text-sm ${first === "" && "text-green-100 bg-purple-600 "}`}
                            layout="outline"
                            onClick={() => setFirst("")}>All</Button>

                    </div>
                </Label>


            </div>
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
                                <p hidden={!isOpen} className="text-gray-600 dark:text-gray-400 pb-8 leading-7">
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
