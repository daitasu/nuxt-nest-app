import { Injectable } from "@nestjs/common";
import { User } from "./app.interface";

// getHello()を削除し、getProfile()を追加
@Injectable()
export class AppService {
  getProfile(): User[] {
    return [
      {
        id: 3,
        name: "Nest太郎",
        age: 24,
      },
      {
        id: 4,
        name: "Nest二郎",
        age: 21,
      },
    ];
  }
}
