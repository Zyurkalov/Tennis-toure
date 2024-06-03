export type typeCart = {
  type: string;
  status: "completed" | "continues";
  time: string;
  playerOne: {
      player: string[];
      score: number[];
  };
  playerTwo: {
      player: string[];
      score: number[];
  }}
  export type typeObjCart = { [key: string]: typeCart[]};

export const HARD_DATA: typeObjCart = {
  TyumenCup: [
      {
        type: 'Юниоры, одиночная', 
        status: "completed",
        time: '12:30',
        playerOne: {player: ['С. Сидоров'], score: [6,6,4,4,6]},
        playerTwo: {player:['И. Иванов'], score: [4,4,6,6,1]}
      },
      {
        type: 'Юниоры, одиночная', 
        status: "continues",
        time: '10:50',
        playerOne: {player: ['В. Пупкин'], score: [6,6,5,2,2]},
        playerTwo: {player:['И. Иванов'], score: [3,3,6,6,6]}
      },
      {
        type: 'Мужская, парная', 
        status: "completed",
        time: '14:20',
        playerOne: {player: ['В. Пупкин', 'И. Иванов'], score: [6,1,4,4,4]},
        playerTwo: {player:['A. Петров', 'С. Сидоров'], score: [5,6,6,6,6]},
      },
      {
        type: 'Женская, одиночная', 
        status: "completed",
        time: '11:50',
        playerOne: {player: ['М. Чижикова'], score: [4,4,6]},
        playerTwo: {player:['О. Синичкина'], score: [6,6,4]},
      },
      {
        type: 'Женская, одиночная', 
        status: "completed",
        time: '11:50',
        playerOne: {player: ['М. Чижикова'], score: [6,6,6]},
        playerTwo: {player:['О. Синичкина'], score: [6,6,6]},
      }
    ]
}