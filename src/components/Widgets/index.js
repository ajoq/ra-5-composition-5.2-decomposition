import Widget from './Widget';
import {
    weatherWidget,
    germanyMap,
    broadcastSchedule,
    tvProgram,
    topVisited,
} from '../data/data';

/**
 * Выводит виджеты
 */
function Widgets() {
    return (
        <>
            <Widget {...weatherWidget} />
            <Widget {...germanyMap} />
            <Widget {...broadcastSchedule} />
            <Widget {...tvProgram} />
            <Widget {...topVisited} />
        </>
    );
}

export default Widgets;
