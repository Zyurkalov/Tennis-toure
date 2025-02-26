import { HARD_DATA } from '../components/playersScoreCards/constants';
import { TournamentType } from '../page/Main/type';

function getKeyByValue(value: string): string | undefined {
    return Object.keys(TournamentType).find(
        key => TournamentType[key as keyof typeof TournamentType] === value,
    );
}

export const getTournamentList = (tour: string) => {
    if (tour) {
        const nameTour = getKeyByValue(tour);
        if (nameTour) {
            return HARD_DATA[nameTour];
        } else {
            return HARD_DATA.TyumenCup;
        }
    } else {
        return HARD_DATA.TyumenCup;
    }
};
