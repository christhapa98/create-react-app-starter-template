export default function Table({ children, headers }) {
    return (
        <div className="w-full rounded-lg table-container">
            <div className="w-full overflow-x">
                <div className="sticky top-0 z-50 h-5 bg-white " />
                <table className="w-full leading-normal rounded">
                    <thead className="sticky z-50 table-header-group text-white bg-white top-2">
                        <tr className="text-left bg-indigo-700 ">
                            {headers && headers.map((item, index) => {
                                return <th scope="col" key={index} className={`${index === 0 && "rounded-tl-lg"} ${index === headers.length - 1 && "rounded-tr-lg"} ${index === headers.length - 1 && "text-center"} px-5 py-3 pl-3 text-md font-normal border-b border-gray-200 `}> {item} </th>
                            })}
                        </tr>
                    </thead>
                    <tbody className="z-20">
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
