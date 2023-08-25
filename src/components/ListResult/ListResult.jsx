export default function ListResult(result){

    const mockData = ["Price", "Canes", "Rises"]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Possible solutions:</th>
                    </tr>
                </thead>
                <tbody>
                    {mockData.map((stringValue, index) => (
                    <tr key={index}>
                        <td>{stringValue}</td>
                    </tr>
                    ))}
            </tbody>
    </table>
        </div>
    );
}