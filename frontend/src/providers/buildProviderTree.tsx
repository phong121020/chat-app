/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { ReactNode, ComponentType } from "react";

import type { ComponentType, ReactNode } from "react"

// type ProviderWithProps<P = any> = [ComponentType<P>, P?];

// export function buildProvidersTree(providersWithProps: ProviderWithProps[]) {
//   // Component khởi tạo: chỉ render children
//   const initialComponent = ({ children }: { children: ReactNode }) => <>{children}</>;

//   // Dùng reduce để lồng các Provider
//   return providersWithProps.reduce(
//     (AccumulatedComponents, [Provider, props = {}]) => {
//       const Wrapper = ({ children }: { children: ReactNode }) => (
//         <AccumulatedComponents>
//           <Provider {...(props as any)}>{children}</Provider>
//         </AccumulatedComponents>
//       );
//       return Wrapper;
//     },
//     initialComponent
//   );
// }

type Props<P = any> = [ComponentType<P>, P?]

export const buildProvidersTree = (providersWithProps: Props[]) => {
    const initialComponent = ({ children }: { children: ReactNode }) => <>{children}</>

    return providersWithProps.reduce((AccumulatedComponents, [Provider, props = {}]) => {
        return ({ children }: { children: ReactNode }) => <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
    }, initialComponent)
}
