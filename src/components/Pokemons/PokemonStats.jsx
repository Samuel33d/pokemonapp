const PokemonStats = ({ stat }) => {
  const getPercentStat = (statValue) => {
    const MAX_STAT_VALUE = 150;

    const percentStat = ((statValue * 100) / MAX_STAT_VALUE).toFixed(1);
    return `${percentStat}%`;
  };

  return (
    <li className="flex flex-col" key={stat.stat.name}>
      <div className="flex justify-between">
        <h5>{stat.stat.name} :</h5>
        <span>{stat.base_stat}/150</span>
      </div>
      <div className=" dark:bg-black/50  relative overflow-hidden bg-slate-200 rounded-md h-6 ">
        <div
          style={{ width: getPercentStat(stat.base_stat) }}
          className={`absolute left-0 statPercent bg-gradient-to-r from-yellow-500 to-orange-500 h-full `}
        ></div>
      </div>
    </li>
  );
};
export default PokemonStats;
