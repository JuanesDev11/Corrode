import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer} from 'recharts';

export default function EstaditicaEquipo({ equipo }) {  
  const estadistica=equipo?.estadisticaGeneral || equipo?.estadisticaJugador || [];

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">
          Rendimiento General
        </h2>
          {estadistica===equipo?.estadisticaGeneral?(
            <p className="text-sm text-gray-400">Equipo-2026</p>
          ):(
            <p className="text-sm text-gray-400">{equipo.name} - {equipo.ps}</p>
          )}
      </div>
      <div className="w-full h-[320px] my-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={estadistica}>
            <PolarGrid stroke="#0022419c" />
            <PolarAngleAxis 
              dataKey="atributo" 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={false} 
              axisLine={false} 
            />
            <Radar
              name={equipo?.name || 'Equipo'}
              dataKey="valor"
              stroke="#148ab9"
              fill="#148ab9"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}