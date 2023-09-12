import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import { useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SimpleBackdrop from "../body-items/extras/SimpleBackdrop";

function MyFallbackComponent({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export default function CategoryItems({ match }) {
    const { data } = useContext(DataContext);
    const { id: category } = useParams()

    if (!data) {
        return <SimpleBackdrop />
    }
    const filteredData = data.filter(item => item.category === category);

    return (
        <ErrorBoundary FallbackComponent={MyFallbackComponent}>
            <div>
                {filteredData.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <img src={item.image} alt={item.title} />
                        <p>Price: {item.price}</p>
                        <p>Stock: {item.stock}</p>
                    </div>
                ))}

            </div>
        </ErrorBoundary>
    );
}
