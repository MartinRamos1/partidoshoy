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
                <span className="text-green-700 rounded-md px-1 truncate">
                    {event.texts[0]}
                </span>
                <span className="text-red-700 rounded-md px-1 truncate">
                     {event.texts[1]}
                </span>
            </div>
        );
    }
    
    return (
        <>
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 min-w-0">
            <span className="font-semibold truncate w-full text-center">{event.texts[0]}</span>
            {event.texts[1] && (
                <span className="text-gray-500 text-xs sm:text-sm truncate w-full text-center">
                    {event.texts[1]}
                </span>
            )}
        </div>
        </>
    );
};

const Event = ({ event, isLeft }) => {
    const { icon: IconComponent, color } = EVENT_TYPES[event.type] || { icon: null, color: 'text-gray-600' };
    const alignment = isLeft ? 'flex-row-reverse text-right' : '';
    
    return (
        <div className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg ${alignment} min-w-0`}>
            <div className="flex items-center justify-center gap-1 sm:gap-2 min-w-0 w-full">

            <span className={`${color} shrink-0`}>
                {IconComponent ? <IconComponent /> : '•'}
            </span>
            <div className="flex-1 text-sm sm:text-base md:text-lg min-w-0">
                <EventText event={event} />
            </div>
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
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden sm:block" />
        
        <div className="flex justify-center mb-2 sm:mb-3">
            <span className="bg-gray-800 text-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold text-xs sm:text-sm z-10 relative">
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
    <div className="bg-gray-900 text-gray-300 flex flex-col justify-center items-center p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 mt-2 w-full min-w-0">
        <h2 className="text-base sm:text-lg md:text-xl font-bold truncate max-w-full">{stage.name}</h2>
        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-2 flex-wrap">
            {stage.is_penalties_stage && (
                <span className="text-xs sm:text-sm bg-yellow-500 text-black px-2 py-1 rounded">
                    Penales
                </span>
            )}
        </div>
    </div>
);

const MinutoAMinuto = ({ data }) => {
    if (!data?.length) {
        return (
            <div className="text-center text-gray-500 py-8 sm:py-12 text-sm sm:text-base">
                No hay eventos disponibles
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-2 sm:p-4 w-full overflow-hidden">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-300">
                Minuto a Minuto
            </h1>
            
            {data.map((stage, i) => (
                <div key={i} className="mb-6 sm:mb-8 w-full min-w-0">
                    <div className="space-y-4 sm:space-y-6">
                        {stage.rows.map((row, j) => <TimeRow key={j} row={row} />)}
                    </div>
                    {stage.show_stage_title && <StageHeader stage={stage} />}
                </div>
            ))}
        </div>
    );
};

export default MinutoAMinuto;