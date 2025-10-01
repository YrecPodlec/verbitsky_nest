import { Table, Model, Column, DataType } from 'sequelize-typescript';
interface UserCredits {
  email: string;
  password: string;
  name: string;
  banned?: boolean;
  banReason?: string | null;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCredits>{
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}