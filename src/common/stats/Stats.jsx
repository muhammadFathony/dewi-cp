// components/Stats.jsx
import StatItem from './StatItem';
import { statsData } from '../../config/stats';

const Stats = () => {
    return (
        <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
                {statsData.map((stat) => (
                    <StatItem
                        key={stat.id}
                        icon={stat.icon}
                        color={stat.color}
                        end={stat.end}
                        label={stat.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stats;