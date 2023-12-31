export default function ListResult(props){
    
    return (
        <div>
            <table className="w-full text-center">
                <thead>
                    <tr>
                    <th>Possible solutions: {props.listResult.length}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listResult.map((stringValue, index) => (
                    <tr key={index}>
                        <td>{stringValue}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}