import React, {Suspense} from 'react';
import ErrorBoundaryComponent from'./ErrorBoundary.Component';

const ComponentToTestBoundaries = () => {

    const ChildComponent = React.lazy(() => import('./Child'))
    return (
        <>
            <ErrorBoundaryComponent>
                <Suspense fallback={<div>Loading...</div>}>
                    <ChildComponent/>
                </Suspense>
            </ErrorBoundaryComponent>
        </>
    );
};

export default ComponentToTestBoundaries;

