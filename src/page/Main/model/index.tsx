
import { createStore, createEvent } from 'effector';
import { typeObjCart } from '../../../components/playersScoreCards/constants';

export const $resultTournaments = createStore<typeObjCart>({});
export const $listTournaments = createStore([])

export const addTournament = createEvent<string>();
export const searchTournament = createEvent<string>()
