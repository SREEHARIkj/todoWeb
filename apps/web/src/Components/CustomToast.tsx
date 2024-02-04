import React, { useEffect, useRef } from 'react';

type Props = {
    message: string;
};

const CustomToast: React.FC<Props> = ({ message }: Props) => {
    const modal = useRef<HTMLDialogElement>(null!);
    useEffect(() => {
        modal.current.show();
        const timer = setTimeout(() => {
            modal.current?.close();
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [message]);

    const onClose = () => {
        modal.current?.close();
    };

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'transilate(-50%,-50%)' }}>
            <dialog ref={modal}>
                <button autoFocus onClick={() => onClose()}>
                    Close
                </button>
                <p>{message}</p>
            </dialog>
        </div>
    );
};

export default CustomToast;
