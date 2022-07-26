export const initialData = {
    boards: [
      {
        id: 'board-1',
        columnOrder: ['column-1', 'column-2', 'column-3'],
        columns: [
          {
            id:'column-1',
            boardId: 'board-1',
            title: 'To do column',
            cardOrder: ['card-1', 'card-2', 'card-3'],
            cards:[
              { id: 'card-1', boardId: 'board-1', columnId:'column-1', title:'Điểm danh tuần 4', cover: null },
              { id: 'card-2', boardId: 'board-1', columnId:'column-1', title:'Bài lý thuyết 4', cover: null },
              { id: 'card-3', boardId: 'board-1', columnId:'column-1', title:'Bài thực hành 4', cover: null }
            ]
          },
          {
            id:'column-2',
            boardId: 'board-1',
            title: 'Inprogress column',
            cardOrder: ['card-4', 'card-5'],
            cards:[
              { id: 'card-4', boardId: 'board-1', columnId:'column-1', title:'Thi giữa học kỳ vào tuần 5', cover: null },
              { id: 'card-5', boardId: 'board-1', columnId:'column-1', title:'Phổ biến project cuối kì vào tuần 5', cover: null }
            ]
          },
          {
            id:'column-3',
            boardId: 'board-1',
            title: 'Done column',
            cardOrder: ['card-6', 'card-7', 'card-8', 'card-9', 'card-10', 'card-11', 'card-12', 'card-13', 'card-14'],
            cards:[
              { id: 'card-6', boardId: 'board-1', columnId:'column-1', title:'Điểm danh tuần 1', cover: null },
              { id: 'card-7', boardId: 'board-1', columnId:'column-1', title:'Bài Lý thuyết tuần 1', cover: null },
              { id: 'card-8', boardId: 'board-1', columnId:'column-1', title:'Bài thực hành tuần 1', cover: null },
              { id: 'card-9', boardId: 'board-1', columnId:'column-1', title:'Điểm danh tuần 2', cover: null },
              { id: 'card-10', boardId: 'board-1', columnId:'column-1', title:'Bài lý thuyết tuần 2', cover: null },
              { id: 'card-11', boardId: 'board-1', columnId:'column-1', title:'Bài thực hành tuần 2', cover: null },
              { id: 'card-12', boardId: 'board-1', columnId:'column-1', title:'Điểm danh tuần 3', cover: null },
              { id: 'card-13', boardId: 'board-1', columnId:'column-1', title:'Bài thực hành tuần 2', cover: null },
              { id: 'card-14', boardId: 'board-1', columnId:'column-1', title:'Bài lý thuyết tuần 3', cover: null }
            ]
          }
        ]
      }
    ]
  }