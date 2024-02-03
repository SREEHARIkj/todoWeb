import { ReactNode } from 'react';

type ConditionalWrapperProps = {
    children: ReactNode;
    conditon: boolean;
    Wrapper: (children: ReactNode) => ReactNode;
};

// type ConditonalRenderProps = Omit<ConditionalWrapperProps, 'Wrapper'> & {children2:ReactNode}

export function ConditionalWrapper({ children, conditon, Wrapper }: ConditionalWrapperProps) {
    return conditon ? Wrapper(children) : children;
}

// export function ConditionalRender({
//     children,
//     conditon,
//     children2,
//   }: ConditonalRenderProps) {
//     return conditon ? children : children2;
//   }
