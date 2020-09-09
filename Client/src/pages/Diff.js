import React, { useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import { Label, Textarea, Button } from '@windmill/react-ui'

export default function Diff() {
    const DiffMethod = {
        CHARS: 'diffChars',
        WORDS: 'diffWords',
        WORDS_WITH_SPACE: 'diffWordsWithSpace',
        LINES: 'diffLines',
        TRIMMED_LINES: 'diffTrimmedLines',
        SENTENCES: 'diffSentences',
        CSS: 'diffCss',
    }

    const oldCode = `const a = 10
const b = 10
const c = () => console.log('foo')
 
if(a > 10) {
  console.log('bar')
}
 
console.log('done')
`;
    const newCode = `const a = 10
const boo = 10
 
if(a === 10) {
  console.log('bar')
}
`;
    const [code1, setCode1] = useState(oldCode);
    const [code2, setCode2] = useState(newCode);
    const [method, setMethod] = useState(DiffMethod.CHARS);
    return (
        <div className="mb-10 mt-4 container px-6">
            <div >
                {/* TODO: Check if this label is accessible, or fallback */}
                {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
                <Label className=" font-Inconsolata text-2xl text-purple-600 ">Compare Type</Label>
                <div className="mt-3">

                    <Button className={` text-sm ${method === DiffMethod.CHARS && "text-green-100 bg-purple-600 "}`} layout="outline" onClick={() => setMethod(DiffMethod.CHARS)}>Chars</Button>
                    <Button className={`ml-3 text-sm ${method === DiffMethod.WORDS && "text-green-100 bg-purple-500"}`} layout="outline" onClick={() => setMethod(DiffMethod.WORDS)}>Words</Button>
                    <Button className={`ml-3 text-sm ${method === DiffMethod.WORDS_WITH_SPACE && "text-green-100 bg-purple-500"}`} layout="outline" onClick={() => setMethod(DiffMethod.WORDS_WITH_SPACE)}>WordsWithSpace</Button>
                    <Button className={`ml-3 text-sm ${method === DiffMethod.LINES && "text-green-100 bg-purple-500"}`} layout="outline" onClick={() => setMethod(DiffMethod.LINES)}>Lines</Button>
                    <Button className={`ml-3 text-sm ${method === DiffMethod.TRIMMED_LINES && "text-green-100 bg-purple-500"}`} layout="outline" onClick={() => setMethod(DiffMethod.TRIMMED_LINES)}>TrimmedLines</Button>
                    <Button className={`ml-3 text-sm ${method === DiffMethod.SENTENCES && "text-green-100 bg-purple-500"}`} layout="outline" onClick={() => setMethod(DiffMethod.SENTENCES)}>Sentences</Button>


                </div>
            </div>
            <div className=" grid gap-6 mb-8 md:grid-cols-1 xl:grid-cols-2">
                <Textarea defaultValue={oldCode} className="font-Inconsolata mt-4 w-1/2 text-lg resize-none" rows="10"
                    onChange={e => setCode1(e.target.value)}
                />
                <Textarea defaultValue={newCode} className="font-Inconsolata mt-4 w-1/2 text-lg resize-none" rows="10"
                    onChange={e => setCode2(e.target.value)} />
            </div>

            <ReactDiffViewer
                oldValue={code1}
                newValue={code2}
                compareMethod={method}
                splitView={true}
            />
        </div >
    );
    ;
}