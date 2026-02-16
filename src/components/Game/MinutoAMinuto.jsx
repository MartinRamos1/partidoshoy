import GoalIcon from '../Icons/GoalIcon';
import RedCardIcon from '../Icons/RedCardIcon';
import YellowCardIcon from '../Icons/YellowCardIcon';
import SubstitutionIcon from '../Icons/SubstitutionIcon';
import HitThePostIcon from '../Icons/HitThePostIcon';

const EVENT_TYPES = {
    1: { icon: GoalIcon, color: 'text-green-600' },
    2: { icon: RedCardIcon, color: 'text-red-600' },
    3: { icon: GoalIcon, color: 'text-green-600' },
    4: { icon: YellowCardIcon, color: 'text-yellow-500' },
    15: { icon: SubstitutionIcon, color: 'text-blue-600' },
    10: { icon: HitThePostIcon, color: 'text-gray-600' }
};

const EventText = ({ event }) => {
    if (event.type === 15) {
        return (
            <div className="flex flex-col gap-1 font-semibold min-w-0">
                <span className="text-green-600 text-sm sm:text-base md:text-lg truncate">
                    {event.texts[0]}
                </span>
                <span className="text-red-600 text-sm sm:text-base md:text-lg truncate">
                     {event.texts[1]}
                </span>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col items-center justify-center gap-1 min-w-0">
            <span className="font-semibold text-sm sm:text-base md:text-lg truncate w-full text-center">{event.texts[0]}</span>
            {event.texts[1] && (
                <span className="text-gray-500 text-xs sm:text-sm md:text-base truncate w-full text-center">
                    {event.texts[1]}
                </span>
            )}
        </div>
    );
};

const Event = ({ event, isLeft }) => {
    const { icon: IconComponent, color } = EVENT_TYPES[event.type] || { icon: null, color: 'text-gray-600' };
    const alignment = isLeft ? 'flex-row-reverse text-right' : '';
    
    return (
        <div className={`flex items-start gap-2 sm:gap-3 py-2 px-2 hover:bg-[#ffffff0d] rounded transition-colors ${alignment} min-w-0`}>
            <span className={`${color} shrink-0 text-lg sm:text-xl md:text-2xl`}>
                {IconComponent ? <IconComponent /> : '•'}
            </span>
            <div className="flex-1 min-w-0">
                <EventText event={event} />
            </div>
        </div>
    );
};

const TeamEvents = ({ events, team, isLeft }) => (
    <div className="flex flex-col gap-2 min-w-0">
        {events
            .filter(e => e.team === team)
            .map((event, i) => <Event key={i} event={event} isLeft={isLeft} />)
        }
    </div>
);

const TimeRow = ({ row }) => (
    <div className="relative w-full min-w-0">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 -translate-x-1/2 hidden sm:block" />
        
        <div className="flex justify-center mb-3 sm:mb-4">
            <span className="bg-[#ffffff1a] text-gray-200 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-bold text-sm sm:text-base md:text-lg z-10 relative">
                {row.time}
            </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-start min-w-0">
            <TeamEvents events={row.events} team={1} isLeft />
            <TeamEvents events={row.events} team={2} />
        </div>
    </div>
);

const StageHeader = ({ stage }) => (
    <div className="bg-[#ffffff1a] text-gray-300 flex flex-col justify-center items-center py-3 sm:py-4 px-4 rounded-lg mb-4 sm:mb-6 mt-4 w-full min-w-0">
        <h2 className="text-base sm:text-lg md:text-xl font-bold truncate max-w-full">{stage.name}</h2>
        {stage.is_penalties_stage && (
            <span className="text-xs sm:text-sm md:text-base bg-yellow-500 text-black px-3 py-1 rounded-full mt-2 font-semibold">
                Penales
            </span>
        )}
    </div>
);

const MinutoAMinuto = ({ data }) => {
    if (!data?.length) {
        return (
            <div className="text-center text-gray-400 py-8 sm:py-12 text-base sm:text-lg">
                No hay eventos disponibles
            </div>
        );
    }

    return (
        <div className="w-full">
            {data.map((stage, i) => (
                <div key={i} className="mb-6 sm:mb-8 w-full min-w-0">
                    <div className="space-y-5 sm:space-y-6">
                        {stage.rows.map((row, j) => <TimeRow key={j} row={row} />)}
                    </div>
                    {stage.show_stage_title && <StageHeader stage={stage} />}
                </div>
            ))}
        </div>
    );
};

export default MinutoAMinuto;