export default function ListResult(props){
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Possible solutions:</th>
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