import DownloadLink from 'react-download-link';
import { useSelector } from 'react-redux';
import React, { CSSProperties } from 'react'


export default function Doc() {

    const data = useSelector(state => state.wordlist);
    const obejctToDocx = (object) => {
        let docx = '';
        for (let word of object) {
            docx += `${word.name}  ${word.definition}  ${word.detail}\n`;
        }
        return docx;

    }

    const res = obejctToDocx(data);
    return (
        <div>

            <DownloadLink
                className=" font-concert bg-purple-600 text-white text-base px-4 py-2 rounded-lg"
                style={{ "--my-css-var": 10 }}
                label="Download +"
                tagName='button'
                filename="words.doc"
                exportFile={() => res}
            />

        </div>
    )
}
