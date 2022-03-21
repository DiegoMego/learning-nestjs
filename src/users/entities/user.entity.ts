import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("userprofile")
export class User {
  @PrimaryGeneratedColumn('uuid')
  UserId: string;

  @Column({length: 256})
  FirstName: string

  @Column({length: 256})
  LastName: string

  @Column()
  AllowEmailNotification: boolean

  @Column()
  AllowPriorityAEmailNotification: boolean

  @Column({nullable: true})
  CityId: number

  @Column({length: 15, nullable: true})
  PhoneNumber: string

  @Column()
  IsSubscribedToNotifications: boolean

  @Column('uuid')
  UpdatedBy: string

  @Column('timestamp')
  UpdatedOn: Date

  @Column({length: 128, nullable: true})
  Code: string

  @Column({nullable: true})
  LastLaborCostId: number

  @Column({length: 256, nullable: true})
  Classification: string

  @Column({length: 256})
  Email: string
}
