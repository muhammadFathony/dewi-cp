// components/StatItem.jsx
import { useCountUp } from '../../hooks/useCountUp';

const StatItem = ({ icon, color, end, label }) => {
    const { count, countRef } = useCountUp(end, 2000);

    return (
        <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className={`${icon} ${color} flex-shrink-0`}></i>
                <div>
                    <span ref={countRef} className="purecounter">
                        {count}
                    </span>
                    <p>{label}</p>
                </div>
            </div>
        </div>
    );
};

export default StatItem;