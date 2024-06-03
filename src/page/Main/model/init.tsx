import { createEvent } from 'effector';
import { $resultTournaments, addTournament, searchTournament } from './index.js';
import { HARD_DATA } from '../../../components/playersScoreCards/constants';

// $resultTournaments.on(addTournament, (listTounament, newTournament) => {
//     if(listTounament[newTournament] !== undefined) {
//         console.log(true)
//     } else {
//         console.log(false)
//         listTounament[newTournament] = HARD_DATA[newTournament]
//     }
// });
$resultTournaments.on(addTournament, (state, name) => {
    return { ...state, [name]: HARD_DATA[name] };
});

$resultTournaments.on(searchTournament, (obj, key) => {
    if (obj[key] !== undefined) {
      return;
    } else {
      addTournament(key);
    }
  });

const targetEvent = createEvent();

// sample({
//     source: $resultTournaments,
//     clock: addTournament,
//     target: targetEvent,
//     fn: (storeValue) => `Event triggered with: ${storeValue}`
//   });

targetEvent.watch((data) => console.log(data));

export { $resultTournaments, addTournament, targetEvent }