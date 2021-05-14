import { Component, OnInit } from '@angular/core';
import { GroupByPipe } from 'src/app/shared/pipes/group-by.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arr: any;
  constructor(private pipeGroupBy: GroupByPipe) { }

  ngOnInit() {
    // TODO RETIRAR!!!
    this.arr = [
      {
          "status": 1,
          "id": "efbce52e-e7e0-45a7-a195-90e2f1967c73",
          "rev_exp_id": "1976e508-80c9-4f8c-baf7-8670e2773090",
          "user_id": "c6fe52a9-2eba-47a2-87ec-61a44c25ac8a",
          "forma_pagamento": "cash",
          "status_pagamento": "paid",
          "valor": 1000,
          "description": null,
          "data": "2021-04-27T00:00:00.000Z",
          "created_at": "2021-04-30T02:31:55.562Z",
          "updated_at": "2021-04-30T02:31:55.562Z"
      },
      {
          "status": 1,
          "id": "70d4814b-9601-4257-b646-4c3f413e72b1",
          "rev_exp_id": "1976e508-80c9-4f8c-baf7-8670e2773090",
          "user_id": "c6fe52a9-2eba-47a2-87ec-61a44c25ac8a",
          "forma_pagamento": "cash",
          "status_pagamento": "paid",
          "valor": 7000,
          "description": null,
          "data": "2021-04-27T00:00:00.000Z",
          "created_at": "2021-04-30T16:49:25.096Z",
          "updated_at": "2021-04-30T16:49:25.096Z"
      },
      {
          "status": 1,
          "id": "9a3e81ca-6637-48d2-a4da-a4ef6e176e07",
          "rev_exp_id": "1976e508-80c9-4f8c-baf7-8670e2773090",
          "user_id": "c6fe52a9-2eba-47a2-87ec-61a44c25ac8a",
          "forma_pagamento": "cash",
          "status_pagamento": "paid",
          "valor": 7000,
          "description": null,
          "data": "2021-04-27T00:00:00.000Z",
          "created_at": "2021-05-04T23:20:20.367Z",
          "updated_at": "2021-05-04T23:20:20.367Z"
      },
      {
          "status": 1,
          "id": "c7f1cc3e-75d6-4952-9c4d-99efb8a696df",
          "rev_exp_id": "1976e508-80c9-4f8c-baf7-8670e2773090",
          "user_id": "c6fe52a9-2eba-47a2-87ec-61a44c25ac8a",
          "forma_pagamento": "debit",
          "status_pagamento": "paid",
          "valor": 3000,
          "description": "",
          "data": "2021-05-13T00:00:00.000Z",
          "created_at": "2021-05-13T23:43:50.109Z",
          "updated_at": "2021-05-13T23:43:50.109Z"
      }
  ];

  let teste = this.pipeGroupBy.transform(this.arr, 'data', 'valor');
  console.log(teste);

  }

}
