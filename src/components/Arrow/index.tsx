import * as React from 'react';
import './arrow.scss';

interface Props {
    status: Boolean,
}

const Arrow = (props: Props) => {
    const iconArrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVRIie2QvUrEUBCFT3J9ADsbC1vfwMJG0G5zJ2kCdmJhY+FD+CAKu9ZJLGIlWImFYOMDLIimFkQSSO6xcIWYn40XBC3ylWdmvgMDjIz8e5xmkKbpelVVB8aYFRuR67olgDPP857reUtSluUOgFPHaXUvhSRIzgHMvhU3F7XWU5IXVvZPzkVk1gxbBQBQFMUhgBsL+XWWZUddg94/RFG0qpS6BbA5IH/M83w7DMNXq4JFyYZS6g7AWs/KizFmy/f9pz5H54u+CIJgTnIC4L1j/EZyskw+WAAAInJPch+AqcUVgFBEHobuBwsWJZckT2rRsdb66ie3ViRJshfH8e6vi0dG/pYPT8pZkeZ2aH8AAAAASUVORK5CYII=';
    
    const renderIcon = () => {
        if (props.status) {
            return <img className='opened' src={iconArrow} />
        }
        return <img className='closed' src={iconArrow} />
    };
    
    return renderIcon();
};

export default Arrow;