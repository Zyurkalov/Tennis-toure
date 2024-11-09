export type typeCart = {
  tournament: string,
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
        tournament: 'Тюменский кубок',
        type: 'Юниоры, одиночная', 
        status: "completed",
        time: '12:30',
        playerOne: {player: ['С. Сидоров'], score: [6,6,4,4,6]},
        playerTwo: {player:['И. Иванов'], score: [4,4,6,6,1]}
      },
      {
        tournament: 'Тюменский кубок',
        type: 'Юниоры, одиночная', 
        status: "continues",
        time: '14:50',
        playerOne: {player: ['В. Пупкин'], score: [6,6,5,2,2]},
        playerTwo: {player:['И. Иванов'], score: [3,3,6,6,6]}
      },
      {
        tournament: 'Тюменский кубок',
        type: 'Женская, одиночная', 
        status: "completed",
        time: '11:50',
        playerOne: {player: ['М. Чижикова'], score: [4,4,6]},
        playerTwo: {player:['О. Синичкина'], score: [6,6,4]},
      },
      {
        tournament: 'Тюменский кубок',
        type: 'Женская, одиночная', 
        status: "completed",
        time: '11:50',
        playerOne: {player: ['М. Чижикова'], score: [6,6,6]},
        playerTwo: {player:['О. Синичкина'], score: [6,6,6]},
      },
      {
        tournament: 'Тюменский кубок',
        type: 'Женская, одиночная', 
        status: "completed",
        time: '11:50',
        playerOne: {player: ['М. Воронцова'], score: [6,7,6]},
        playerTwo: {player:['О. Лебедева'], score: [6,6,6]},
      },
      {
        tournament: 'Тюменский кубок',
        type: 'Мужская, одиночная', 
        status: "completed",
        time: '10:50',
        playerOne: {player: ['В. Пупкин'], score: [6,1,6,2]},
        playerTwo: {player:['И. Иванов'], score: [1,6,1,6]}
      },
      {
        tournament: 'Тюменский кубок',
        type: 'Мужская, парная', 
        status: "continues",
        time: '14:40',
        playerOne: {player: ['В. Пупкин', 'И. Иванов'], score: [6,1,4,4,4]},
        playerTwo: {player:['A. Петров', 'С. Сидоров'], score: [5,6,6,6,6]},
      },
      {
        tournament: 'Тюменский кубок',
        type: 'Женская, парная', 
        status: "completed",
        time: '14:20',
        playerOne: {player: ['М. Воронцова', 'О. Лебедева'], score: [6,1,4,4,4]},
        playerTwo: {player:['М. Чижикова', 'О. Синичкина'], score: [5,6,6,6,6]},
      },
    ],
    NewName: [
      {
        tournament: 'Новые Имена',
        type: 'Юниоры, одиночная',
        status: "completed",
        time: '12:30',
        playerOne: {player: ['С. Сидоров'], score: [6,6,4,4,6]},
        playerTwo: {player:['И. Иванов'], score: [4,4,6,6,1]}
      },
      {
        tournament: 'Новые Имена',
        type: 'Юниоры, одиночная',
        status: "completed",
        time: '13:15',
        playerOne: {player: ['А. Алексеев'], score: [7,5,6]},
        playerTwo: {player:['П. Петров'], score: [5,7,4]}
      },
      {
        tournament: 'Новые Имена',
        type: 'Юниоры, одиночная',
        status: "completed",
        time: '14:00',
        playerOne: {player: ['Е. Егоров'], score: [6,4,6]},
        playerTwo: {player:['Р. Романов'], score: [4,6,3]}
      },
      {
        tournament: 'Новые Имена',
        type: 'Юниоры, одиночная',
        status: "completed",
        time: '14:45',
        playerOne: {player: ['М. Михайлов'], score: [6,7,6]},
        playerTwo: {player:['Н. Никитин'], score: [4,5,4]}
      },
      {
        tournament: 'Новые Имена',
        type: 'Юниоры, одиночная',
        status: "completed",
        time: '15:30',
        playerOne: {player: ['Г. Григорьев'], score: [6,6,7]},
        playerTwo: {player:['Л. Лебедев'], score: [4,4,5]}
      },
      {
        tournament: 'Новые Имена',
        type: 'Юниоры, одиночная',
        status: "completed",
        time: '16:15',
        playerOne: {player: ['В. Васильев'], score: [6,4,6]},
        playerTwo: {player:['О. Орлов'], score: [4,6,3]}
      },
    ],
    AustralianOpen: [
      {
        tournament: 'Кубок Австралии',
        type: 'Женская, одиночная',
        status: "completed",
        time: '12:30',
        playerOne: {player: ['А. Андреева'], score: [6,6,7,4,6]},
        playerTwo: {player: ['Е. Егорова'], score: [4,4,6,6,3]}
      },
      {
        tournament: 'Кубок Австралии',
        type: 'Женская, одиночная',
        status: "completed",
        time: '13:15',
        playerOne: {player: ['М. Михайлова'], score: [6,5,6,2,4]},
        playerTwo: {player: ['Н. Никитина'], score: [4,6,5,6,3]}
      },
      {
        tournament: 'Кубок Австралии',
        type: 'Мужская, одиночная',
        status: "completed",
        time: '14:00',
        playerOne: {player: ['С. Сидоров'], score: [6,7,5,6,4,6]},
        playerTwo: {player:['И. Иванов'], score: [4,5,7,4,6,3]}
      },
      {
        tournament: 'Кубок Австралии',
        type: 'Мужская, одиночная',
        status: "completed",
        time: '14:45',
        playerOne: {player: ['А. Алексеев'], score: [7,5,7,5,6]},
        playerTwo: {player:['П. Петров'], score: [5,7,6,7,4]}
      },
      {
        tournament: 'Кубок Австралии',
        type: 'Мужская, одиночная',
        status: "completed",
        time: '15:30',
        playerOne: {player: ['Г. Григорьев'], score: [6,6,7,4,7]},
        playerTwo: {player:['Л. Лебедев'], score: [4,4,6,6,5]}
      },
      {
        tournament: 'Кубок Австралии',
        type: 'Женская, одиночная',
        status: "completed",
        time: '16:15',
        playerOne: {player: ['В. Васильева'], score: [6,6,7,4,7]},
        playerTwo: {player:['О. Орлова'], score: [4,4,6,6,5]}
      },
    ]
}