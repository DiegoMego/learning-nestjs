import { Injectable } from '@nestjs/common';
import { Ticket } from './interfaces/ticket.interface';

@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [];

  create(ticket: Ticket) {
    this.tickets.push(ticket);
  }

  findAll(): Ticket[] {
    return this.tickets;
  }
}
