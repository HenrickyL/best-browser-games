import { v4 as uuid } from 'uuid';


// Interfaces para representar os tipos de dados
interface Game {
    id: string;
    title: string;
    category: string;
    url: string;
    description: string;
    imageUrl?: string;
  }
  
  interface Review {
    gameId: string;
    userId: string;
    rating: number;
    comment: string;
  }
  
  interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    imageUrl?: string;
  }
  
  interface UserLogin {
    email: string;
    password: string;
  }
  
  // Classe StateController para gerenciar o estado
  export abstract class StateController {
    private static users: User[] = [
        {id: uuid(),
        email: 'admin@gmail.com',
        password: 'admin123',
        username: 'admin'
        }
    ];

    private static games: Game[] = [];

    private static reviews: Review[] = [];
  
    // Método estático para adicionar um novo usuário
    static addUser(user: User) {
      const userToAdd:User = {...user,
        email: user.email.toLowerCase(),
        username: user.username.toLowerCase()
        }
      this.users.push(userToAdd);
    }
  
    // Método estático para verificar se um usuário existe
    static userExists(email: string): boolean {
      return this.users.some(user => user.email.toLowerCase() === email);
    }
  
    // Método estático para fazer login
    static login({ email, password }: UserLogin): User | null {
      const user = this.users.find(user => user.email.toLowerCase() === email && user.password === password);
      return user ? user : null;
    }

    // Método estático para adicionar um novo jogo
  static addGame(game: Game) {
    this.games.push(game);
  }

  // Método estático para obter todos os jogos
  static getGames(): Game[] {
    return this.games;
  }

  // Método estático para adicionar uma nova avaliação
  static addReview(review: Review) {
    this.reviews.push(review);
  }

  // Método estático para obter todas as avaliações
  static getReviews(): Review[] {
    return this.reviews;
  }
  }
  