import * as React from 'react';
import './toast.scss';

interface Props {
  show: boolean,
}

const Toast = (props: Props) => {

    const renderToast = () => {
        if (props.show) {
            return (
                <div className="toast2">
                    Saved Successfully
                </div>
            );
        }
        return null;
    };

    return renderToast();
};

export default Toast;
