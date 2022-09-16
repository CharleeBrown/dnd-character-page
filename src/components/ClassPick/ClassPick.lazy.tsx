import React, { lazy, Suspense } from 'react';

const LazyClassPick = lazy(() => import('./ClassPick'));

const ClassPick = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClassPick {...props} />
  </Suspense>
);

export default ClassPick;
