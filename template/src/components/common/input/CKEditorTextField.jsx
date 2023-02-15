import { useState } from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CKEditorTextField({ onChange, label }) {
    const [content, setContent] = useState("")
    return (
        <div>
            <p className=" text-xs rounded text-black dark:text-black pb-2" >{label} </p>
            <CKEditor
                editor={ClassicEditor}
                data={content}
                onInit={(editor) => {
                    console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setContent(data);
                    onChange(data);
                }}
            />
        </div>
    )
}
