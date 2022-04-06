import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('userprofile')
export class UserProfile {
  @PrimaryGeneratedColumn('uuid', { name: 'userid' })
  UserId: string;

  @Column({ name: 'firstname', length: 256 })
  FirstName: string;

  @Column({ name: 'lastname', length: 256 })
  LastName: string;

  @Column({ name: 'allowemailnotification' })
  AllowEmailNotification: boolean;

  @Column({ name: 'allowpriorityaemailnotification' })
  AllowPriorityAEmailNotification: boolean;

  @Column({ name: 'cityid', nullable: true })
  CityId: number;

  @Column({ name: 'phonenumber', length: 15, nullable: true })
  PhoneNumber: string;

  @Column({ name: 'issubscribedtonotifications' })
  IsSubscribedToNotifications: boolean;

  @Column({ name: 'updatedby', type: 'uuid' })
  UpdatedBy: string;

  @Column({ name: 'updatedon', type: 'timestamp' })
  UpdatedOn: Date;

  @Column({ name: 'code', length: 128, nullable: true })
  Code: string;

  @Column({ name: 'lastlaborcostid', nullable: true })
  LastLaborCostId: number;

  @Column({ name: 'classification', length: 256, nullable: true })
  Classification: string;

  @Column({ name: 'email', length: 256 })
  Email: string;
}
