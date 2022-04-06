import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTicketDTO } from './dto/create-ticket.dto';
import { Ticket } from './interfaces/ticket.interface';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {}

  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Post()
  async create(@Body() createTicketDTO: CreateTicketDTO) {
    this.ticketsService.create(createTicketDTO);
  }
}
